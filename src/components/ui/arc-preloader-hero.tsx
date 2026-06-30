"use client";

import * as React from "react";
import {
  animate,
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "motion/react";

export interface ArcRevealHeroProps {
  sentence?: string;
  holdDuration?: number;
  revealDuration?: number;
  onComplete?: () => void;
}

type Phase = "intro" | "reveal" | "done";

export function ArcRevealHero({
  sentence = "Building secure solutions for a connected world.",
  holdDuration = 1800,
  revealDuration = 1200,
  onComplete,
}: ArcRevealHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = React.useState<Phase>("intro");

  const progress = useMotionValue(0);

  // Arc fill path — rises from below the screen upward
  //   p=0 → chord at y=110 (fully off-screen below, nothing covering white)
  //   p=1 → chord at y=-30 (off-screen above, entire screen covered with dark)
  const arcFillPath = useTransform(progress, (p: number) => {
    const edge = 110 - p * 140;
    const control = edge + 28;
    return `M 0 ${edge} Q 50 ${control} 100 ${edge} L 100 110 L 0 110 Z`;
  });

  const arcEdgePath = useTransform(progress, (p: number) => {
    const edge = 110 - p * 140;
    const control = edge + 28;
    return `M 0 ${edge} Q 50 ${control} 100 ${edge}`;
  });

  React.useEffect(() => {
    if (!prefersReducedMotion) return;
    onComplete?.();
  }, [prefersReducedMotion, onComplete]);

  React.useEffect(() => {
    if (prefersReducedMotion || phase !== "intro") return;
    const t = window.setTimeout(() => setPhase("reveal"), holdDuration);
    return () => window.clearTimeout(t);
  }, [prefersReducedMotion, phase, holdDuration]);

  React.useEffect(() => {
    if (phase !== "reveal") return;
    const controls = animate(progress, 1, {
      duration: revealDuration / 1000,
      ease: [0.85, 0, 0.15, 1],
      onComplete: () => setPhase("done"),
    });
    return () => controls.stop();
  }, [phase, progress, revealDuration]);

  React.useEffect(() => {
    if (phase !== "done") return;
    const t = window.setTimeout(() => onComplete?.(), 280);
    return () => window.clearTimeout(t);
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="arc-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-white"
        >
          {/* Corner brackets — dark on white */}
          <div className="absolute top-8 left-8 w-5 h-5 border-t-2 border-l-2 border-zinc-900/30 z-10" />
          <div className="absolute top-8 right-8 w-5 h-5 border-t-2 border-r-2 border-zinc-900/30 z-10" />
          <div className="absolute bottom-8 left-8 w-5 h-5 border-b-2 border-l-2 border-zinc-900/30 z-10" />
          <div className="absolute bottom-8 right-8 w-5 h-5 border-b-2 border-r-2 border-zinc-900/30 z-10" />

          {/* The sentence — black text on white */}
          <AnimatePresence mode="wait">
            {phase === "intro" && (
              <motion.p
                key="sentence"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12, transition: { duration: 0.25 } }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 select-none px-8 sm:px-16 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {sentence}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Dark arc sweeping up from below — reveals the dark site underneath */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="arc-edge-glow" x="-5%" y="-50%" width="110%" height="200%">
                <feGaussianBlur stdDeviation="0.4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Dark fill sweeping over the white intro */}
            <motion.path d={arcFillPath} fill="#0b0b0d" />
            {/* Subtle dark edge line — visible on the white area */}
            <motion.path
              d={arcEdgePath}
              fill="none"
              stroke="rgba(0,0,0,0.18)"
              strokeWidth="0.3"
              filter="url(#arc-edge-glow)"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ArcRevealHero;
