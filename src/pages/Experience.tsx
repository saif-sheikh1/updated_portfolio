import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'AI Automation Intern',
    company: 'Dot Tribe',
    type: 'Remote',
    duration: 'Oct 2025 – Dec 2025',
    description: 'Automated recurring client workflows and integrated AI services & LLM endpoints into business software.',
    technologies: ['Make.com', 'Webhooks', 'API Connection Framework', 'LLM APIs (OpenAI/Anthropic)', 'Prompt Engineering', 'Structured Testing'],
    achievements: [
      'Reduced client workflow processing time by automating 3 recurring business processes using Make.com, cutting an estimated 5+ hours/week of manual effort per workflow.',
      'Accelerated integration delivery by building a reusable webhook + API connection framework, enabling same-day deployment of AI services — including LLM-powered endpoints — into business applications.',
      'Improved scenario reliability by designing structured test protocols, achieving zero-failure runs across all production automations before client handoff.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Gamica Cloud',
    type: 'Faisalabad',
    duration: 'Jun 2025 – Jul 2025',
    description: 'Developed computer vision pipelines and production-ready ML models.',
    technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Tesseract OCR', 'Scikit-learn', 'CNN', 'Cross-Validation'],
    achievements: [
      'Increased OCR text-extraction accuracy to 90%+ with a Tesseract OCR + OpenCV preprocessing pipeline.',
      'Delivered a production-ready CNN gender-recognition model validated with cross-validation and benchmarked with Scikit-learn metrics.',
      'Cut data pipeline build time by constructing reusable preprocessing modules adopted across 2 internal computer vision projects.',
    ],
  },
  {
    role: 'Python Developer Intern',
    company: 'Compiling Logics',
    type: 'Faisalabad',
    duration: 'May 2025 – May 2026',
    description: 'Built backend services and automated data processing workflows.',
    technologies: ['Python', 'OOP', 'REST APIs', 'SQL', 'Supabase', 'pytest'],
    achievements: [
      'Eliminated an estimated 3+ hours/day of repetitive data processing by building Python automation scripts with OOP design patterns.',
      'Improved sprint delivery speed by identifying and resolving 4 coding-workflow bottlenecks.',
      'Integrated REST APIs and SQL/Supabase databases with pytest-based unit testing for code reliability.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'Career Institute',
    type: 'Onsite',
    duration: 'Jun 2024 – Jul 2024',
    description: 'Developed responsive websites and built reusable frontend templates.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP'],
    achievements: [
      'Delivered 3 responsive websites tested across 5+ device breakpoints for consistent UI on mobile and desktop.',
      'Built reusable component templates, cutting estimated per-page development time by 30%.',
    ],
  },
  {
    role: 'Social Media Marketing Intern',
    company: 'Digital Empowerment Network (DEN)',
    type: 'Faisalabad',
    duration: 'Oct 2023 – Feb 2024',
    description: 'Analyzed metrics and iterated on content strategy for audience growth.',
    technologies: ['Content Strategy', 'Analytics', 'Social Media Management'],
    achievements: [
      'Improved campaign engagement by analyzing weekly metrics and iterating on content strategy, contributing to measurable audience growth over 4 months.',
    ],
  },
  {
    role: 'General Secretary',
    company: 'Entrepreneurship Society – TUF',
    type: 'Leadership Role',
    duration: 'Dec 2024 – Jun 2025',
    description: 'Led campus startup engagement and organized major events.',
    technologies: ['Leadership', 'Event Management', 'Cross-Functional Executive Teams', 'Logistics Management'],
    achievements: [
      'Led 8+ flagship events (TEDxTUF, SME Launchpad, Idea Competition) reaching hundreds of students.',
      'Coordinated the 10th Academic Studies Congress (Oct 2025) and International Seminar on Sustainable Development (Feb 2026).',
    ],
  },
];

export default function Experience() {
  return (
    <div className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">Experience</h2>
        <div className="w-16 h-[3px] bg-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
      </motion.div>

      <div className="relative">
        {/* Vertical Timeline Bar */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/[0.08]" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative pl-12 md:pl-24"
            >
              {/* Timeline Briefcase Icon */}
              <div className="absolute left-0 md:left-4 top-1 w-9 h-9 rounded-xl bg-[#06070a] border border-blue-500/40 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.25)] z-10">
                <Briefcase size={16} className="text-blue-400" />
              </div>

              {/* Glass Experience Card */}
              <div className="glass-card glass-card-hover p-6 md:p-7 space-y-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-blue-400 text-sm font-semibold mt-0.5">
                      {exp.company}
                      {exp.type && <span className="text-gray-400 font-normal"> · {exp.type}</span>}
                    </h4>
                  </div>
                  <span className="text-xs text-gray-400 bg-white/[0.04] px-3 py-1 rounded-lg border border-white/[0.06] w-fit whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm">{exp.description}</p>
                
                <div className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="text-xs md:text-sm text-gray-400 flex items-start gap-2 leading-relaxed">
                      <span className="text-blue-400 shrink-0 font-bold">›</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs text-gray-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.05]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}