import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'AI Automation Intern',
    company: 'Dot Tribe',
    type: 'Remote',
    duration: 'Oct 2025 – Dec 2025',
    description: 'Automated business processes and integrated AI services into client applications.',
    technologies: ['Make.com', 'Webhooks', 'API Integration', 'LLM Endpoints', 'Prompt Engineering'],
    achievements: [
      'Reduced client workflow processing time by automating 3 recurring business processes, cutting an estimated 5+ hours/week of manual effort per workflow.',
      'Built a reusable webhook + API connection framework, enabling same-day deployment of AI services including LLM-powered endpoints.',
      'Designed structured test protocols, achieving zero-failure runs across all production automations before client handoff.',
    ],
  },
  {
    role: 'Machine Learning Intern',
    company: 'Gamica Cloud',
    type: 'Faisalabad',
    duration: 'Jun 2025 – Jul 2025',
    description: 'Developed computer vision pipelines and production-ready ML models.',
    technologies: ['TensorFlow', 'Keras', 'OpenCV', 'Tesseract OCR', 'Scikit-learn', 'CNN'],
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
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'PHP'],
    achievements: [
      'Delivered 3 responsive websites tested across 5+ device breakpoints for consistent UI on mobile and desktop.',
      'Built reusable component templates, cutting estimated per-page development time by 30%.',
    ],
  },
  {
    role: 'Social Media Marketing Intern',
    company: 'Digital Empowerment Network (DEN)',
    type: '',
    duration: 'Oct 2023 – Feb 2024',
    description: 'Analyzed metrics and iterated on content strategy for audience growth.',
    technologies: ['Content Strategy', 'Analytics', 'Social Media'],
    achievements: [
      'Improved campaign engagement by analyzing weekly metrics and iterating on content strategy, contributing to measurable audience growth over 4 months.',
    ],
  },
  {
    role: 'General Secretary',
    company: 'Entrepreneurship Society – TUF',
    type: '',
    duration: 'Dec 2024 – Jun 2025',
    description: 'Led campus startup engagement and organized major events.',
    technologies: ['Leadership', 'Event Management', 'Team Coordination'],
    achievements: [
      'Led 8+ flagship events (TEDxTUF, SME Launchpad, Idea Competition) reaching hundreds of students.',
      'Coordinated the 10th Academic Studies Congress (Oct 2025) and International Seminar on Sustainable Development (Feb 2026).',
    ],
  },
];

export default function Experience() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
        <div className="w-16 h-[2px] bg-blue-400 mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/[0.06]"></div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12 md:pl-24"
            >
              {/* Timeline Icon */}
              <div className="absolute left-0 md:left-4 top-0 w-8 h-8 rounded-lg bg-[#0a0a0a] border border-blue-400/30 flex items-center justify-center shadow-[0_0_12px_rgba(96,165,250,0.2)] z-10">
                <Briefcase size={14} className="text-blue-400" />
              </div>

              <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 hover:border-white/[0.1] transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <h4 className="text-blue-400 text-sm font-medium">
                      {exp.company}
                      {exp.type && <span className="text-gray-600"> · {exp.type}</span>}
                    </h4>
                  </div>
                  <span className="text-xs text-gray-500 bg-white/[0.03] px-3 py-1 rounded-md border border-white/[0.06] w-fit whitespace-nowrap">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <ul className="space-y-1.5">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="text-sm text-gray-500 flex gap-2">
                        <span className="text-blue-400/60 mt-1 shrink-0">›</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.04]">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="text-xs text-gray-500 bg-white/[0.03] px-2 py-0.5 rounded">
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