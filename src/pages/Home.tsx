import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroBackground from '../components/HeroBackground';

const statsData = [
  {
    title: 'Technical Internships',
    subtitle: 'ML, Python & Automation',
    badge: '5+',
  },
  {
    title: 'Pakistan Innovative 2026',
    subtitle: 'IEEE-Backed Competition',
    badge: 'Top 4 / 1000+',
  },
  {
    title: 'NIC Faisalabad',
    subtitle: 'Active Startup Founder',
    badge: 'Incubatee',
  },
  {
    title: 'OCR Extraction Model',
    subtitle: 'Tesseract + OpenCV Pipeline',
    badge: '90%+ Accuracy',
  },
  {
    title: 'Mental Health AI Model',
    subtitle: 'Multimodal CNN + LSTM',
    badge: '~85% Accuracy',
  },
  {
    title: 'Hult Prize On-Campus',
    subtitle: 'Social Entrepreneurship',
    badge: 'Runner-Up',
  },
];

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-12 md:py-20">
      {/* 3D Background */}
      <HeroBackground />

      {/* Screen edge glow overlay */}
      <div className="screen-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tag Badge */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(59,130,246,0.15)] cursor-default transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-blue-400 -ml-4" />
              Machine Learning & Python Developer
            </motion.div>

            {/* Name & Title */}
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.05]">
                Muhammad{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 animate-pulse">
                  Saif
                </span>
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                AI & Machine Learning Engineer
              </h2>
              <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">
                Python Developer &nbsp;•&nbsp; Computer Vision & OCR &nbsp;•&nbsp; AI Automation Engineer
              </p>
            </div>

            {/* Summary Paragraph */}
            <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-2xl">
              Machine Learning Engineer & Python Developer with{' '}
              <strong className="text-white font-semibold hover:text-blue-300 transition-colors">5+ internships</strong> building CNN/LSTM models and 
              production Python backends — including a{' '}
              <strong className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">Top 4 finish at Pakistan Innovative 2026</strong> currently 
              incubated at <strong className="text-white font-semibold hover:text-blue-300 transition-colors">NIC Faisalabad</strong>. Built production-oriented 
              models achieving <strong className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">90%+ OCR accuracy</strong> and{' '}
              <strong className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">~85% mental health classification accuracy</strong>, served via 
              FastAPI REST endpoints with real-time monitoring dashboards.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="./resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-shimmer px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.65)]"
              >
                <Download size={16} className="animate-bounce" />
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
                <FaGithub size={16} />
                GitHub
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://linkedin.com/in/muhammad-saif-8a59662a4"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 text-white font-medium text-sm flex items-center gap-2 transition-all"
              >
                <FaLinkedin size={16} />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ x: 4 }}
                href="#/projects"
                className="px-4 py-3.5 text-gray-300 hover:text-white font-medium text-sm flex items-center gap-2 transition-colors group"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform text-blue-400" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Key Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full max-w-lg mx-auto"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="glass-card glass-card-hover p-6 md:p-7 space-y-4 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle card glowing accent */}
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/15 rounded-full filter blur-3xl pointer-events-none" />

              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 3 }}
                  className="flex items-center justify-between py-3 border-b border-white/[0.06] last:border-0 last:pb-0 hover:bg-white/[0.03] px-3 -mx-3 rounded-xl transition-all"
                >
                  <div>
                    <h3 className="text-sm font-bold text-white leading-tight">{stat.title}</h3>
                    <p className="text-xs text-gray-400 mt-0.5">{stat.subtitle}</p>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-blue-500/10 border border-blue-500/25 text-blue-400 font-semibold text-xs shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.15)] group-hover:bg-blue-500/20 transition-all">
                    {stat.badge}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}