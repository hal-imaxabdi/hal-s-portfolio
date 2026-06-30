import React, { useState } from "react";
import {
  Code,
  Terminal,
  Cpu,
  Database,
  Shield,
  Settings,
  Key,
  Lock,
  Server,
  Boxes,
  Layers,
  Network,
  GitBranch,
  Binary,
  Globe,
  Eye,
  Crosshair,
  Activity,
  Search,
  Users,
  Smartphone,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  title: string;
  id: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function SkillsSection() {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("languages");

  const THREE_CATEGORIES: SkillCategory[] = [
    {
      title: "Languages & Dev",
      id: "languages",
      icon: <Code className="w-3.5 h-3.5" />,
      skills: [
        { name: "Python", icon: <Terminal className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "JavaScript", icon: <FileCodeEmblem className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "React", icon: <Cpu className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "Node.js", icon: <Layers className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "Flask", icon: <Globe className="w-3.5 h-3.5 text-zinc-400" /> },
        { name: "SQL", icon: <Database className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "MongoDB", icon: <Database className="w-3.5 h-3.5 text-zinc-400" /> },
        { name: "C++", icon: <Binary className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "Flutter/Dart", icon: <Smartphone className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "HTML & CSS", icon: <Code className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "REST APIs", icon: <Network className="w-3.5 h-3.5 text-zinc-400" /> },
        { name: "Git & GitHub", icon: <GitBranch className="w-3.5 h-3.5 text-zinc-300" /> },
      ],
    },
    {
      title: "Security & Tools",
      id: "sec-ops",
      icon: <Shield className="w-3.5 h-3.5" />,
      skills: [
        { name: "Elastic SIEM", icon: <Eye className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "Wireshark", icon: <Network className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "Nmap", icon: <Crosshair className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "Burp Suite", icon: <Activity className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "SafeLine WAF", icon: <Shield className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "TryHackMe", icon: <Search className="w-3.5 h-3.5 text-zinc-300" /> },
      ],
    },
    {
      title: "Frameworks & Concepts",
      id: "concepts",
      icon: <Settings className="w-3.5 h-3.5" />,
      skills: [
        { name: "OWASP Top 10", icon: <Shield className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "NIST CSF", icon: <Shield className="w-3.5 h-3.5 text-zinc-400" /> },
        { name: "JWT", icon: <Key className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "BCrypt", icon: <Lock className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "RBAC", icon: <Users className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "Linux", icon: <Cpu className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "Windows Admin", icon: <Server className="w-3.5 h-3.5 text-zinc-400" /> },
        { name: "VirtualBox", icon: <Boxes className="w-3.5 h-3.5 text-zinc-300" /> },
        { name: "Networking", icon: <Network className="w-3.5 h-3.5 text-zinc-300" /> },
      ],
    },
  ];

  const activeCategory =
    THREE_CATEGORIES.find((cat) => cat.id === activeCategoryId) || THREE_CATEGORIES[0];

  return (
    <section
      id="section-skills"
      className="relative w-full h-screen px-4 sm:px-6 md:px-16 lg:px-24 bg-cyber-dark bg-dot-matrix overflow-hidden flex flex-col justify-center items-center text-center pt-14 sm:pt-16"
    >
      <div className="max-w-4xl w-full relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2 mb-6 sm:mb-8"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-bubbly">
            Technical <em className="not-italic font-black text-zinc-300">Skills</em>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed antialiased">
            My expertise across various technologies and tools
          </p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-4 sm:mb-5"
        >
          <div className="inline-flex flex-wrap items-center justify-center p-1 sm:p-1.5 bg-zinc-950/90 border border-zinc-800 rounded-xl sm:rounded-2xl gap-0.5 sm:gap-1">
            {THREE_CATEGORIES.map((cat) => {
              const isActive = activeCategoryId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-sans text-xs sm:text-sm font-bold tracking-tight uppercase select-none transition-all duration-300 flex items-center gap-1.5 sm:gap-2 ${
                    isActive
                      ? "bg-zinc-800 text-white border border-zinc-600 shadow-sm"
                      : "text-zinc-500 hover:text-zinc-300 border border-transparent"
                  }`}
                >
                  <span className={isActive ? "text-white" : "text-zinc-600"}>
                    {cat.icon}
                  </span>
                  <span className="tracking-widest">{cat.title}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Skills panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-zinc-950/50 border border-zinc-800/60 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 backdrop-blur-md min-h-[120px] sm:min-h-[160px] flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full"
            >
              {activeCategory.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-800 hover:border-zinc-600 rounded-lg sm:rounded-xl text-zinc-300 hover:text-white select-none transition-all duration-300 hover:shadow-[0_4px_18px_rgba(255,255,255,0.04)] cursor-default"
                >
                  {skill.icon}
                  <span className="font-sans text-sm sm:text-base font-semibold tracking-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FileCodeEmblem({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="m10 13-2 2 2 2" />
      <path d="m14 17 2-2-2-2" />
    </svg>
  );
}
