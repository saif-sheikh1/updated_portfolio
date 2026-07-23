import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, BookOpen } from 'lucide-react';
import { FaGithub as GitIcon } from 'react-icons/fa';

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <GitIcon size={32} className="text-white" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">GitHub Activity</h2>
        </div>
        <div className="w-16 h-[2px] bg-blue-400 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-500 max-w-xl mx-auto text-sm">
          Open source contributions, personal projects, and coding activity from my GitHub profile.
        </p>
      </motion.div>



      {/* Recent Repos */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Recent Repositories</h3>
          <a href={`https://github.com/${username}`} target="_blank" rel="noreferrer" className="text-sm text-gray-500 hover:text-white flex items-center gap-1 transition-colors">
            View Profile <ExternalLink size={14} />
          </a>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-2 border-white/[0.06] border-t-blue-400 rounded-full animate-spin"></div>
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
                className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 flex flex-col h-full hover:border-white/[0.1] hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <BookOpen size={16} className="text-gray-600 mt-0.5 shrink-0" />
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:text-blue-400 transition-colors line-clamp-1">
                    {repo.name}
                  </a>
                </div>
                
                <p className="text-gray-600 text-xs mb-5 flex-grow line-clamp-3">
                  {repo.description || "No description provided."}
                </p>
                
                <div className="flex items-center gap-4 text-xs text-gray-600 mt-auto pt-3 border-t border-white/[0.04]">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
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