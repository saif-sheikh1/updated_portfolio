import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

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
      <SectionHeader eyebrow="Credentials" title="Certifications" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass-card glass-card-hover p-6 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent mb-5 shadow-[0_0_10px_rgba(56,189,248,0.15)]">
                <Award size={20} />
              </div>

              <h3 className="text-base font-bold text-white mb-1.5 leading-snug">{cert.title}</h3>
              <p className="text-accent text-sm font-semibold mb-1">{cert.issuer}</p>
              <p className="font-mono-ui text-inkmute text-xs mb-3">{cert.date}</p>
              <p className="text-inkdim text-xs md:text-sm mb-5 leading-relaxed">{cert.detail}</p>
            </div>

            <div className="pt-4 border-t border-white/[0.06]">
              <a
                href="./certificate.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs text-inkmute hover:text-accent transition-colors font-medium"
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
