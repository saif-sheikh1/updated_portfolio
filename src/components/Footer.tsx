import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="bg-[#050608] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="group flex items-center mb-5 w-fit">
                <span className="text-xl font-extrabold text-white tracking-tight">Muhammad</span>
                <span className="text-xl font-extrabold text-blue-500 tracking-tight ml-1">Saif</span>
                <span className="text-xl font-extrabold text-cyan-400">.</span>
              </Link>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-xs">
                AI & Machine Learning Engineer with 5+ internships, building production-ready ML systems
                and automated workflows that deliver measurable business impact.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Navigate</h4>
              <ul className="space-y-3 text-xs md:text-sm">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Skills', path: '/skills' },
                  { name: 'Experience', path: '/experience' },
                  { name: 'Projects', path: '/projects' },
                  { name: 'Research', path: '/research' },
                  { name: 'Certifications', path: '/certifications' },
                  { name: 'Achievements', path: '/achievements' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Contact</h4>
              <ul className="space-y-3 text-xs md:text-sm">
                <li>
                  <a href="mailto:sheikhoo1274@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <Mail size={14} className="text-blue-400" />
                    sheikhoo1274@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+923064851090" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <Phone size={14} className="text-blue-400" />
                    +92 306 4851090
                  </a>
                </li>
                <li>
                  <span className="text-gray-400 flex items-center gap-2">
                    <MapPin size={14} className="text-blue-400" />
                    Faisalabad, Pakistan
                  </span>
                </li>
              </ul>
            </div>

            {/* Social & Resume */}
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Connect</h4>
              <div className="flex gap-3 mb-6">
                <a
                  href="https://github.com/Saif-Sheikh1"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-all"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/muhammad-saif-8a59662a4"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-all"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href="mailto:sheikhoo1274@gmail.com"
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/40 transition-all"
                >
                  <Mail size={16} />
                </a>
              </div>
              <a
                href="./resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                Download Resume
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-xs text-gray-400">
              © {currentYear} Muhammad Saif. All rights reserved.
            </p>
            <p className="text-xs text-gray-400">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}