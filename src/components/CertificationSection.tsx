import React from "react";
import { motion } from "motion/react";
import { CERTIFICATIONS } from "../data";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function CertLogo({ issuer }: { issuer: string }) {
  const lower = issuer.toLowerCase();

  if (lower.includes("google")) {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-2.5 sm:p-3 select-none">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.63-2.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
        </svg>
      </div>
    );
  }

  if (lower.includes("amazon") || lower.includes("aws")) {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center select-none">
        <svg className="w-9 h-9 sm:w-10 sm:h-10" viewBox="0 0 56 40" fill="none">
          <text x="2" y="22" fontFamily="Arial, Helvetica, sans-serif" fontWeight="800" fontSize="20" fill="#FFFFFF" letterSpacing="-0.5">
            aws
          </text>
          <path
            d="M2 28c10 7 32 7 42 0M39 25.5l5 1-2 5"
            stroke="#FF9900"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    );
  }

  if (lower.includes("freecodecamp")) {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-2.5 sm:p-3 select-none">
        <svg className="w-full h-full text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.885 3.906a.621.621 0 00-.354.12c-.08.08-.161.196-.161.313 0 .2.236.474.673.923 1.822 1.754 2.738 3.903 2.732 6.494-.007 2.867-.97 5.17-2.844 6.954-.394.353-.556.63-.557.867 0 .116.08.237.16.353.076.08.237.162.353.162.434 0 1.04-.512 1.833-1.509 1.542-1.89 2.24-3.978 2.279-6.824.036-2.847-.857-4.777-2.603-6.77-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824.791.997 1.398 1.51 1.832 1.509a.573.573 0 00.352-.162c.08-.116.16-.237.16-.353 0-.237-.162-.514-.556-.866-1.873-1.785-2.837-4.087-2.844-6.955-.006-2.591.91-4.74 2.732-6.494.437-.449.674-.722.673-.923 0-.117-.08-.233-.161-.313a.621.621 0 00-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386-.281-.18-2.001-1.5.402-5.423.466-.77 1.076-1.47 1.834-3.041 0 0 .67.946.32 2.998-.523 3.101 2.271 2.214 2.314 2.257.976 1.15-.808 3.17-.917 3.233-.108.061 5.096-3.13 1.399-7.935-.253.253-.582 1.442-1.267 1.266-.684-.174 2.125-3.494-2.868-7.468z" />
        </svg>
      </div>
    );
  }

  // ✅ FIXED: Official TryHackMe logo using Simple Icons path
  if (lower.includes("tryhackme")) {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-2 sm:p-2.5 select-none">
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Cloud shape - top portion */}
          <path
            d="M10.705 0C7.54 0 4.902 2.285 4.349 5.291a4.525 4.525 0 0 0-4.107 4.5 4.525 4.525 0 0 0 4.52 4.52h6.761a.625.625 0 1 0 0-1.25H4.761a3.273 3.273 0 0 1-3.27-3.27A3.273 3.273 0 0 1 6.59 7.08a.625.625 0 0 0 .7-1.035 4.488 4.488 0 0 0-1.68-.69 5.223 5.223 0 0 1 5.096-4.104 5.221 5.221 0 0 1 5.174 4.57 4.489 4.489 0 0 0-.488.305.625.625 0 1 0 .731 1.013 3.245 3.245 0 0 1 1.912-.616 3.278 3.278 0 0 1 3.203 2.61.625.625 0 0 0 1.225-.251 4.533 4.533 0 0 0-4.428-3.61 4.54 4.54 0 0 0-.958.105C16.556 2.328 13.9 0 10.705 0z"
            fill="#FFFFFF"
          />
          {/* Character dots and body */}
          <path
            d="M15.897 10.64a.925.925 0 0 0-.462.108.913.913 0 0 0-.313.29 1.27 1.27 0 0 0-.175.427 2.39 2.39 0 0 0-.054.514c0 .181.018.353.054.517.036.164.095.307.175.43a.899.899 0 0 0 .313.297c.127.073.281.11.462.11.18 0 .334-.037.46-.11a.897.897 0 0 0 .309-.296c.08-.124.137-.267.173-.431.036-.164.054-.336.054-.517 0-.18-.018-.352-.054-.514a1.271 1.271 0 0 0-.173-.426.901.9 0 0 0-.308-.29.912.912 0 0 0-.461-.11zm-7.644.052a.908.908 0 0 0-.46.109.9.9 0 0 0-.309.288 1.27 1.27 0 0 0-.174.426 2.39 2.39 0 0 0-.055.515c0 .18.019.352.055.516a1.28 1.28 0 0 0 .174.43.893.893 0 0 0 .308.297.908.908 0 0 0 .461.11.92.92 0 0 0 .461-.11.892.892 0 0 0 .309-.296c.079-.124.136-.267.172-.43a2.44 2.44 0 0 0 .054-.517c0-.18-.018-.353-.054-.515a1.266 1.266 0 0 0-.172-.426.895.895 0 0 0-.31-.288.92.92 0 0 0-.46-.11zm2.948.29a.625.625 0 0 0-.43 1.07l.949.95a.625.625 0 0 0 .883 0l.949-.95a.625.625 0 1 0-.883-.884l-.508.508-.507-.508a.625.625 0 0 0-.453-.186zM7.99 14.2a.625.625 0 0 0-.547.928c.898 1.614 2.632 2.703 4.618 2.703 1.985 0 3.72-1.089 4.617-2.703a.625.625 0 1 0-1.094-.606c-.69 1.24-2.01 2.059-3.523 2.059-1.514 0-2.833-.818-3.524-2.059a.625.625 0 0 0-.547-.322z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    );
  }

  // ✅ FIXED: TechCrush logo matching actual brand — red circular arrow icon with dot
  if (lower.includes("techcrush")) {
    return (
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center p-2 sm:p-2.5 select-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer circle ring */}
          <circle cx="50" cy="50" r="42" stroke="#E8192C" strokeWidth="7" fill="none" />
          {/* Circular refresh/cycle arrows — two arcs with arrowheads */}
          {/* Top-right arc */}
          <path
            d="M50 18 A32 32 0 0 1 82 50"
            stroke="#E8192C"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          {/* Arrowhead top-right */}
          <polygon points="84,42 84,58 94,50" fill="#E8192C" />
          {/* Bottom-left arc */}
          <path
            d="M50 82 A32 32 0 0 1 18 50"
            stroke="#E8192C"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          {/* Arrowhead bottom-left */}
          <polygon points="16,42 16,58 6,50" fill="#E8192C" />
          {/* Center dot */}
          <circle cx="50" cy="50" r="8" fill="#E8192C" />
        </svg>
      </div>
    );
  }

  // Fallback
  return (
    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center select-none">
      <div className="w-4 h-4 rounded-full bg-zinc-600" />
    </div>
  );
}

export default function CertificationSection() {
  return (
    <section
      id="section-certification"
      className="relative w-full h-screen flex flex-col justify-center px-4 sm:px-6 md:px-16 lg:px-24 bg-cyber-dark bg-dot-matrix overflow-hidden pt-14 sm:pt-16"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-8 sm:gap-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="border-b border-zinc-800 pb-4 sm:pb-5 text-center"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-bubbly">
            Professional <em className="not-italic font-black text-zinc-300">Certifications</em>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="flex flex-wrap items-start justify-center gap-8 sm:gap-10 md:gap-14"
        >
          {CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              className="flex flex-col items-center gap-2 sm:gap-3 text-center w-32 sm:w-40 cursor-default"
            >
              <CertLogo issuer={cert.issuer} />
              <p className="font-sans text-sm sm:text-base font-semibold text-zinc-200 leading-snug antialiased">
                {cert.title}
              </p>
              <p className="font-sans text-xs sm:text-sm text-zinc-500 tracking-wide">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}