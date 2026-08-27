import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Cpu, FileText, CheckCircle2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';

interface LiveProject {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  category: string;
  description: string;
  tech: string[];
}

interface OtherProject {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  highlight?: string;
  github?: string;
  caseStudy?: string;
}

const liveProjects: LiveProject[] = [
  {
    id: 'live-1',
    title: 'VetexBio — Veterinary Feed Additives Platform',
    subtitle: 'Enterprise Health & Biotech Web Platform',
    url: 'https://vetexbio.com',
    category: 'Live Sites',
    description: 'Enterprise web platform designed to showcase cattle nutrition products, feed efficiency science, and product catalogs with interactive nutrition calculators and responsive layout.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Swiper', 'AOS'],
  },
  {
    id: 'live-2',
    title: 'Nexom Solutions — Digital Agency Platform',
    subtitle: 'High-Converting Digital Agency Showcase',
    url: 'https://nexomsolutions.site',
    category: 'Live Sites',
    description: 'High-converting agency platform engineered with GSAP ScrollTrigger animations, custom cursors, interactive portfolio showcases, and service booking funnels.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'ScrollTrigger', 'Swiper'],
  },
  {
    id: 'live-3',
    title: 'SaaS Founder Studio — Product Development Studio',
    subtitle: 'Next-Gen Founder & SaaS Dashboard',
    url: 'https://saas-founder-studio.vercel.app/',
    category: 'Live Sites',
    description: 'Next.js 15 product studio platform featuring full-stack architecture showcases, AI agent integration services, tech partner roadmaps, and lead booking funnels.',
    tech: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'OpenAI', 'Prisma'],
  },
  {
    id: 'live-4',
    title: 'AURUM — Luxury Fine Dining & Restaurant Platform',
    subtitle: 'Michelin-Starred Culinary & Reservation Platform',
    url: 'https://resturant-website-one-pearl.vercel.app/',
    category: 'Live Sites',
    description: 'Luxury fine dining restaurant web application featuring interactive tasting menu showcases, 3D interactive hero canvas, table reservation system, gift card purchasing, and animated gallery.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas', 'Vercel'],
  },
  {
    id: 'live-5',
    title: 'Radiant Otter — Deployed Web Application',
    subtitle: 'Interactive Deployed Web Application',
    url: 'https://radiant-otter-12abd9.netlify.app',
    category: 'Live Sites',
    description: 'Interactive web application featuring modern user interface components, smooth client-side rendering, and responsive design systems.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Netlify'],
  },
  {
    id: 'live-6',
    title: 'Teal Rugelach — Deployed Web Showcase',
    subtitle: 'Custom Client Web Application',
    url: 'https://teal-rugelach-85ed5a.netlify.app',
    category: 'Live Sites',
    description: 'Custom client-facing web application optimized for speed, responsive cross-device layout, and intuitive user navigation.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Netlify', 'Animations'],
  },
  {
    id: 'live-7',
    title: 'AI Resume Analyzer',
    subtitle: 'Intelligent Resume Analysis & ATS Optimization',
    url: 'https://ai-resume-analyzer-6xh1ollhv-muhammad-saifs-projects.vercel.app/',
    category: 'Live Sites',
    description: 'An AI-powered application that evaluates resumes against job descriptions to provide detailed ATS scoring, keyword extraction, and optimization suggestions.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI'],
  },
];

const remainingProjects: OtherProject[] = [
  {
    id: 'proj-1',
    title: 'Multi-Sensor Mental Health Detection System',
    category: 'AI',
    description: 'Achieved ~85% classification accuracy on a multimodal mental health detection system by fusing EEG, EDA/GSR, PPG, and facial emotion recognition data using CNN + LSTM deep learning models. Deployed via FastAPI as a REST endpoint with real-time monitoring dashboard.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'EEG', 'EDA/GSR', 'PPG', 'MySQL'],
    highlight: 'Top 4 — Pakistan Innovative 2026',
    github: 'https://github.com/Saif-Sheikh1',
    caseStudy: '#/research',
  },
  {
    id: 'proj-2',
    title: 'Facial Recognition System',
    category: 'AI',
    description: 'Implemented CNN-based face embedding pipelines handling multiple simultaneous faces across varying lighting conditions and angles. Integrated face encoding comparison logic with a persistent local database for attendance and access control.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'face_recognition', 'NumPy', 'FastAPI'],
    github: 'https://github.com/Saif-Sheikh1',
  },
  {
    id: 'proj-3',
    title: 'Gender Detection System',
    category: 'AI',
    description: 'Trained a CNN binary classification model for real-time facial gender prediction on a large-scale dataset with data augmentation. Benchmarked with Scikit-learn metrics and deployed with OpenCV for real-time webcam integration with bounding box overlays.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'NumPy'],
  },
  {
    id: 'proj-4',
    title: 'AI Calling Agent',
    category: 'Automation',
    description: 'Built an LLM-powered AI calling assistant using prompt engineering and OpenAI API integration, automating lead qualification and appointment scheduling workflows connected to CRM systems via Make.com.',
    tech: ['Python', 'OpenAI API', 'Make.com', 'Prompt Engineering', 'CRM Integration'],
  },
  {
    id: 'proj-5',
    title: 'Slip OCR Extraction System',
    category: 'AI',
    description: 'Engineered an automated receipt processing pipeline — extracted structured data from unstructured scanned documents using Tesseract OCR + NLP preprocessing, served via FastAPI.',
    tech: ['Python', 'OpenCV', 'Tesseract OCR', 'NLP', 'FastAPI'],
  },
  {
    id: 'proj-6',
    title: 'Python Tools & Utilities Suite',
    category: 'Automation',
    description: 'Delivered a comprehensive document toolkit — PDF editor/compressor, split/unlock/protect, digital signing, format conversions (Word/PPT/HTML to PDF), and Tesseract OCR + NLP text summarization.',
    tech: ['PyMuPDF', 'PyPDF2', 'python-docx', 'WeasyPrint', 'Tesseract OCR', 'OpenCV'],
  },
  {
    id: 'proj-7',
    title: 'Restaurant POS System',
    category: 'Fullstack',
    description: 'Built a comprehensive Point of Sale platform with billing, inventory, kitchen management, and reporting modules.',
    tech: ['Python', 'SQL', 'Supabase'],
  },
  {
    id: 'proj-8',
    title: 'Coffee Shop Android App',
    category: 'Mobile',
    description: 'Created a native Android app with authentication, real-time Firebase database, menu browsing, and ordering features.',
    tech: ['Java', 'XML', 'Android Studio', 'Firebase'],
  },
];

