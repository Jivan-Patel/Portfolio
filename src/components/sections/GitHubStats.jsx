import React, { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GitHubStats = () => {
    const containerRef = useRef(null);
    const themeParams = "&theme=transparent&hide_border=true&title_color=38bdf8&text_color=94a3b8&icon_color=38bdf8&text_bold=false";
    const username = "Jivan-Patel";

    useGSAP(() => {
        gsap.fromTo(containerRef.current, 
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
        );
        
        gsap.fromTo(".github-card", 
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power2.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
        );
    }, { scope: containerRef });

    return (
        <div 
            ref={containerRef}
            className="bg-primary rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-accent/40 shadow-lg hover:shadow-2xl transition-all duration-300 relative"
        >
            <div className="flex items-center gap-3 mb-6">
                <FaGithub className="text-3xl text-accent" />
                <h3 className="text-2xl font-bold text-main">GitHub Stats</h3>
            </div>
            
            <div className="flex flex-col gap-6 relative z-10 w-full">
                <div className="github-card w-full flex justify-center bg-white/5 dark:bg-slate-800/50 rounded-2xl p-4 md:p-6 border border-slate-700 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                    <img 
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}${themeParams}`} 
                        alt="GitHub Streak" 
                        loading="lazy"
                        className="max-w-full h-auto object-contain"
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-center relative z-10">
                <a 
                    href={`https://github.com/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
                >
                    View GitHub Profile &rarr;
                </a>
            </div>
        </div>
    );
};

export default GitHubStats;
