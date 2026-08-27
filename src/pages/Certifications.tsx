import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Filter } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'AI & Data Science' | 'Leadership & Executive' | 'Conferences & Events' | 'Corporate & Finance';
  detail: string;
  badge?: string;
  verifyCode?: string;
}

const certifications: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Artificial Intelligence (ML & Deep Learning)',
    issuer: 'Government of Pakistan — NAVTTC & PM Youth Program',
    date: 'Mar – Jun 2025',
    category: 'AI & Data Science',
    detail: 'Completed 3-month intensive AI program in Machine Learning, Deep Learning, and Technical Communication with A+ Grade at The University of Faisalabad.',
    badge: 'A+ Grade · Govt Certified',
    verifyCode: 'Reg: P-25-947128',
  },
  {
    id: 'cert-2',
    title: 'Diploma in Data Science with Python',
    issuer: 'Gamica Cloud',
    date: 'Feb 2024',
    category: 'AI & Data Science',
    detail: 'Professional diploma covering Python data analytics, machine learning model development, statistical modeling, and data pipelines.',
    badge: 'A+ Grade',
    verifyCode: 'ID: GC-IT 43457AP',
  },
  {
    id: 'cert-3',
    title: 'Data Analytics & Visualization Job Simulation',
    issuer: 'Accenture & Forage',
    date: 'Aug 2024',
    category: 'AI & Data Science',
    detail: 'Completed virtual job simulation covering project scoping, data cleaning & modeling, interactive visualization, and executive client presentations.',
    badge: 'Job Simulation',
    verifyCode: 'Verify: XTgNnBopYT34ifPpD',
  },
  {
    id: 'cert-4',
    title: 'Data Visualisation: Business Insights',
    issuer: 'TATA & Forage',
    date: 'Sep 2024',
    category: 'AI & Data Science',
    detail: 'Executive simulation in framing business scenarios, selecting high-impact charts, creating effective dashboards, and communicating analytics to leadership.',
    badge: 'Job Simulation',
    verifyCode: 'Verify: wZZzQNFXpNwBjeEjj',
  },
  {
    id: 'cert-5',
    title: 'General Secretary — NBS Entrepreneurship Society',
    issuer: 'The University of Faisalabad | Center of Collective Activities',
    date: '2025 – 2026',
    category: 'Leadership & Executive',
    detail: 'Awarded Certificate of Appreciation for successfully serving as General Secretary of the NBS Entrepreneurship Society across the 2025–2026 academic session.',
    badge: 'General Secretary',
  },
  {
    id: 'cert-6',
    title: 'Organizer — Art Fiesta 2026',
    issuer: 'The University of Faisalabad (CCA)',
    date: '2026',
    category: 'Leadership & Executive',
    detail: 'Awarded Certificate of Appreciation for outstanding leadership and management as Event Organizer at Art Fiesta 2026.',
    badge: 'Organizer Lead',
  },
  {
    id: 'cert-7',
    title: 'Organizer — TEDxTUF: Unlocking Tomorrow',
    issuer: 'The University of Faisalabad (CCA)',
    date: 'Nov 2025',
    category: 'Leadership & Executive',
    detail: 'Awarded Certificate of Appreciation for key contributions in organizing and executing the flagship TEDxTUF: Unlocking Tomorrow event.',
    badge: 'TEDx Organizer',
  },
  {
    id: 'cert-8',
    title: 'Congress Secretary — 10th Academic Studies Congress',
    issuer: 'National Business School & TUF',
    date: 'Oct 2025',
    category: 'Leadership & Executive',
    detail: 'Recognized for exemplary dedication and leadership as Congress Secretary at the 10th Academic Studies Congress (ASC-2025/FALL).',
    badge: 'Congress Secretary',
  },
  {
    id: 'cert-9',
    title: 'Organizing Team Member — International Sustainable Seminar',
    issuer: 'National Business School & TUF',
    date: 'Feb 2026',
    category: 'Leadership & Executive',
    detail: 'Certificate of Appreciation for dedicated organizing contributions at the International Seminar on Sustainable Development.',
    badge: 'International Event',
  },
  {
    id: 'cert-10',
    title: 'Organizing Team — International Workshop on Ethics & AI in HEIs',
    issuer: 'National Business School & TUF',
    date: 'Feb 2026',
    category: 'Leadership & Executive',
    detail: 'Key organizing member for the Two-Day International Workshop on Ethics & AI for Improving Quality Education in Higher Education Institutions.',
    badge: 'AI Ethics Workshop',
  },
  {
    id: 'cert-11',
    title: 'State Bank of Pakistan — SME Launchpad Session',
    issuer: 'State Bank of Pakistan (SBP BSC, Faisalabad)',
    date: 'Feb 2026',
    category: 'Corporate & Finance',
    detail: 'Awarded Certificate of Participation for completing the SME Launchpad Session held at The University of Faisalabad.',
    badge: 'State Bank Certified',
  },
  {
    id: 'cert-12',
    title: 'Innovative Pakistan 2026 Competition',
    issuer: 'IEEE Lahore Section, HEC, TUF & GIU',
    date: 'May 2026',
    category: 'Conferences & Events',
    detail: 'Certificate of Participation for active involvement and top ranking in the national IEEE-backed innovation initiative INNOVATIVE PAKISTAN 2026.',
    badge: 'IEEE National Top 4',
  },
  {
    id: 'cert-13',
    title: '3rd International Conference on Advance STEAM Education',
    issuer: 'TUF & Green International University',
    date: 'Nov 2025',
    category: 'Conferences & Events',
    detail: 'Certificate of Participation at ICASE-2025 advancing research and emerging trends in Science, Technology, Engineering, Arts & Mathematics.',
    badge: 'International Conference',
  },
  {
    id: 'cert-14',
    title: 'Hult Prize OnCampus Program 2023–2024',
    issuer: 'Hult Prize Foundation & TUF',
    date: 'Feb 2024',
    category: 'Conferences & Events',
    detail: 'Recognized as Competitor representing Team Synergy at the Hult Prize OnCampus Program for social entrepreneurship innovation.',
    badge: 'Social Enterprise',
  },
  {
    id: 'cert-15',
    title: 'Nestlé E-Learning 2024: Sustainability',
    issuer: 'Nestlé Connect & Nestlé Needs Youth',
    date: '2024',
    category: 'Corporate & Finance',
    detail: 'Completed professional e-learning certification focused on environmental sustainability, carbon footprint reduction, and sustainable corporate operations.',
    badge: 'Nestlé Certified',
  },
  {
    id: 'cert-16',
    title: 'Digital World & Change Management',
    issuer: 'Digital Empowerment Network (DEN)',
    date: 'Aug 2024',
    category: 'Corporate & Finance',
    detail: 'Certificate of Participation in webinar promoting youth digital empowerment, process optimization, and organizational change management.',
    badge: 'Digital Empowerment',
  },
];

