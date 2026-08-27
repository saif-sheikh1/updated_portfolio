import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
}

/* Shared page header — mono eyebrow + display title, matching the Home/About language. */
export default function SectionHeader({ eyebrow, title, description, align = 'left' }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className={`mb-12 md:mb-14 ${align === 'center' ? 'text-center' : ''}`}
    >
      <div className={`eyebrow ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</div>
      <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-[1.12]">{title}</h2>
      {description && (
        <p className={`text-inkdim text-sm md:text-base mt-4 leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
