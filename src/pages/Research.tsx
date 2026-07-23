import { motion } from 'framer-motion';
import { Download, BookOpen } from 'lucide-react';

export default function Research() {
  return (
    <div className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Research & Publications</h2>
        <div className="w-16 h-[2px] bg-blue-400 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-8 md:p-12"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
          <div>
            <span className="text-blue-400 font-semibold tracking-wider text-xs uppercase mb-2 block">Final Year Project — Top 4 at Pakistan Innovative 2026</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Multi-Sensor Mental Health Detection System
            </h3>
            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              {['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'EEG', 'EDA/GSR', 'PPG', 'MySQL', 'CNN', 'LSTM'].map((tag) => (
                <span key={tag} className="bg-white/[0.03] px-2.5 py-1 rounded border border-white/[0.06]">{tag}</span>
              ))}
            </div>
          </div>
          
          <a
            href="./multisensor fyp report.pdf"
            target="_blank"
            rel="noreferrer"
            className="shrink-0 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.25)]"
          >
            <Download size={18} />
            Download Paper
          </a>
        </div>

        <div className="space-y-8 text-gray-400 leading-relaxed">
          <section>
            <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <BookOpen size={18} className="text-blue-400" /> Abstract
            </h4>
            <p>
              This research focuses on developing a multi-modal system for early mental health detection. 
              By integrating physiological sensors — EEG (electroencephalography), EDA/GSR (galvanic skin response), 
              and PPG (photoplethysmography) — along with facial emotion recognition, the system captures 
              real-time multimodal data to predict stress and anxiety levels using CNN + LSTM deep learning models.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h4 className="text-lg font-semibold text-white mb-3">Methodology</h4>
              <ul className="space-y-2">
                {[
                  'Multi-modal data collection via EEG, EDA/GSR, PPG biosensors and facial emotion recognition.',
                  'Signal processing pipeline to remove noise and artifacts from physiological data.',
                  'Feature extraction focusing on time-domain and frequency-domain metrics.',
                  'CNN + LSTM deep learning architecture for supervised classification.',
                  'Cross-validation and hyperparameter tuning for model optimization.',
                ].map((item, i) => (
                  <li key={i} className="text-sm text-gray-500 flex gap-2">
                    <span className="text-blue-400/60 mt-0.5 shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="text-lg font-semibold text-white mb-3">Results & Future Work</h4>
              <p className="text-sm text-gray-500 mb-3">
                Achieved approximately <strong className="text-gray-300">85% classification accuracy</strong> on 
                multimodal mental health detection. The multi-sensor fusion approach significantly outperformed 
                single-sensor baselines. Recognized as <strong className="text-gray-300">Top 4 Finalist at Pakistan 
                Innovative 2026</strong> (1,000+ projects, IEEE-backed). Currently incubated at NIC Faisalabad.
              </p>
              <p className="text-sm text-gray-500">
                <strong className="text-gray-300">Future Work:</strong> Integration with mobile applications for 
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