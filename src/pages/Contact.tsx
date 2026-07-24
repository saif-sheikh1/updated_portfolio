import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, MapPin, Phone, Mail, Download, ArrowUpRight, X, MessageCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const PHONE_NUMBER = '+923064851090';
const PHONE_DISPLAY = '+92 306 4851090';

// ─── Phone / WhatsApp Choice Modal ────────────────────────────────
function PhoneModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm px-4"
          >
            <div className="glass-card p-6 shadow-2xl relative border-white/10">
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-white">Contact via</h3>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-gray-400 text-xs md:text-sm mb-6">
                How would you like to reach me at <span className="text-white font-semibold">{PHONE_DISPLAY}</span>?
              </p>

              {/* Options */}
              <div className="flex flex-col gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`tel:${PHONE_NUMBER}`}
                  onClick={onClose}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-400/40 hover:bg-blue-500/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Phone Call</p>
                    <p className="text-gray-400 text-xs">Open your phone dialer</p>
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-400/40 hover:bg-emerald-500/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                    <FaWhatsapp size={22} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">WhatsApp</p>
                    <p className="text-gray-400 text-xs">Chat on WhatsApp</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main Contact Page ────────────────────────────────────────────
export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [phoneModalOpen, setPhoneModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <PhoneModal isOpen={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">Get In Touch</h2>
        <div className="w-16 h-[3px] bg-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Let's Talk</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Whether you have a project proposal, need help building AI/ML solutions or automations, 
              or just want to connect — I'd love to hear from you!
            </p>
          </div>
          
          <div className="space-y-4">
            {/* Email */}
            <motion.a
              whileHover={{ x: 4 }}
              href="mailto:sheikhoo1274@gmail.com"
              className="flex items-center gap-4 group p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</h4>
                <p className="text-gray-200 text-sm font-medium group-hover:text-blue-300 transition-colors">sheikhoo1274@gmail.com</p>
              </div>
            </motion.a>
            
            {/* Phone */}
            <motion.button
              whileHover={{ x: 4 }}
              onClick={() => setPhoneModalOpen(true)}
              className="flex items-center gap-4 group w-full text-left p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Phone size={18} />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</h4>
                <p className="text-gray-200 text-sm font-medium group-hover:text-blue-300 transition-colors flex items-center gap-2">
                  {PHONE_DISPLAY}
                  <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">tap to choose</span>
                </p>
              </div>
              <MessageCircle size={18} className="text-gray-500 group-hover:text-emerald-400 transition-colors" />
            </motion.button>
            
            {/* Location */}
            <div className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</h4>
                <p className="text-gray-200 text-sm font-medium">Faisalabad, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Quick Social & Resume Links */}
          <div className="flex flex-wrap gap-3 pt-2">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Saif-Sheikh1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-500/40 transition-all"
            >
              <FaGithub size={15} /> GitHub <ArrowUpRight size={12} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/muhammad-saif-8a59662a4"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] hover:border-blue-500/40 transition-all"
            >
              <FaLinkedin size={15} /> LinkedIn <ArrowUpRight size={12} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="./resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all"
            >
              <Download size={15} /> Resume <ArrowUpRight size={12} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card glass-card-hover p-8 md:p-9 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#06070a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all placeholder:text-gray-600"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#06070a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all placeholder:text-gray-600"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-[#06070a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all placeholder:text-gray-600"
                placeholder="Project Inquiry / Job Opportunity"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-[#06070a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all placeholder:text-gray-600 resize-none"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={status === 'loading'}
              className="btn-shimmer w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] disabled:opacity-50"
            >
              {status === 'loading' ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <p className="text-xs text-emerald-400 text-center font-semibold mt-2">
                ✓ Message sent successfully! I'll respond shortly.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}