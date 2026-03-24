import React, { useState, useEffect, useRef } from 'react';
import { SiLeetcode } from 'react-icons/si';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LeetCodeStats = () => {
    const username = "patel_jivan";
    const [stats, setStats] = useState({
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const containerRef = useRef(null);
    const totalRef = useRef(null);
    const easyRef = useRef(null);
    const mediumRef = useRef(null);
    const hardRef = useRef(null);

    useEffect(() => {
        const fetchLeetCodeData = async () => {
            const query = `
                query getUserProfile($username: String!) {
                  matchedUser(username: $username) {
                    submitStats: submitStatsGlobal {
                      acSubmissionNum {
                        difficulty
                        count
                      }
                    }
                  }
                }
            `;

            try {
                const response = await fetch('/api/leetcode', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query, variables: { username } })
                });
                
                if (!response.ok) throw new Error("API Error");

                const result = await response.json();
                
                if (result.errors || !result.data || !result.data.matchedUser) {
                    throw new Error("User not found or GraphQL error");
                }

                const submissions = result.data.matchedUser.submitStats.acSubmissionNum;
                let parsedStats = { totalSolved: 0, easySolved: 0, mediumSolved: 0, hardSolved: 0 };
                
                submissions.forEach(sub => {
                    if (sub.difficulty === "All") parsedStats.totalSolved = sub.count;
                    if (sub.difficulty === "Easy") parsedStats.easySolved = sub.count;
                    if (sub.difficulty === "Medium") parsedStats.mediumSolved = sub.count;
                    if (sub.difficulty === "Hard") parsedStats.hardSolved = sub.count;
                });

                setStats(parsedStats);
                setError(false);
            } catch (err) {
                console.error("LeetCode Stats Error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchLeetCodeData();
    }, [username]);

    useGSAP(() => {
        gsap.fromTo(containerRef.current, 
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: containerRef.current, start: 'top 85%' } }
        );

        if (!loading && !error && stats.totalSolved > 0) {
            const animateCount = (ref, targetValue) => {
                if (!ref.current) return;
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: targetValue,
                    duration: 1.5,
                    ease: 'power2.out',
                    scrollTrigger: { trigger: containerRef.current, start: 'top 85%', once: true },
                    onUpdate: () => { ref.current.innerText = Math.floor(obj.val); }
                });
            };

            animateCount(totalRef, stats.totalSolved);
            animateCount(easyRef, stats.easySolved);
            animateCount(mediumRef, stats.mediumSolved);
            animateCount(hardRef, stats.hardSolved);
        }
    }, { scope: containerRef, dependencies: [loading, error, stats] });

    return (
        <div 
            ref={containerRef}
            className="bg-primary rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-accent/40 shadow-lg hover:shadow-2xl transition-all duration-300 relative w-full"
        >
            <div className="flex items-center gap-3 mb-6 relative z-10 w-full">
                <SiLeetcode className="text-3xl text-yellow-500" />
                <h3 className="text-2xl font-bold text-main">LeetCode Activity</h3>
            </div>

            <div className="relative z-10 w-full">
                {loading && <div className="text-slate-400 text-center py-8 animate-pulse font-medium">Loading LeetCode stats...</div>}
                
                {error && !loading && (
                    <div className="text-red-400 text-center py-6 bg-red-400/10 rounded-xl font-medium border border-red-500/20">
                        Unable to load LeetCode stats
                    </div>
                )}

                {!loading && !error && (
                    <div className="space-y-8 w-full block">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                            <div className="bg-secondary/40 p-4 rounded-xl flex flex-col items-center justify-center col-span-2 md:col-span-1 border border-slate-700/30 shadow-inner hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                                <p className="text-slate-400 text-sm mb-1 uppercase tracking-wider font-semibold">Total Solved</p>
                                <p className="text-4xl md:text-5xl font-black text-main mt-1" ref={totalRef}>0</p>
                            </div>
                            <div className="bg-secondary/40 p-4 rounded-xl flex flex-col items-center justify-center border border-slate-700/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                                <p className="text-green-400 text-xs md:text-sm uppercase tracking-wide mb-1 font-semibold">Easy</p>
                                <p className="text-xl md:text-2xl font-bold text-green-400 mt-1" ref={easyRef}>0</p>
                            </div>
                            <div className="bg-secondary/40 p-4 rounded-xl flex flex-col items-center justify-center border border-slate-700/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                                <p className="text-yellow-400 text-xs md:text-sm uppercase tracking-wide mb-1 font-semibold">Medium</p>
                                <p className="text-xl md:text-2xl font-bold text-yellow-500 mt-1" ref={mediumRef}>0</p>
                            </div>
                            <div className="bg-secondary/40 p-4 rounded-xl flex flex-col items-center justify-center border border-slate-700/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                                <p className="text-red-400 text-xs md:text-sm uppercase tracking-wide mb-1 font-semibold">Hard</p>
                                <p className="text-xl md:text-2xl font-bold text-red-500 mt-1" ref={hardRef}>0</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-8 flex justify-center relative z-10 w-full">
                <a 
                    href={`https://leetcode.com/u/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-white px-5 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
                >
                    View LeetCode Profile &rarr;
                </a>
            </div>
        </div>
    );
};

export default LeetCodeStats;
