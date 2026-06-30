import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import IntroScreen from "./components/IntroScreen";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationSection from "./components/CertificationSection";
import ContactSection from "./components/ContactSection";
import { PROJECTS } from "./data";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certification", label: "Certification" },
  { id: "contact", label: "Contact" },
];

const PROJECTS_INDEX = 2;

export default function App() {
  const [isSystemActive, setIsSystemActive] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const isScrollLockedRef = useRef(false);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const triggerScroll = (direction: "up" | "down") => {
    if (isScrollLockedRef.current) return;
    isScrollLockedRef.current = true;
    setTimeout(() => { isScrollLockedRef.current = false; }, 650);

    if (direction === "down") {
      if (currentSectionIndex < SECTIONS.length - 1) {
        setCurrentSectionIndex((prev) => prev + 1);
      }
    } else {
      if (currentSectionIndex > 0) {
        setCurrentSectionIndex((prev) => prev - 1);
      }
    }
  };

  const triggerProjectScroll = (direction: "next" | "prev") => {
    if (isScrollLockedRef.current) return;
    isScrollLockedRef.current = true;
    setTimeout(() => { isScrollLockedRef.current = false; }, 550);

    if (direction === "next") {
      if (currentProjectIndex < PROJECTS.length - 1) {
        setCurrentProjectIndex((prev) => prev + 1);
      } else {
        setCurrentSectionIndex(3); // Skills
      }
    } else {
      if (currentProjectIndex > 0) {
        setCurrentProjectIndex((prev) => prev - 1);
      } else {
        setCurrentSectionIndex(1); // About
      }
    }
  };

  const handleNavigateToSection = (index: number) => {
    setCurrentSectionIndex(index);
    if (index === PROJECTS_INDEX) {
      setCurrentProjectIndex(0);
    }
  };

  useEffect(() => {
    if (!isSystemActive) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (
        currentSectionIndex === PROJECTS_INDEX &&
        Math.abs(e.deltaX) > 15 &&
        Math.abs(e.deltaX) > Math.abs(e.deltaY)
      ) {
        e.deltaX > 0 ? triggerProjectScroll("next") : triggerProjectScroll("prev");
        return;
      }

      if (Math.abs(e.deltaY) < 18) return;
      e.deltaY > 0 ? triggerScroll("down") : triggerScroll("up");
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        triggerScroll("down");
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        triggerScroll("up");
      } else if (e.key === "ArrowRight" && currentSectionIndex === PROJECTS_INDEX) {
        e.preventDefault();
        triggerProjectScroll("next");
      } else if (e.key === "ArrowLeft" && currentSectionIndex === PROJECTS_INDEX) {
        e.preventDefault();
        triggerProjectScroll("prev");
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSystemActive, currentSectionIndex, currentProjectIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    const touch = e.changedTouches[0];
    const diffX = touchStartRef.current.x - touch.clientX;
    const diffY = touchStartRef.current.y - touch.clientY;
    const threshold = 55;

    if (currentSectionIndex === PROJECTS_INDEX && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > threshold) triggerProjectScroll("next");
      else if (diffX < -threshold) triggerProjectScroll("prev");
      touchStartRef.current = null;
      return;
    }

    if (Math.abs(diffY) > Math.abs(diffX)) {
      if (diffY > threshold) triggerScroll("down");
      else if (diffY < -threshold) triggerScroll("up");
    }
    touchStartRef.current = null;
  };

  return (
    <div
      id="app-root-container"
      className="w-full h-screen overflow-hidden relative bg-cyber-dark text-white font-sans selection:bg-zinc-700/50 selection:text-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        {!isSystemActive ? (
          <IntroScreen key="intro" onEnter={() => setIsSystemActive(true)} />
        ) : (
          <React.Fragment key="main-app">
            <Header
              sections={SECTIONS}
              currentSectionIndex={currentSectionIndex}
              onNavClick={handleNavigateToSection}
            />

            <motion.div
              id="vertical-deck"
              className="w-full h-full flex flex-col"
              animate={{ y: `-${currentSectionIndex * 100}vh` }}
              transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
            >
              <div className="w-full h-screen flex-shrink-0">
                <HomeSection
                  onViewProjects={() => handleNavigateToSection(2)}
                  onContactClick={() => handleNavigateToSection(5)}
                />
              </div>

              <div className="w-full h-screen flex-shrink-0">
                <AboutSection />
              </div>

              <div className="w-full h-screen flex-shrink-0">
                <ProjectsSection
                  currentProjectIndex={currentProjectIndex}
                  onNextProject={() => triggerProjectScroll("next")}
                  onPrevProject={() => triggerProjectScroll("prev")}
                  onProjectSelect={(idx) => setCurrentProjectIndex(idx)}
                />
              </div>

              <div className="w-full h-screen flex-shrink-0">
                <SkillsSection />
              </div>

              <div className="w-full h-screen flex-shrink-0">
                <CertificationSection />
              </div>

              <div className="w-full h-screen flex-shrink-0">
                <ContactSection />
              </div>
            </motion.div>
          </React.Fragment>
        )}
      </AnimatePresence>
    </div>
  );
}