import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, BookOpen } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function Github() {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const username = "Saif-Sheikh1";

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        if (response.ok) {
          const data = await response.json();
          setRepos(data);
        }
      } catch (error) {
        console.error("Failed to fetch GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Open Source"
        title="GitHub Activity"
        description="Open source contributions, personal projects, and coding activity from my GitHub profile."
      />

      {/* Recent Repos */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-xl font-bold text-white">Recent Repositories</h3>
          <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="text-sm text-inkmute hover:text-white flex items-center gap-1 transition-colors">
            View Profile <ExternalLink size={14} />
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-2 border-white/[0.06] border-t-accent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass-card glass-card-hover p-5 flex flex-col h-full hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <BookOpen size={16} className="text-accent mt-0.5 shrink-0" />
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:text-accent transition-colors line-clamp-1">
                    {repo.name}
                  </a>
                </div>

                <p className="text-inkmute text-xs mb-5 flex-grow line-clamp-3">
                  {repo.description || "No description provided."}
                </p>

                <div className="flex items-center gap-4 text-xs text-inkmute mt-auto pt-3 border-t border-white/[0.06]">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent"></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
