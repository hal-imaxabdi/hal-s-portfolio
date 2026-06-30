import { motion } from "motion/react";
import { Mail, Github, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export default function ContactSection() {
  const links = [
    { href: `mailto:${PERSONAL_INFO.email}`, label: "Email", Icon: Mail, external: false },
    { href: PERSONAL_INFO.githubUrl, label: "GitHub", Icon: Github, external: true },
    { href: PERSONAL_INFO.linkedinUrl, label: "LinkedIn", Icon: Linkedin, external: true },
  ];

  return (
    <section
      id="section-contact"
      className="relative w-full h-screen flex flex-col justify-between py-16 sm:py-20 px-4 sm:px-6 md:px-16 lg:px-24 bg-cyber-dark bg-dot-matrix overflow-hidden pt-14 sm:pt-20"
    >
      {/* Section heading */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-5xl mx-auto w-full border-b border-zinc-800 pb-4 sm:pb-5 pt-2 sm:pt-4 text-center"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-bubbly">
          Get In <em className="not-italic font-black text-zinc-300">Touch</em>
        </h2>
      </motion.div>

      {/* Body */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
        className="max-w-3xl mx-auto w-full my-auto flex flex-col items-center justify-center text-center gap-8 sm:gap-10 z-10"
      >
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-sans max-w-xl antialiased"
        >
          I'd love to connect. I'm actively seeking internship opportunities in cybersecurity
          and full-stack development. Feel free to reach out through any of these channels.
        </motion.p>

        <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {links.map(({ href, label, Icon, external }) => (
            <motion.a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={label === "Email" ? "Send email" : `${label} profile`}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="group flex flex-col items-center gap-2 sm:gap-3"
            >
              <div className="p-3 sm:p-4 rounded-2xl border border-zinc-800 group-hover:border-zinc-500 group-hover:bg-zinc-900/40 transition-all duration-300">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-zinc-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-zinc-600 group-hover:text-zinc-300 transition-colors duration-300">
                {label}
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="max-w-5xl mx-auto w-full border-t border-zinc-800 pt-4 sm:pt-6"
      >
        <p className="font-mono text-[10px] sm:text-xs text-zinc-700 text-center">
          Halima Abdirizak Mohamed // 2026 // haml_
        </p>
      </motion.div>
    </section>
  );
}
