import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'AI & Machine Learning',
    skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'CNN', 'LSTM', 'YOLO', 'Transfer Learning', 'NLP', 'OCR', 'Deep Learning', 'Hyperparameter Tuning', 'Cross-Validation'],
  },
  {
    category: 'Programming',
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'SQL', 'Automation Scripting'],
  },
  {
    category: 'Computer Vision',
    skills: ['OpenCV', 'Tesseract OCR', 'face_recognition', 'YOLO', 'Image Preprocessing'],
  },
  {
    category: 'Backend & APIs',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'PHP', 'Docker'],
  },
  {
    category: 'Automation & AI Agents',
    skills: ['Make.com', 'n8n', 'Prompt Engineering', 'LLM Integration (OpenAI / Anthropic)', 'API Webhooks', 'AI Agents', 'Workflow Automation'],
  },
  {
    category: 'Libraries & Data',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'PyMuPDF', 'python-docx'],
  },
  {
    category: 'Databases',
    skills: ['Firebase', 'MySQL', 'Supabase'],
  },
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'JavaScript', 'React', 'WordPress', 'Shopify'],
  },
  {
    category: 'Tools & Testing',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'PyCharm', 'Android Studio', 'pytest'],
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
        <div className="w-16 h-[2px] bg-blue-400 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {skillsData.map((category, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-6 flex flex-col h-full hover:border-white/[0.1] transition-colors"
          >
            <h3 className="text-base font-semibold text-white mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2 mt-auto">
              {category.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-3 py-1 text-xs rounded-md bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-white hover:border-blue-400/30 hover:bg-blue-400/[0.06] transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}