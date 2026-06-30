import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowRight, Code } from "lucide-react";

interface HomeSectionProps {
  onViewProjects: () => void;
  onContactClick: () => void;
}

const ADJECTIVES = ["Security-Focused", "Full-Stack"];

export default function HomeSection({ onViewProjects }: HomeSectionProps) {
  const [adjIdx, setAdjIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullWord = ADJECTIVES[adjIdx];
    let timer: NodeJS.Timeout;

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setAdjIdx((prev) => (prev + 1) % ADJECTIVES.length);
    } else if (isDeleting) {
      timer = setTimeout(() => setCurrentText((p) => p.slice(0, -1)), 40);
    } else {
      timer = setTimeout(() => setCurrentText((p) => fullWord.slice(0, p.length + 1)), 75);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, adjIdx]);

  const nameWords = "Halima Abdirizak Mohamed".split(" ");

  return (
    <section
      id="section-home"
      className="relative w-full h-screen flex flex-col justify-center px-4 sm:px-6 md:px-16 lg:px-24 bg-cyber-dark bg-dot-matrix overflow-hidden pt-14 sm:pt-16"
    >
      {/* Subtle ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 bg-white/[0.02] blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center gap-5 sm:gap-6 relative z-10">

        {/* Hello label */}
        <p className="font-mono text-sm sm:text-base text-zinc-500 tracking-widest uppercase">
          Hello, I'm
        </p>

        {/* Animated name */}
        <h1 className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4 md:gap-x-5 gap-y-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight select-none">
          {nameWords.map((word, wordIdx) => {
            const offset = nameWords.slice(0, wordIdx).reduce((a, w) => a + w.length, 0);
            return (
              <span key={wordIdx} className="inline-block whitespace-nowrap">
                {Array.from(word).map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    className="inline-block text-white font-black cursor-pointer origin-bottom drop-shadow-[0_2px_8px_rgba(255,255,255,0.08)]"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.2,
                      delay: (offset + charIdx) * 0.06,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      scale: 1.35,
                      y: -14,
                      rotate: [0, -12, 12, 0],
                      transition: { type: "spring", stiffness: 450, damping: 9 },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            );
          })}
        </h1>

        {/* Subtitle with typewriter */}
        <h2 className="text-base sm:text-lg md:text-xl font-mono tracking-tight flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-zinc-400">
          <span className="text-zinc-200 font-bold">Cybersecurity Analyst</span>
          <span className="text-zinc-700">&</span>
          <span className="text-zinc-300 font-medium inline-flex items-center">
            <span>{currentText}</span>
            <span className="text-white font-bold select-none mx-0.5">|</span>
            <span className="ml-1">Developer</span>
          </span>
        </h2>

        {/* CTA */}
        <div className="pt-2 sm:pt-4">
          <button
            onClick={onViewProjects}
            className="group inline-flex items-center gap-2 sm:gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black hover:bg-zinc-100 font-mono text-sm font-semibold tracking-wider uppercase rounded-lg border border-zinc-300/20 shadow-lg shadow-white/5 hover:shadow-white/10 transition-all duration-300"
          >
            <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Explore Projects</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-16 sm:top-20 left-6 sm:left-10 w-4 h-4 border-t border-l border-zinc-800 pointer-events-none" />
      <div className="absolute top-16 sm:top-20 right-6 sm:right-10 w-4 h-4 border-t border-r border-zinc-800 pointer-events-none" />
      <div className="absolute bottom-6 sm:bottom-20 left-6 sm:left-10 w-4 h-4 border-b border-l border-zinc-800 pointer-events-none" />
      <div className="absolute bottom-6 sm:bottom-20 right-6 sm:right-10 w-4 h-4 border-b border-r border-zinc-800 pointer-events-none" />
    </section>
  );
}
