import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* Subtle top gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="bg-[#060606] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="group flex items-center gap-1 mb-5 w-fit">
                <span className="text-xl font-bold text-white tracking-tight">Muhammad</span>
                <span className="text-xl font-bold text-blue-400 tracking-tight">Saif</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                AI & Machine Learning Engineer with 5+ internships, building production-ready ML systems 
                and automated workflows that deliver measurable business impact.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[13px] font-semibold text-gray-300 uppercase tracking-wider mb-5">Navigate</h4>
              <ul className="space-y-3">
                {[
                  { name: 'About', path: '/about' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Research', path: '/research' },
                  { name: 'Experience', path: '/experience' },
                  { name: 'Certifications', path: '/certifications' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-500 hover:text-gray-200 transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[13px] font-semibold text-gray-300 uppercase tracking-wider mb-5">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:sheikhoo1274@gmail.com" className="text-sm text-gray-500 hover:text-gray-200 transition-colors flex items-center gap-2">
                    <Mail size={14} className="text-blue-400/60" />
                    sheikhoo1274@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923064851090" className="text-sm text-gray-500 hover:text-gray-200 transition-colors flex items-center gap-2">
                    <Phone size={14} className="text-blue-400/60" />
                    +92 306 4851090
                  </a>
                </li>
                <li>
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <MapPin size={14} className="text-blue-400/60" />
                    Faisalabad, Pakistan
                  </span>
                </li>
              </ul>
            </div>

            {/* Social & Resume */}
            <div>
              <h4 className="text-[13px] font-semibold text-gray-300 uppercase tracking-wider mb-5">Connect</h4>
              <div className="flex gap-3 mb-6">
                <a
                  href="https://github.com/Saif-Sheikh1"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/muhammad-saif-8a59662a4"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="mailto:sheikhoo1274@gmail.com"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
                >
                  <Mail size={16} />
                </a>
              </div>
              <a
                href="./cv.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
              >
                Download Resume
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-600">
              © {currentYear} Muhammad Saif. All rights reserved.
            </p>
            <p className="text-xs text-gray-600">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}