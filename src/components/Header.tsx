import { motion } from "motion/react";

interface HeaderProps {
  sections: { id: string; label: string }[];
  currentSectionIndex: number;
  onNavClick: (index: number) => void;
}

export default function Header({ sections, currentSectionIndex, onNavClick }: HeaderProps) {
  return (
    <header
      id="site-header"
      className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/60 backdrop-blur-md border-b border-zinc-800/60 px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between"
    >
      {/* Brand */}
      <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-white shrink-0">
        haml_
      </span>

      {/* Navigation — horizontally scrollable on very small screens */}
      <nav
        id="navbar-links"
        className="flex items-center overflow-x-auto no-scrollbar gap-0.5 sm:gap-1"
      >
        {sections.map((section, idx) => {
          const isActive = idx === currentSectionIndex;
          return (
            <button
              key={section.id}
              id={`nav-link-${section.id}`}
              onClick={() => onNavClick(idx)}
              className={`relative shrink-0 px-2 sm:px-3 py-1.5 font-mono text-[10px] sm:text-xs uppercase tracking-wide cursor-pointer focus:outline-none transition-all duration-300 ${
                isActive ? "text-white font-semibold" : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              {section.label}
              {isActive && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-1 right-1 h-px bg-white"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
