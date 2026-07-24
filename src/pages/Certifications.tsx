import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Machine Learning Specialization',
    issuer: 'NAVTTC x Gamica Cloud',
    date: 'Mar – Jun 2025',
    detail: 'A+ Grade — AI: Machine Learning, Deep Learning & Communication',
  },
  {
    title: 'Data Science with Python',
    issuer: 'Gamica Cloud',
    date: 'Feb 2024',
    detail: 'Comprehensive data science training with Python ecosystem.',
  },
  {
    title: 'Data Analytics and Visualization Job Simulation',
    issuer: 'Accenture x Forage',
    date: 'Aug 2024',
    detail: 'Virtual job simulation covering analytics workflows and visualization.',
  },
  {
    title: 'Data Visualisation: Empowering Business with Effective Insights',
    issuer: 'Tata x Forage',
    date: 'Sep 2024',
    detail: 'Business intelligence and data-driven decision making.',
  },
  {
    title: 'Nestle E-Learning 2024: Sustainability',
    issuer: 'Nestle Connect',
    date: '2024',
    detail: 'Sustainability practices and responsible business operations.',
  },
];

export default function Certifications() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">Certifications</h2>
        <div className="w-16 h-[3px] bg-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="glass-card glass-card-hover p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 shadow-[0_0_10px_rgba(59,130,246,0.15)]">
                <Award size={20} />
              </div>
              
              <h3 className="text-base font-bold text-white mb-1.5 leading-snug">{cert.title}</h3>
              <p className="text-blue-400 text-sm font-semibold mb-1">{cert.issuer}</p>
              <p className="text-gray-400 text-xs mb-3">{cert.date}</p>
              <p className="text-gray-300 text-xs md:text-sm mb-5 leading-relaxed">{cert.detail}</p>
            </div>
            
            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href="./certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-blue-400 transition-colors font-medium"
              >
                View Certificate <ExternalLink size={13} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}