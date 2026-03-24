import React from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const GitHubStats = () => {
    const themeParams = "&theme=transparent&hide_border=true&title_color=38bdf8&text_color=94a3b8&icon_color=38bdf8&text_bold=false";
    const username = "Jivan-Patel";

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-accent/40 shadow-xl"
        >
            <div className="flex items-center gap-3 mb-6">
                <FaGithub className="text-3xl text-accent" />
                <h3 className="text-2xl font-bold text-main">GitHub Stats</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full flex justify-center bg-secondary/20 rounded-xl p-4 border border-slate-700/30">
                    <img 
                        src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true${themeParams}`} 
                        alt="GitHub Stats" 
                        loading="lazy"
                        className="max-w-full h-auto object-contain"
                    />
                </div>
                <div className="w-full flex justify-center bg-secondary/20 rounded-xl p-4 border border-slate-700/30">
                    <img 
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}${themeParams}`} 
                        alt="GitHub Streak" 
                        loading="lazy"
                        className="max-w-full h-auto object-contain"
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-center">
                <a 
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border border-accent/20 text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                >
                    View GitHub Profile &rarr;
                </a>
            </div>
        </motion.div>
    );
};

export default GitHubStats;
