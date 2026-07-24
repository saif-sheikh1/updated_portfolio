import { motion } from 'framer-motion';
import { Download, BookOpen } from 'lucide-react';

export default function Research() {
  return (
    <div className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-3">Research & Publications</h2>
        <div className="w-16 h-[3px] bg-blue-500 mx-auto rounded-full shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
      </motion.div>

      {/* Main Research Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card glass-card-hover p-8 md:p-12 space-y-8"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pb-8 border-b border-white/[0.08]">
          <div>
            <span className="text-blue-400 font-bold tracking-wider text-xs uppercase mb-2 block">
              Final Year Project — Top 4 at Pakistan Innovative 2026
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
              Multi-Sensor Mental Health Detection System
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              {['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'EEG', 'EDA/GSR', 'PPG', 'MySQL', 'CNN', 'LSTM'].map((tag) => (
                <span key={tag} className="bg-white/[0.04] text-gray-300 px-3 py-1 rounded-md border border-white/[0.06]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <a
            href="./research.pdf"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-[0_0_25px_rgba(37,99,235,0.35)] hover:shadow-[0_0_35px_rgba(37,99,235,0.55)] hover:-translate-y-0.5"
          >
            <Download size={18} />
            Download Paper
          </a>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen size={18} className="text-blue-400" /> Abstract
            </h4>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              This research focuses on developing a multi-modal system for early mental health detection. 
              By integrating physiological sensors — EEG (electroencephalography), EDA/GSR (galvanic skin response), 
              and PPG (photoplethysmography) — along with facial emotion recognition, the system captures 
              real-time multimodal data to predict stress and anxiety levels using CNN + LSTM deep learning models.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <section className="bg-white/[0.02] border border-white/[0.04] p-6 rounded-xl">
              <h4 className="text-base font-bold text-white mb-3">Methodology</h4>
              <ul className="space-y-2">
                {[
                  'Multi-modal data collection via EEG, EDA/GSR, PPG biosensors and facial emotion recognition.',
                  'Signal processing pipeline to remove noise and artifacts from physiological data.',
                  'Feature extraction focusing on time-domain and frequency-domain metrics.',
                  'CNN + LSTM deep learning architecture for supervised classification.',
                  'Cross-validation and hyperparameter tuning for model optimization.',
                ].map((item, i) => (
                  <li key={i} className="text-xs md:text-sm text-gray-400 flex gap-2 leading-relaxed">
                    <span className="text-blue-400 font-bold shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white/[0.02] border border-white/[0.04] p-6 rounded-xl">
              <h4 className="text-base font-bold text-white mb-3">Results & Future Work</h4>
              <p className="text-xs md:text-sm text-gray-400 mb-3 leading-relaxed">
                Achieved approximately <strong className="text-white font-semibold">85% classification accuracy</strong> on 
                multimodal mental health detection. The multi-sensor fusion approach significantly outperformed 
                single-sensor baselines. Recognized as <strong className="text-blue-400 font-semibold">Top 4 Finalist at Pakistan 
                Innovative 2026</strong> (1,000+ projects, IEEE-backed). Currently incubated at NIC Faisalabad.
              </p>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                <strong className="text-white font-semibold">Future Work:</strong> Integration with mobile applications for 
                real-time alerts, deployment as a FastAPI REST endpoint serving a monitoring dashboard with trend 
                analysis and personalized mental health recommendations.
              </p>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}