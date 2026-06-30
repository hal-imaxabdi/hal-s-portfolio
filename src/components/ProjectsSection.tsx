import { motion, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect } from "react";
import { PROJECTS } from "../data";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectsSectionProps {
  currentProjectIndex: number;
  onNextProject: () => void;
  onPrevProject: () => void;
  onProjectSelect?: (index: number) => void;
}

// The entire layout slides in/out like turning a page
const pageVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-30%" : "30%",
    opacity: 0,
    transition: { duration: 0.3, ease: [0.76, 0, 0.24, 1] },
  }),
};

// Text elements stagger in after the slide
const textContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.25 },
  },
};

const textLine = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectsSection({
  currentProjectIndex,
  onNextProject,
  onPrevProject,
  onProjectSelect,
}: ProjectsSectionProps) {
  const total = PROJECTS.length;
  const safeIndex = Math.min(Math.max(currentProjectIndex, 0), total - 1);
  const project = PROJECTS[safeIndex];

  const [direction, setDirection] = useState(1);
  const prevIndexRef = useRef(safeIndex);

  useEffect(() => {
    setDirection(safeIndex >= prevIndexRef.current ? 1 : -1);
    prevIndexRef.current = safeIndex;
  }, [safeIndex]);

  const handleNext = () => { setDirection(1); onNextProject(); };
  const handlePrev = () => { setDirection(-1); onPrevProject(); };

  if (!project) return null;

  return (
    <section
      id="section-projects"
      className="relative w-full h-full bg-[#080808] overflow-hidden flex flex-col"
    >
      {/* ── Top bar ── */}
      <div className="shrink-0 flex items-center justify-between px-5 sm:px-10 pt-14 sm:pt-16 pb-3 sm:pb-4 z-20">
        <h2 className="font-mono text-xs sm:text-sm tracking-widest uppercase text-zinc-600">
          Featured Projects
        </h2>
        {/* Progress dots */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {PROJECTS.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setDirection(idx >= safeIndex ? 1 : -1);
                onProjectSelect?.(idx);
              }}
              aria-label={`Go to project ${idx + 1}`}
              className="p-1 -m-1"
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  idx === safeIndex
                    ? "w-5 h-1 sm:w-6 sm:h-1.5 bg-white"
                    : "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-zinc-700 hover:bg-zinc-400"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* ── Main animated content ── */}
      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={safeIndex}
            custom={direction}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            {/* ── Left / Top: Project image ── */}
            <div className="h-44 sm:h-56 md:h-full md:w-[55%] relative overflow-hidden bg-zinc-950 shrink-0">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
              {/* Gradient overlay fading into the text panel (desktop) */}
              <div className="absolute inset-0 hidden md:block"
                style={{ background: "linear-gradient(to right, transparent 60%, #080808 100%)" }}
              />
              {/* Gradient overlay fading downward (mobile) */}
              <div className="absolute inset-0 md:hidden"
                style={{ background: "linear-gradient(to bottom, transparent 60%, #080808 100%)" }}
              />
              {/* Watermark project number on image */}
              <span
                aria-hidden
                className="absolute bottom-2 left-3 sm:bottom-4 sm:left-5 font-display font-black text-[5rem] sm:text-[7rem] leading-none text-white/[0.06] select-none pointer-events-none"
              >
                {String(safeIndex + 1).padStart(2, "0")}
              </span>
            </div>

            {/* ── Right / Bottom: Project info ── */}
            <motion.div
              variants={textContainer}
              initial="hidden"
              animate="show"
              className="md:w-[45%] flex flex-col justify-center px-5 sm:px-8 md:px-10 lg:px-14 py-4 md:py-0 overflow-y-auto"
            >
              <motion.span variants={textLine} className="font-mono text-xs sm:text-sm text-zinc-600 mb-2 sm:mb-3">
                {String(safeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </motion.span>

              <motion.h3
                variants={textLine}
                className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3 sm:mb-4 md:mb-5"
              >
                {project.title}
              </motion.h3>

              <motion.p
                variants={textLine}
                className="font-sans text-base sm:text-lg text-zinc-300 leading-relaxed antialiased mb-6 sm:mb-8 max-w-sm"
              >
                {project.description}
              </motion.p>

              {project.githubUrl && (
                <motion.a
                  variants={textLine}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-black bg-white hover:bg-zinc-100 border border-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-mono text-sm sm:text-base font-bold tracking-wider uppercase transition-all duration-300 w-fit group"
                >
                  View on GitHub
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Bottom nav ── */}
      <div className="shrink-0 flex items-center justify-between px-5 sm:px-10 py-3 sm:py-4 z-20 border-t border-zinc-900/60">
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous project"
          className="flex items-center gap-1.5 sm:gap-2 text-zinc-500 hover:text-white transition-colors font-mono text-xs sm:text-sm uppercase tracking-widest group"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:-translate-x-0.5 transition-transform" />
          Prev
        </button>

        <span className="font-mono text-xs sm:text-sm text-zinc-700 tracking-widest">
          {String(safeIndex + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
        </span>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next project"
          className="flex items-center gap-1.5 sm:gap-2 text-zinc-500 hover:text-white transition-colors font-mono text-xs sm:text-sm uppercase tracking-widest group"
        >
          Next
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
