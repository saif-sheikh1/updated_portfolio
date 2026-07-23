import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'Multi-Sensor Mental Health Detection',
    category: 'AI',
    problem: 'Lack of real-time multi-modal data analysis for mental health diagnosis.',
    solution: 'Achieved ~85% classification accuracy by fusing EEG, EDA/GSR, PPG, and facial emotion recognition data using CNN + LSTM deep learning models. Deployed via FastAPI as a REST endpoint with real-time monitoring dashboard.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'EEG', 'EDA/GSR', 'PPG', 'MySQL'],
    github: 'https://github.com/Saif-Sheikh1',
    demo: '#',
    caseStudy: '#/research',
    highlight: 'Top 4 — Pakistan Innovative 2026',
  },
  {
    id: 2,
    title: 'Facial Recognition System',
    category: 'AI',
    problem: 'Need for reliable real-time identity matching across varying lighting conditions.',
    solution: 'Implemented CNN-based face embedding pipelines handling multiple simultaneous faces. Integrated face encoding comparison logic with a persistent local database for attendance and access control.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Keras', 'face_recognition', 'NumPy', 'FastAPI'],
    github: 'https://github.com/Saif-Sheikh1',
  },
  {
    id: 3,
    title: 'Gender Detection System',
    category: 'AI',
    problem: 'Need for real-time facial gender prediction with production-ready performance.',
    solution: 'Trained a CNN binary classification model on large-scale dataset with data augmentation. Benchmarked with Scikit-learn metrics and deployed with OpenCV for real-time webcam integration with bounding box overlays.',
    tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'Scikit-learn', 'NumPy'],
    github: 'https://github.com/Saif-Sheikh1',
  },
  {
    id: 4,
    title: 'AI Calling Agent',
    category: 'Automation',
    problem: 'High volume of routine lead qualification and appointment scheduling.',
    solution: 'Built an LLM-powered AI calling assistant using prompt engineering and OpenAI API, automating lead qualification and appointment scheduling workflows connected to CRM systems via Make.com.',
    tech: ['Python', 'OpenAI API', 'Make.com', 'Prompt Engineering', 'CRM Integration'],
    github: 'https://github.com/Saif-Sheikh1',
  },
  {
    id: 5,
    title: 'Slip OCR Extraction System',
    category: 'AI',
    problem: 'Manual entry of receipt data is time-consuming and error-prone.',
    solution: 'Engineered an automated receipt processing pipeline — extracted structured data from unstructured scanned documents using Tesseract OCR + NLP preprocessing, served via FastAPI.',
    tech: ['Python', 'OpenCV', 'Tesseract OCR', 'NLP', 'FastAPI'],
    github: 'https://github.com/Saif-Sheikh1',
  },
  {
    id: 6,
    title: 'Python Tools & Utilities Suite',
    category: 'Fullstack',
    problem: 'Manual document manipulation and format conversion is tedious.',
    solution: 'Delivered a comprehensive document toolkit — PDF editor/compressor, split/unlock/protect, digital signing, format conversions (Word/PPT/HTML to PDF), and Tesseract OCR + NLP text summarization.',
    tech: ['PyMuPDF', 'PyPDF2', 'python-docx', 'WeasyPrint', 'Tesseract OCR', 'OpenCV'],
    github: 'https://github.com/Saif-Sheikh1',
  },
  {
    id: 7,
    title: 'Restaurant POS System',
    category: 'Fullstack',
    problem: 'Inefficient order management and billing in restaurants.',
    solution: 'Built a comprehensive Point of Sale platform with billing, inventory, kitchen management, and reporting modules.',
    tech: ['Python', 'SQL', 'Supabase'],
    github: 'https://github.com/Saif-Sheikh1',
  },
  {
    id: 8,
    title: 'Coffee Shop Android App',
    category: 'Mobile',
    problem: 'Customers need a seamless mobile ordering experience.',
    solution: 'Created a native Android app with authentication, real-time Firebase database, menu browsing, and ordering features.',
    tech: ['Java', 'XML', 'Android Studio', 'Firebase'],
    github: 'https://github.com/Saif-Sheikh1',
  },
];

const categories = ['All', 'AI', 'Automation', 'Fullstack', 'Mobile'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.category === filter
  );

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
        <div className="w-16 h-[2px] bg-blue-400 mx-auto rounded-full mb-8"></div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.25)]'
                  : 'bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:border-white/[0.1]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 flex flex-col hover:border-white/[0.1] transition-all"
            >
              <div className="flex justify-between items-start mb-3 gap-3">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  {project.highlight && (
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/20 rounded text-yellow-400">
                      {project.highlight}
                    </span>
                  )}
                  <span className="text-[10px] font-semibold px-2 py-0.5 bg-blue-400/10 border border-blue-400/20 rounded text-blue-400">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-3 mb-5 flex-grow">
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Problem</h4>
                  <p className="text-sm text-gray-500">{project.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Solution</h4>
                  <p className="text-sm text-gray-500">{project.solution}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs text-gray-500 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.04]">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto pt-4 border-t border-white/[0.04]">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors">
                    <FaGithub size={14} /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-400 transition-colors">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
                {project.caseStudy && (
                  <a href={project.caseStudy} className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-400 transition-colors">
                    <FileText size={14} /> Case Study
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}