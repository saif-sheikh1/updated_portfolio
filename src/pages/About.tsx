import { GraduationCap, Code2, Brain, Eye, MapPin, Mail, CircleDot } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const INFO_CARDS = [
  { icon: <GraduationCap size={18} />, label: 'BS Computer Science', sub: 'The University of Faisalabad' },
  { icon: <Brain size={18} />, label: 'Machine Learning', sub: 'CNN · LSTM · Deep Learning' },
  { icon: <Code2 size={18} />, label: 'Python Development', sub: 'FastAPI · ML Pipelines' },
  { icon: <Eye size={18} />, label: 'Computer Vision', sub: 'OpenCV · YOLO · OCR' },
];

const QUICK_FACTS = [
  { icon: <MapPin size={14} />, label: 'Location', value: 'Faisalabad, Pakistan' },
  { icon: <Mail size={14} />, label: 'Email', value: 'sheikhoo1274@gmail.com' },
  { icon: <CircleDot size={14} />, label: 'Status', value: 'Open to opportunities' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 20 } },
};

export default function About() {
  return (
    <div id="about" className="py-24 md:py-28">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="eyebrow">About Me</div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-[1.12] max-w-2xl">
            Turning Data Into{' '}
            <span className="text-gradient-primary">Intelligent Solutions</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left — Portrait + quick facts */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            {/* Framed portrait */}
            <div className="relative w-full max-w-sm mx-auto lg:mx-0">
              <div
                className="absolute -inset-3 rounded-[1.75rem] opacity-60 blur-2xl"
                style={{ background: 'linear-gradient(140deg, rgba(56,189,248,0.35), rgba(124,123,247,0.25))' }}
              />
              <div className="relative rounded-[1.5rem] overflow-hidden border border-white/10 bg-elev shadow-signal">
                <img
                  src={profileImg}
                  alt="Muhammad Saif"
                  className="w-full h-full object-cover aspect-[4/5] select-none"
                  draggable={false}
                />
                {/* corner brackets */}
                <span className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-accent/70 rounded-tl-md" />
                <span className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-accent/70 rounded-tr-md" />
                <span className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-accent/70 rounded-bl-md" />
                <span className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-accent/70 rounded-br-md" />
                {/* top data label */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 font-mono-ui text-[10px] tracking-[0.2em] text-accent/90 uppercase">
                  ML · Engineer
                </div>
              </div>
            </div>

            {/* Quick facts */}
            <div className="glass-card p-5 mt-6 max-w-sm mx-auto lg:mx-0">
              <div className="font-mono-ui text-[11px] tracking-widest text-inkmute uppercase mb-4">
                Profile
              </div>
              <div className="flex flex-col gap-3.5">
                {QUICK_FACTS.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono-ui text-[10px] uppercase tracking-wider text-inkmute">
                        {item.label}
                      </div>
                      <div className="text-sm text-ink truncate">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Bio + info cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7"
          >
            <div className="flex flex-col gap-5">
              <motion.p variants={itemVariants} className="text-base text-inkdim leading-[1.85]">
                I'm <strong className="text-white font-semibold">Muhammad Saif</strong>, a Machine Learning Developer and Python Developer based in Faisalabad, Pakistan. With hands-on experience across 5+ technical internships, I specialize in building production-ready ML systems that solve real problems.
              </motion.p>
              <motion.p variants={itemVariants} className="text-base text-inkdim leading-[1.85]">
                My work spans Computer Vision pipelines achieving{' '}
                <strong className="text-white font-semibold">90%+ OCR accuracy</strong>, multimodal deep learning systems for mental health detection with{' '}
                <strong className="text-white font-semibold">~85% classification accuracy</strong>, and FastAPI backends serving real-time ML inference.
              </motion.p>
              <motion.p variants={itemVariants} className="text-base text-inkdim leading-[1.85]">
                My mental health detection system placed{' '}
                <strong className="text-accent font-semibold">Top 4 at Pakistan Innovative 2026</strong>{' '}
                among 1,000+ competing projects and is now incubated at NIC Faisalabad. I focus on the gap between a model that works in a notebook and a system that runs reliably in production.
              </motion.p>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-9">
              {INFO_CARDS.map((card) => (
                <motion.div
                  variants={itemVariants}
                  key={card.label}
                  whileHover={{ y: -4 }}
                  className="glass-card glass-card-hover p-5"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3.5">
                    {card.icon}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{card.label}</div>
                  <div className="text-xs text-inkmute leading-relaxed">{card.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
