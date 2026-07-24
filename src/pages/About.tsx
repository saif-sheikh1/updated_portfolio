import { motion } from 'framer-motion';
import { MapPin, Globe, GraduationCap, Award, Building2, Users, Trophy, Briefcase } from 'lucide-react';

const timelineEvents = [
  {
    category: 'EDUCATION',
    icon: <GraduationCap size={16} className="text-blue-400" />,
    title: 'BS Computer Science (BSCS)',
    subtitle: 'The University of Faisalabad (2022 – 2026)',
    description: 'CGPA: 3.22 / 4.00 — Specialization in Machine Learning & Data Science.',
  },
  {
    category: 'STARTUP & INNOVATION',
    icon: <Award size={16} className="text-yellow-400" />,
    title: 'Top 4 Finalist — Pakistan Innovative 2026',
    subtitle: '1,000+ competing projects (IEEE-backed, May 2026)',
    description: 'Recognized nationwide for developing the Multi-Sensor Mental Health Detection System using multimodal CNN + LSTM deep learning models.',
  },
  {
    category: 'INCUBATION',
    icon: <Building2 size={16} className="text-cyan-400" />,
    title: 'NIC Faisalabad Incubatee',
    subtitle: 'National Incubation Center Faisalabad',
    description: 'Active startup founder incubated at NIC Faisalabad, building AI-powered health-tech solutions.',
  },
  {
    category: 'LEADERSHIP',
    icon: <Users size={16} className="text-purple-400" />,
    title: 'General Secretary — Entrepreneurship Society',
    subtitle: 'The University of Faisalabad (Dec 2024 – Jun 2025)',
    description: 'Led 8+ flagship events (TEDxTUF, SME Launchpad, Idea Competition) reaching hundreds of students across cross-functional executive teams.',
  },
  {
    category: 'LEADERSHIP',
    icon: <Trophy size={16} className="text-emerald-400" />,
    title: 'Hult Prize On-Campus Runner-Up',
    subtitle: 'The University of Faisalabad (Feb 2024)',
    description: 'Led the runner-up social entrepreneurship startup team at the on-campus Hult Prize competition.',
  },
  {
    category: 'INTERNSHIPS',
    icon: <Briefcase size={16} className="text-blue-400" />,
    title: '5+ Technical Internships',
    subtitle: 'AI Automation · ML · Python · Web Development',
    description: 'Gained hands-on production experience at Dot Tribe, Gamica Cloud, Compiling Logics, Career Institute, and DEN.',
  },
];

export default function About() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">About Me</h2>
        <div className="w-16 h-[3px] bg-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Biography & Details Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 space-y-6"
        >
          <h3 className="text-2xl font-bold text-white">Professional Biography</h3>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Machine Learning Engineer & Python Developer with <strong className="text-white">5+ internships</strong> building 
            CNN/LSTM models and production Python backends — including a{' '}
            <strong className="text-blue-400">Top 4 finish at Pakistan Innovative 2026</strong> among 1,000+ competing 
            projects, currently incubated at <strong className="text-white">NIC Faisalabad</strong>.
          </p>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Built and deployed production-oriented CNN models achieving{' '}
            <strong className="text-emerald-400">90%+ OCR accuracy</strong> and{' '}
            <strong className="text-purple-400">~85% mental health classification accuracy</strong>, served via FastAPI REST 
            endpoints with real-time monitoring dashboards. Seeking a Machine Learning Engineer or Python Developer role 
            to build, train, and ship models and backend systems that reach real users and deliver measurable impact.
          </p>

          {/* Details & Focus Areas Glass Card */}
          <div className="glass-card p-6 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider text-blue-400 border-b border-white/[0.06] pb-3">
              Personal Details & Focus Areas
            </h4>
            <div className="space-y-3 text-xs md:text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-blue-400 shrink-0" />
                <span><strong className="text-gray-400">Location:</strong> Faisalabad, Pakistan</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={16} className="text-cyan-400 shrink-0" />
                <span><strong className="text-gray-400">Languages:</strong> English (Professional) | Urdu (Native)</span>
              </div>
              <div className="pt-2 border-t border-white/[0.06]">
                <strong className="text-gray-400 block mb-1">Technical Focus Areas:</strong>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {[
                    'Machine Learning',
                    'Computer Vision',
                    'OCR Pipelines',
                    'FastAPI Backends',
                    'AI Automation',
                    'Chess & Rubik\'s Cube',
                  ].map((item) => (
                    <span key={item} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs text-gray-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Timeline Events */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-6 relative pl-6 border-l border-white/10 space-y-6"
        >
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] top-4 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-[#06070a] shadow-[0_0_10px_rgba(59,130,246,0.8)] group-hover:scale-125 transition-transform" />

              {/* Event Card */}
              <div className="glass-card glass-card-hover p-5 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                  {event.icon}
                  <span>{event.category}</span>
                </div>
                <h4 className="text-base md:text-lg font-bold text-white">{event.title}</h4>
                <h5 className="text-xs text-gray-400 font-medium">{event.subtitle}</h5>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed pt-1">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}