import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import HeroBackground from '../components/HeroBackground';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <HeroBackground />
      
      {/* Radial Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-background/90 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-blue-400 font-medium tracking-wide mb-2 text-sm uppercase">Portfolio</h2>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                Muhammad Saif
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gradient leading-tight">
                AI & Machine Learning Engineer
              </h2>
              <h3 className="text-lg md:text-xl text-gray-400 mt-3 font-medium">
                Python Developer &nbsp;|&nbsp; AI Automation Engineer
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base text-gray-500 max-w-2xl leading-relaxed"
            >
              AI & Machine Learning Engineer with 5+ internships across ML, Python automation, and computer vision 
              — including a Top 4 finish at Pakistan Innovative 2026 among 1,000+ competing projects, currently 
              incubated at NIC Faisalabad. Built production-oriented CNN models achieving 90%+ OCR accuracy and 
              ~85% mental health classification accuracy, deployed via FastAPI with real-time monitoring dashboards.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="./cv.pdf"
                target="_blank"
                className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-medium flex items-center gap-2 transition-all shadow-[0_0_25px_rgba(59,130,246,0.25)] hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="https://github.com/Saif-Sheikh1"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white font-medium flex items-center gap-2 transition-all"
              >
                <FaGithub size={18} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/muhammad-saif-8a59662a4"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-white font-medium flex items-center gap-2 transition-all"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
              <a
                href="#/projects"
                className="px-6 py-3 rounded-full text-gray-300 hover:text-white font-medium flex items-center gap-2 transition-all group"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Animated Statistics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex-1 w-full max-w-md"
          >
            <div className="rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm p-8 flex flex-col gap-5">
              {[
                { label: 'Internships', value: '5+' },
                { label: 'Technical Projects', value: '10+' },
                { label: 'Pakistan Innovative 2026', value: 'Top 4 / 1000+' },
                { label: 'NIC Faisalabad', value: 'Incubatee' },
                { label: 'Hult Prize', value: 'Winner' },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center border-b border-white/[0.04] pb-4 last:border-0 last:pb-0">
                  <span className="text-gray-500 text-sm">{stat.label}</span>
                  <span className="text-white font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}