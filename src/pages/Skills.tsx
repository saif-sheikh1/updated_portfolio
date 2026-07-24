import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: '• AI & Machine Learning',
    skills: [
      'TensorFlow', 'Keras', 'Scikit-learn', 'CNN', 'LSTM', 'YOLO',
      'Transfer Learning', 'Model Deployment', 'Hyperparameter Tuning',
      'Cross-Validation', 'Computer Vision', 'NLP', 'OCR', 'Deep Learning'
    ],
  },
  {
    title: '• Programming Languages',
    skills: ['Python', 'SQL', 'C++', 'Java', 'JavaScript'],
  },
  {
    title: '• Backend & APIs',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'Docker', 'MySQL', 'Supabase', 'Firebase', 'PHP'],
  },
  {
    title: '• Libraries & Signal Processing',
    skills: [
      'OpenCV', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn',
      'PyMuPDF', 'Tesseract OCR', 'python-docx', 'face_recognition'
    ],
  },
  {
    title: '• Automation & AI Agents',
    skills: [
      'Make.com', 'n8n', 'Prompt Engineering',
      'LLM Integration (OpenAI / Anthropic APIs)', 'API Webhooks', 'Workflow Automation'
    ],
  },
  {
    title: '• Tools & Frontend',
    skills: [
      'Git', 'GitHub', 'Postman', 'VS Code', 'PyCharm',
      'pytest', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS'
    ],
  },
];

export default function Skills() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">Technical Skills</h2>
        <div className="w-16 h-[3px] bg-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
      </motion.div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="glass-card glass-card-hover p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill text-xs text-gray-300 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.06] cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}