import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MouseEvent } from 'react';
import { Download, ArrowRight, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroBackground from '../components/HeroBackground';
import profileImg from '../assets/profile.jpg';

const statsData = [
  { title: 'Technical Internships', subtitle: 'ML, Python & Automation', badge: '5+' },
  { title: 'Pakistan Innovative 2026', subtitle: 'IEEE-Backed Competition', badge: 'Top 4 / 1000+' },
  { title: 'NIC Faisalabad', subtitle: 'Active Startup Founder', badge: 'Incubatee' },
  { title: 'OCR Extraction Model', subtitle: 'Tesseract + OpenCV Pipeline', badge: '90%+ Accuracy' },
  { title: 'Mental Health AI Model', subtitle: 'Multimodal CNN + LSTM', badge: '~85% Accuracy' },
  { title: 'Hult Prize On-Campus', subtitle: 'Social Entrepreneurship', badge: 'Runner-Up' },
];

const floatingChips = [
  { label: 'Python', className: 'top-6 -left-4 md:-left-8' },
  { label: 'TensorFlow', className: 'top-1/3 -right-5 md:-right-10' },
  { label: 'FastAPI', className: 'bottom-24 -left-5 md:-left-12' },
  { label: 'CNN · LSTM', className: 'bottom-8 right-2 md:-right-6' },
];

/* Mouse-reactive 3D tilt portrait — the hero's signature element. */
function PortraitCard() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 18 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="relative mx-auto w-[280px] sm:w-[330px] lg:w-[370px] [transform-style:preserve-3d]"
    >
      {/* Rotating conic signal ring */}
      <div
        className="ring-spin absolute -inset-5 rounded-[2rem] opacity-70"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, #38bdf8 90deg, transparent 200deg, #7c7bf7 300deg, transparent 360deg)',
          filter: 'blur(14px)',
        }}
      />

      {/* Frame */}
      <div
        className="relative rounded-[1.75rem] overflow-hidden border border-white/10 bg-elev shadow-[0_30px_80px_-30px_rgba(56,189,248,0.5)]"
        style={{ transform: 'translateZ(40px)' }}
      >
        <img
          src={profileImg}
          alt="Muhammad Saif"
          className="w-full h-full object-cover aspect-[4/5] select-none"
          draggable={false}
        />

        {/* Vision-scan corner brackets */}
        <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-accent/70 rounded-tl-md" />
        <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-accent/70 rounded-tr-md" />
        <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-accent/70 rounded-bl-md" />
        <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-accent/70 rounded-br-md" />

        {/* Bottom scrim + identity */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#070b14] via-[#070b14]/70 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-5">
          <div className="font-mono-ui text-[11px] tracking-widest text-accent uppercase mb-1">
            AI / ML Engineer
          </div>
          <div className="font-display text-lg font-bold text-white leading-tight">Muhammad Saif</div>
          <div className="flex items-center gap-1.5 text-[11px] text-inkdim mt-1">
            <MapPin size={11} className="text-accent" /> Faisalabad, Pakistan
          </div>
        </div>
      </div>

      {/* Floating tech chips */}
      {floatingChips.map((chip, i) => (
        <motion.div
          key={chip.label}
          className={`float-slow absolute hidden sm:block ${chip.className}`}
          style={{ transform: 'translateZ(70px)', animationDelay: `${i * 0.6}s` }}
        >
          <span className="font-mono-ui text-[11px] font-medium px-3 py-1.5 rounded-full bg-elev/90 backdrop-blur border border-white/10 text-inkdim shadow-lg">
            {chip.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center py-12 md:py-16">
        <HeroBackground />
        <div className="screen-glow" />

        <div className="relative z-10 section-container w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left — headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-2 lg:order-1"
            >
              <div className="eyebrow">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
                Machine Learning &amp; Python Developer
              </div>

              <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.02]">
                Muhammad{' '}
                <span className="text-gradient-primary">Saif</span>
              </h1>
              <h2 className="font-display text-2xl md:text-4xl font-semibold mt-3 text-gradient-cyan">
                AI &amp; Machine Learning Engineer
              </h2>
              <p className="font-mono-ui text-xs md:text-sm text-inkmute mt-3 tracking-wide">
                Python Developer &nbsp;·&nbsp; Computer Vision &amp; OCR &nbsp;·&nbsp; AI Automation Engineer
              </p>

              <p className="text-sm md:text-base text-inkdim leading-relaxed max-w-2xl mt-6">
                Machine Learning Engineer &amp; Python Developer with{' '}
                <strong className="text-white font-semibold">5+ internships</strong> building CNN/LSTM models and
                production Python backends — including a{' '}
                <strong className="text-accent font-semibold">Top 4 finish at Pakistan Innovative 2026</strong> currently
                incubated at <strong className="text-white font-semibold">NIC Faisalabad</strong>. Built production-oriented
                models achieving <strong className="text-accent-3 font-semibold">90%+ OCR accuracy</strong> and{' '}
                <strong className="text-accent-2 font-semibold">~85% mental health classification accuracy</strong>, served via
                FastAPI REST endpoints with real-time monitoring dashboards.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-7">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="./resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shimmer px-6 py-3.5 rounded-full bg-signal text-white font-semibold text-sm flex items-center gap-2 shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-shadow"
                >
                  <Download size={16} />
                  Download Resume
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://github.com/Saif-Sheikh1"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-white font-medium text-sm flex items-center gap-2 transition-all"
                >
                  <FaGithub size={16} /> GitHub
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://linkedin.com/in/muhammad-saif-8a59662a4"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-white font-medium text-sm flex items-center gap-2 transition-all"
                >
                  <FaLinkedin size={16} /> LinkedIn
                </motion.a>
                <motion.a
                  whileHover={{ x: 4 }}
                  href="#/projects"
                  className="px-4 py-3.5 text-inkdim hover:text-white font-medium text-sm flex items-center gap-2 transition-colors group"
                >
                  View Projects
                  <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform text-accent" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right — portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 order-1 lg:order-2"
            >
              <PortraitCard />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SIGNAL STRIP — key stats */}
      <section className="relative z-10 section-container pb-24 -mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="eyebrow">Highlights</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass-card glass-card-hover p-5 flex items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-sm font-bold text-white leading-tight">{stat.title}</h3>
                  <p className="text-xs text-inkmute mt-0.5">{stat.subtitle}</p>
                </div>
                <span className="font-mono-ui px-3 py-1 rounded-lg bg-accent/10 border border-accent/25 text-accent font-semibold text-xs shrink-0 text-center">
                  {stat.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