const categories = [
  'All',
  'AI & Data Science',
  'Leadership & Executive',
  'Conferences & Events',
  'Corporate & Finance',
] as const;

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredCerts = certifications.filter((cert) => {
    if (activeCategory === 'All') return true;
    return cert.category === activeCategory;
  });

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader eyebrow="Credentials & Honors" title="Certifications & Executive Roles" />

      <p className="text-center text-sm md:text-base text-gray-400 max-w-3xl mx-auto -mt-8 mb-10 leading-relaxed">
        Verified certifications, government diplomas, international conference achievements, and executive leadership appointments.
      </p>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all flex items-center gap-2 ${
              activeCategory === cat
                ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] font-semibold'
                : 'bg-white/[0.04] border border-white/[0.06] text-gray-400 hover:text-white hover:border-white/[0.15]'
            }`}
          >
            {cat === 'All' && <Filter size={13} />}
            {cat}
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeCategory === cat ? 'bg-white/20 text-white' : 'bg-white/10 text-gray-400'
              }`}
            >
              {cat === 'All'
                ? certifications.length
                : certifications.filter((c) => c.category === cat).length}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Certifications Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              whileHover={{ y: -5 }}
              className="glass-card glass-card-hover p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge & Icon */}
                <div className="flex justify-between items-start mb-4 gap-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-[0_0_12px_rgba(59,130,246,0.2)]">
                    <Award size={20} />
                  </div>
                  {cert.badge && (
                    <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20 shrink-0 flex items-center gap-1 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
                      <ShieldCheck size={11} /> {cert.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-blue-400 text-xs md:text-sm font-semibold mb-1 flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="shrink-0" /> {cert.issuer}
                </p>
                <p className="font-mono-ui text-gray-400 text-xs mb-3">{cert.date}</p>
                <p className="text-gray-300 text-xs md:text-sm mb-5 leading-relaxed">
                  {cert.detail}
                </p>
              </div>

              <div>
                {cert.verifyCode && (
                  <div className="text-[11px] font-mono text-gray-400 bg-white/[0.03] px-2.5 py-1.5 rounded border border-white/[0.05] mb-4">
                    {cert.verifyCode}
                  </div>
                )}
                <div className="pt-4 border-t border-white/[0.06]">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="./certificates.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 rounded-lg bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 hover:border-blue-500/50 text-blue-400 hover:text-blue-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    View Official Certificate <ExternalLink size={13} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
