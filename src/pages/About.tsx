import { GraduationCap, Code2, Brain, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

const INFO_CARDS = [
  { icon: <GraduationCap size={18} />, label: 'BS Computer Science', sub: 'The University of Faisalabad' },
  { icon: <Brain size={18} />, label: 'Machine Learning', sub: 'CNN · LSTM · Deep Learning' },
  { icon: <Code2 size={18} />, label: 'Python Development', sub: 'FastAPI · ML Pipelines' },
  { icon: <Eye size={18} />, label: 'Computer Vision', sub: 'OpenCV · YOLO · OCR' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 20 } }
};

export default function About() {
  return (
    <div id="about" style={{ padding: '100px 0' }}>
      <div className="section-container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '60px' }}
        >
          <div className="eyebrow">About Me</div>
          <h2
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(28px, 4vw, 44px)',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              maxWidth: '600px',
            }}
          >
            Turning Data Into{' '}
            <span className="gradient-text-blue">Intelligent Solutions</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '60px',
            alignItems: 'start',
          }}
        >
          {/* Left — Bio */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <motion.p variants={itemVariants} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                I'm <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>Muhammad Saif</strong>, a Machine Learning Developer and Python Developer based in Faisalabad, Pakistan. With hands-on experience across 5+ technical internships, I specialize in building production-ready ML systems that solve real problems.
              </motion.p>
              <motion.p variants={itemVariants} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                My work spans Computer Vision pipelines achieving{' '}
                <strong style={{ color: 'var(--text-primary)' }}>90%+ OCR accuracy</strong>,
                multimodal deep learning systems for mental health detection with{' '}
                <strong style={{ color: 'var(--text-primary)' }}>~85% classification accuracy</strong>,
                and FastAPI backends serving real-time ML inference.
              </motion.p>
              <motion.p variants={itemVariants} style={{ fontFamily: 'Manrope, sans-serif', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                My mental health detection system placed{' '}
                <strong style={{ color: 'var(--accent)' }}>Top 4 at Pakistan Innovative 2026</strong>{' '}
                among 1,000+ competing projects and is now incubated at NIC Faisalabad. I focus on the gap between a model that works in a notebook and a system that runs reliably in production.
              </motion.p>

              {/* Location + email */}
              <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                {[
                  { label: 'Location', value: 'Faisalabad, Pakistan' },
                  { label: 'Email', value: 'sheikhoo1274@gmail.com' },
                  { label: 'Status', value: 'Open to opportunities' },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '13px', color: 'var(--text-muted)', minWidth: '70px', fontWeight: 600 }}>
                      {item.label}
                    </span>
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '14px', color: 'var(--text-secondary)' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Info cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}
          >
            {INFO_CARDS.map((card) => (
              <motion.div
                variants={itemVariants}
                key={card.label}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '20px',
                  transition: 'border-color 0.2s, transform 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--border-2)';
                  el.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = 'var(--border)';
                  el.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: 36, height: 36, borderRadius: '10px',
                    background: 'var(--accent-dim)',
                    border: '1px solid rgba(59,130,246,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--accent)', marginBottom: '12px',
                  }}
                >
                  {card.icon}
                </div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '13px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {card.label}
                </div>
                <div style={{ fontFamily: 'Manrope, sans-serif', fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {card.sub}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}