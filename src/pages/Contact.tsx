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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm"
          >
            <div className="rounded-2xl bg-[#111111] border border-white/[0.08] p-6 shadow-2xl mx-4">
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

              <p className="text-gray-500 text-sm mb-6">
                How would you like to reach me at <span className="text-gray-300">{PHONE_DISPLAY}</span>?
              </p>

              {/* Options */}
              <div className="flex flex-col gap-3">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  onClick={onClose}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-400/30 hover:bg-blue-400/[0.05] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400/20 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">Phone Call</p>
                    <p className="text-gray-500 text-xs">Open your phone dialer</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${PHONE_NUMBER.replace('+', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={onClose}
                  className="flex items-center gap-4 px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-emerald-400/30 hover:bg-emerald-400/[0.05] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400/20 transition-colors">
                    <FaWhatsapp size={22} />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">WhatsApp</p>
                    <p className="text-gray-500 text-xs">Chat on WhatsApp</p>
                  </div>
                </a>
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
      const response = await fetch('https://formsubmit.co/ajax/sheikhoo1274@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject}`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Form Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Phone / WhatsApp Modal */}
      <PhoneModal isOpen={phoneModalOpen} onClose={() => setPhoneModalOpen(false)} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <div className="w-16 h-[2px] bg-blue-400 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Whether you have a project proposal, need help building AI/ML solutions or automations, 
            or just want to connect — I'd love to hear from you!
          </p>
          
          <div className="space-y-5 mb-8">
            {/* Email */}
            <a href="mailto:sheikhoo1274@gmail.com" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-blue-400 group-hover:border-blue-400/30 transition-colors">
                <Mail size={18} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email</h4>
                <p className="text-gray-300 text-sm group-hover:text-white transition-colors">sheikhoo1274@gmail.com</p>
              </div>
            </a>
            
            {/* Phone — opens modal with Phone / WhatsApp choice */}
            <button
              onClick={() => setPhoneModalOpen(true)}
              className="flex items-center gap-4 group w-full text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-blue-400 group-hover:border-blue-400/30 transition-colors">
                <Phone size={18} />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone / WhatsApp</h4>
                <p className="text-gray-300 text-sm group-hover:text-white transition-colors flex items-center gap-2">
                  {PHONE_DISPLAY}
                  <span className="text-[10px] text-gray-600 bg-white/[0.04] px-1.5 py-0.5 rounded">tap to choose</span>
                </p>
              </div>
              <MessageCircle size={16} className="text-gray-600 group-hover:text-emerald-400 transition-colors" />
            </button>
            
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-blue-400">
                <MapPin size={18} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Location</h4>
                <p className="text-gray-300 text-sm">Faisalabad, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/Saif-Sheikh1"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-white px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] transition-all"
            >
              <FaGithub size={16} /> GitHub <ArrowUpRight size={12} />
            </a>
            <a
              href="https://linkedin.com/in/muhammad-saif-8a59662a4"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-white px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] transition-all"
            >
              <FaLinkedin size={16} /> LinkedIn <ArrowUpRight size={12} />
            </a>
            <a
              href="./cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-gray-500 hover:text-white px-3 py-2 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] transition-all"
            >
              <Download size={16} /> Resume <ArrowUpRight size={12} />
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-400/50 transition-colors placeholder:text-gray-600"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-400/50 transition-colors placeholder:text-gray-600"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-400/50 transition-colors placeholder:text-gray-600"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-[#0a0a0a] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-blue-400/50 transition-colors resize-none placeholder:text-gray-600"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-blue-500 hover:bg-blue-400 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
              <Send size={16} />
            </button>
            
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-emerald-400 text-sm text-center flex items-center justify-center gap-2"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-sm text-center"
              >
                Failed to send. Please email me directly at sheikhoo1274@gmail.com
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}