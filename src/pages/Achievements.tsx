import { motion } from 'framer-motion';
import { Trophy, Star, Medal, Mic, BookOpen, Users, GraduationCap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const achievements = [
  {
    title: 'Top 4 Finalist',
    event: 'Pakistan Innovative 2026',
    description: '1,000+ competing projects, IEEE-backed competition — recognized for the Multi-Sensor Mental Health Detection System (May 2026).',
    icon: <Trophy size={20} />,
    color: 'text-yellow-400',
    glow: 'shadow-[0_0_15px_rgba(250,204,21,0.25)]',
  },
  {
    title: 'Active Startup Incubatee',
    event: 'NIC Faisalabad',
    description: 'Active startup founder at the National Incubation Center Faisalabad, building AI-powered health-tech solutions.',
    icon: <Star size={20} />,
    color: 'text-blue-400',
    glow: 'shadow-[0_0_15px_rgba(96,165,250,0.25)]',
  },
  {
    title: 'On-Campus Runner-Up',
    event: 'Hult Prize — TUF (Feb 2024)',
    description: 'Led the runner-up social entrepreneurship startup team at The University of Faisalabad.',
    icon: <Medal size={20} />,
    color: 'text-emerald-400',
    glow: 'shadow-[0_0_15px_rgba(52,211,153,0.25)]',
  },
  {
    title: 'TEDxTUF Organizer',
    event: 'TEDxTUF Unlocking Tomorrow (Nov 2025)',
    description: 'Successfully organized TEDxTUF Unlocking Tomorrow at The University of Faisalabad.',
    icon: <Mic size={20} />,
    color: 'text-red-400',
    glow: 'shadow-[0_0_15px_rgba(248,113,113,0.25)]',
  },
  {
    title: 'Congress Secretary',
    event: '10th Academic Studies Congress ASC-2025/Fall (Oct 2025)',
    description: 'Coordinated the 10th Academic Studies Congress at National Business School.',
    icon: <BookOpen size={20} />,
    color: 'text-purple-400',
    glow: 'shadow-[0_0_15px_rgba(192,132,252,0.25)]',
  },
  {
    title: 'General Secretary',
    event: 'Entrepreneurship Society — TUF',
    description: 'Led 8+ flagship events reaching hundreds of students across cross-functional executive teams.',
    icon: <Users size={20} />,
    color: 'text-blue-400',
    glow: 'shadow-[0_0_15px_rgba(96,165,250,0.25)]',
  },
  {
    title: 'Organizing Team',
    event: 'International Seminar on Sustainable Development (Feb 2026)',
    description: 'Managed partner logistics and full event execution at The University of Faisalabad.',
    icon: <GraduationCap size={20} />,
    color: 'text-teal-400',
    glow: 'shadow-[0_0_15px_rgba(45,212,191,0.25)]',
  },
  {
    title: 'Participant',
    event: '3rd International Conference ICASE-2025 (Nov 2025)',
    description: 'Participated in the 3rd International Conference on Advance STEAM Education.',
    icon: <BookOpen size={20} />,
    color: 'text-orange-400',
    glow: 'shadow-[0_0_15px_rgba(251,146,60,0.25)]',
  },
];

export default function Achievements() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <SectionHeader eyebrow="Recognition" title="Achievements & Leadership" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass-card glass-card-hover p-6 flex items-start gap-4"
          >
            <div className={`shrink-0 w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center ${item.color} ${item.glow}`}>
              {item.icon}
            </div>
            <div>
              <h3 className="text-base md:text-lg font-bold text-white mb-0.5">{item.title}</h3>
              <p className="text-accent text-xs font-semibold mb-2">{item.event}</p>
              <p className="text-inkdim text-xs md:text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
