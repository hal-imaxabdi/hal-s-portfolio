import React, { useEffect, useRef } from "react";
import { Cpu, Activity, Code, FileDown, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const CV_FILE_PATH = "/Halima_Abdirizak_CV.pdf";

export default function AboutSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = CV_FILE_PATH;
    link.download = "Halima_Abdirizak_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      radius: Math.random() * 1.5 + 0.6,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      pulseOffset: Math.random() * Math.PI * 2,
    }));

    let mouse = { x: -1000, y: -1000 };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const onLeave = () => { mouse = { x: -1000, y: -1000 }; };

    const section = containerRef.current;
    section?.addEventListener("mousemove", onMove);
    section?.addEventListener("mouseleave", onLeave);

    const ro = new ResizeObserver(([e]) => {
      width = canvas.width = e.contentRect.width;
      height = canvas.height = e.contentRect.height;
    });
    ro.observe(canvas.parentElement || canvas);

    let frame = 0;
    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // subtle white grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.008)";
      ctx.lineWidth = 0.5;
      for (let x = 0; x < width; x += 90) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke(); }
      for (let y = 0; y < height; y += 90) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke(); }

      // scan line
      ctx.beginPath();
      ctx.moveTo(0, (frame * 0.4) % height);
      ctx.lineTo(width, (frame * 0.4) % height);
      ctx.strokeStyle = "rgba(255,255,255,0.012)";
      ctx.stroke();

      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        const pulse = Math.sin(frame * p.pulseSpeed + p.pulseOffset) * 0.4 + 1;
        const dx = mouse.x - p.x, dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        ctx.beginPath();
        if (dist < 180) {
          const r = (180 - dist) / 180;
          ctx.fillStyle = `rgba(255,255,255,${0.08 + r * 0.22})`;
          ctx.arc(p.x, p.y, p.radius * (1 + r * 3.5), 0, Math.PI * 2);
        } else {
          ctx.fillStyle = "rgba(255,255,255,0.12)";
          ctx.arc(p.x, p.y, p.radius * pulse, 0, Math.PI * 2);
        }
        ctx.fill();
      });

      particles.forEach((p1, i) => {
        const dm = Math.hypot(mouse.x - p1.x, mouse.y - p1.y);
        if (dm < 140) {
          ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(255,255,255,${((140 - dm) / 140) * 0.07})`;
          ctx.lineWidth = 0.5; ctx.stroke();
        }
        particles.forEach((p2, j) => {
          if (i >= j) return;
          const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (d < 130) {
            ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255,255,255,${((130 - d) / 130) * 0.03})`;
            ctx.lineWidth = 0.4; ctx.stroke();
          }
        });
      });

      animFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      section?.removeEventListener("mousemove", onMove);
      section?.removeEventListener("mouseleave", onLeave);
      ro.disconnect();
    };
  }, []);

  return (
    <section
      id="section-about"
      ref={containerRef}
      className="relative w-full h-screen bg-cyber-dark overflow-hidden flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-16 lg:px-24 pt-14 sm:pt-16"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70 pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl w-full relative z-10 flex flex-col items-center gap-4 sm:gap-6"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight font-bubbly">
          About <em className="not-italic font-black text-zinc-300">Me</em>
        </h2>

        <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-sans max-w-2xl antialiased">
          Cybersecurity student focused on security operations and secure application development.
          I enjoy transforming theoretical concepts into practical projects through hands-on labs,
          certifications, and continuous learning.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {[
            { label: "Security Operations", icon: <Activity className="w-3.5 h-3.5" /> },
            { label: "Secure App Development", icon: <Cpu className="w-3.5 h-3.5" /> },
            { label: "Web Programming", icon: <Code className="w-3.5 h-3.5" /> },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-950/60 hover:bg-zinc-900/60 border border-zinc-800 hover:border-zinc-600 rounded-full text-zinc-300 hover:text-white select-none transition-all duration-300 cursor-default group"
            >
              <span className="text-zinc-500 group-hover:text-zinc-300 transition-colors">{item.icon}</span>
              <span className="font-sans text-sm sm:text-base">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="w-full max-w-xl border-t border-zinc-800/70 pt-4 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="font-sans text-base sm:text-lg font-bold text-white">President University</p>
            <p className="font-sans text-sm sm:text-base text-zinc-400">BSc Informatics (Cybersecurity)</p>
          </div>
          <div className="font-mono text-[10px] sm:text-xs text-zinc-500 px-3 py-1 bg-zinc-950/40 border border-zinc-800 rounded">
            2024 – 2027 (Expected)
          </div>
        </div>

        <motion.button
          onClick={handleDownloadCV}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 bg-zinc-950 border border-zinc-700/50 hover:border-zinc-500 rounded-xl text-xs sm:text-sm font-mono text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.06)]"
        >
          <FileDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-300 group-hover:text-white transition-colors" />
          <span className="tracking-widest font-black uppercase text-xs sm:text-sm">Download CV</span>
          <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
        </motion.button>
      </motion.div>
    </section>
  );
}