const categories = ['All', 'Live Sites', 'AI & ML', 'Automation', 'Fullstack', 'Mobile'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const showLiveSection = filter === 'All' || filter === 'Live Sites';
  const showOtherSection = filter === 'All' || filter !== 'Live Sites';

  const filteredOtherProjects = remainingProjects.filter((p) => {
    if (filter === 'All') return true;
    if (filter === 'AI & ML') return p.category === 'AI';
    if (filter === 'Automation') return p.category === 'Automation';
    if (filter === 'Fullstack') return p.category === 'Fullstack';
    if (filter === 'Mobile') return p.category === 'Mobile';
    return true;
  });

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title & Subtitle Header */}
      <SectionHeader
        eyebrow="Selected Work"
        title="Featured Projects"
        description="Explore deployed web applications, machine learning systems, and Python automation workflows."
      />

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-2 mb-12 -mt-4"
      >
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full font-mono-ui text-[11px] md:text-xs tracking-wide transition-all ${filter === cat
              ? 'bg-signal text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] font-semibold'
              : 'bg-white/[0.04] border border-white/[0.08] text-inkmute hover:text-white hover:border-white/[0.2]'
              }`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* SECTION 1: LIVE DEPLOYED WEB APPLICATIONS & PLATFORMS */}
      {showLiveSection && (
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-accent-3/10 border border-accent-3/25 flex items-center justify-center text-accent-3 shadow-[0_0_12px_rgba(45,212,191,0.2)]">
              <Globe size={18} />
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                Live Deployed Web Applications & Platforms
              </h3>
              <p className="text-xs md:text-sm text-inkmute">
                Production web applications active and hosted live
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="glass-card glass-card-hover p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h4 className="text-lg font-bold text-white leading-snug">
                      {project.title}
                    </h4>
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-accent-3 bg-accent-3/10 px-2.5 py-0.5 rounded-full border border-accent-3/25 shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-3 animate-ping" />
                      Live
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-inkmute mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="skill-pill text-[11px] text-inkdim bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Visit Live Site Button */}
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-shimmer w-full py-2.5 rounded-xl bg-accent-3/10 hover:bg-accent-3/20 border border-accent-3/30 hover:border-accent-3/60 text-accent-3 hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <ExternalLink size={14} /> Visit Live Site
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: MACHINE LEARNING, AI & SOFTWARE ENGINEERING PROJECTS */}
      {showOtherSection && (
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-accent/10 border border-accent/25 flex items-center justify-center text-accent shadow-[0_0_12px_rgba(56,189,248,0.2)]">
              <Cpu size={18} />
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                Machine Learning, AI & Software Engineering Projects
              </h3>
              <p className="text-xs md:text-sm text-inkmute">
                Computer vision models, OCR pipelines, AI agents, and Python backends
              </p>
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredOtherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className="glass-card glass-card-hover p-6 md:p-7 flex flex-col justify-between"
                >
                  <div>
                    {/* Header with Badges */}
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <h4 className="text-lg md:text-xl font-bold text-white leading-snug">{project.title}</h4>
                      <div className="flex items-center gap-2 shrink-0">
                        {project.highlight && (
                          <span className="text-[10px] font-bold px-2.5 py-0.5 bg-amber-400/10 border border-amber-400/25 rounded-md text-amber-300 flex items-center gap-1 shadow-[0_0_10px_rgba(251,191,36,0.15)]">
                            <CheckCircle2 size={11} /> {project.highlight}
                          </span>
                        )}
                        <span className="font-mono-ui text-[10px] font-semibold px-2 py-0.5 bg-accent/10 border border-accent/25 rounded text-accent">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-inkmute mb-6 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="skill-pill text-xs text-inkdim bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.05]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Optional Repository & Case Study Links */}
                    {(project.github || project.caseStudy) && (
                      <div className="flex items-center gap-4 pt-3 border-t border-white/[0.06]">
                        {project.github && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs text-inkmute hover:text-white transition-colors font-medium"
                          >
                            <FaGithub size={13} /> Code Repository
                          </motion.a>
                        )}
                        {project.caseStudy && (
                          <motion.a
                            whileHover={{ scale: 1.05 }}
                            href={project.caseStudy}
                            className="flex items-center gap-1.5 text-xs text-accent hover:text-white transition-colors font-medium"
                          >
                            <FileText size={13} /> View Case Study
                          </motion.a>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </div>
  );
}
