import { motion } from 'framer-motion';

export default function About() {
  const timelineEvents = [
    {
      category: 'Education',
      title: 'BS Computer Science (BSCS)',
      subtitle: 'The University of Faisalabad',
      description: 'CGPA: 3.22 / 4.00 — Specialization: Machine Learning & Data Science.',
    },
    {
      category: 'Startup Journey',
      title: 'Top 4 Finalist — Pakistan Innovative 2026',
      subtitle: '1,000+ competing projects (IEEE-backed)',
      description: 'Multi-Sensor Mental Health Detection System recognized among the top 4 startups nationwide in Pakistan\'s largest innovation competition.',
    },
    {
      category: 'Startup Journey',
      title: 'NIC Faisalabad Incubatee',
      subtitle: 'National Incubation Center',
      description: 'Active startup founder incubated at NIC Faisalabad, building AI-powered health-tech solutions.',
    },
    {
      category: 'Leadership',
      title: 'General Secretary — Entrepreneurship Society',
      subtitle: 'The University of Faisalabad (Dec 2024 – Jun 2025)',
      description: 'Led 8+ flagship events (TEDxTUF, SME Launchpad, Idea Competition) reaching hundreds of students across cross-functional executive teams.',
    },
    {
      category: 'Leadership',
      title: 'Hult Prize On-Campus Winner',
      subtitle: 'The University of Faisalabad (Feb 2024)',
      description: 'Led the winning social entrepreneurship startup team at the on-campus Hult Prize competition.',
    },
    {
      category: 'Internships',
      title: '5+ Technical Internships',
      subtitle: 'AI Automation · ML · Python · Web Development',
      description: 'Gained hands-on production experience at Dot Tribe, Gamica Cloud, Compiling Logics, Career Institute, and DEN.',
    },
  ];

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
        <div className="w-16 h-[2px] bg-blue-400 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-white">Professional Biography</h3>
          <p className="text-gray-400 leading-relaxed">
            AI & Machine Learning Engineer with 5+ internships across ML, Python automation, and 
            computer vision — including a Top 4 finish at Pakistan Innovative 2026 among 1,000+ 
            competing projects, currently incubated at NIC Faisalabad.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Built production-oriented CNN models achieving 90%+ OCR accuracy and ~85% mental health 
            classification accuracy, deployed via FastAPI with real-time monitoring dashboards. Seeking 
            an ML Engineer, Python Developer, or AI Automation role where I can ship models and 
            automated workflows that reach real users and deliver measurable business impact.
          </p>
          <p className="text-gray-400 leading-relaxed">
            <strong className="text-gray-300">Languages:</strong> English (Professional) | Urdu (Native)<br />
            <strong className="text-gray-300">Interests:</strong> Artificial Intelligence · ML Research · Computer Vision · Workflow Automation · Chess · Rubik's Cube
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/[0.06]"></div>
          
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[9px] top-2 w-3 h-3 rounded-full bg-blue-400/80 shadow-[0_0_8px_rgba(96,165,250,0.6)]"></div>
                
                <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 hover:-translate-y-0.5 transition-transform duration-300">
                  <span className="text-xs text-blue-400 font-medium uppercase tracking-wider mb-1 block">{event.category}</span>
                  <h4 className="text-lg font-bold text-white">{event.title}</h4>
                  <h5 className="text-gray-400 text-sm mb-2">{event.subtitle}</h5>
                  <p className="text-gray-500 text-sm">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}