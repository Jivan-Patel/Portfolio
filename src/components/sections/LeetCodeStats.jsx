import React, { useState, useEffect } from 'react';
/* eslint-disable-next-line no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import { SiLeetcode } from 'react-icons/si';

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
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        query,
                        variables: { username }
                    })
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
            } catch (err) {
                console.error("LeetCode GraphQL Error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchLeetCodeData();
    }, [username]);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-6 md:p-8 border border-slate-700/50 hover:border-accent/40 shadow-xl"
        >
            <div className="flex items-center gap-3 mb-6">
                <SiLeetcode className="text-3xl text-yellow-500" />
                <h3 className="text-2xl font-bold text-main">LeetCode Activity</h3>
            </div>

            {loading && <div className="text-slate-400 text-center py-8 animate-pulse">Loading LeetCode stats...</div>}
            
            {error && !loading && (
                <div className="text-red-400 text-center py-4 bg-red-400/10 rounded-lg">
                    Unable to load LeetCode stats
                </div>
            )}

            {!loading && !error && (
                <div className="space-y-8">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-secondary/40 p-4 rounded-xl text-center">
                            <p className="text-slate-400 text-sm mb-1">Total Solved</p>
                            <p className="text-2xl font-bold text-main">{stats.totalSolved}</p>
                        </div>
                        <div className="bg-secondary/40 p-4 rounded-xl text-center">
                            <p className="text-green-400 text-sm mb-1">Easy</p>
                            <p className="text-2xl font-bold text-green-400">{stats.easySolved}</p>
                        </div>
                        <div className="bg-secondary/40 p-4 rounded-xl text-center">
                            <p className="text-yellow-400 text-sm mb-1">Medium</p>
                            <p className="text-2xl font-bold text-yellow-500">{stats.mediumSolved}</p>
                        </div>
                        <div className="bg-secondary/40 p-4 rounded-xl text-center">
                            <p className="text-red-400 text-sm mb-1">Hard</p>
                            <p className="text-2xl font-bold text-red-500">{stats.hardSolved}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-8 flex justify-center">
                <a 
                    href={`https://leetcode.com/u/${username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-full border border-accent/20 text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                >
                    View LeetCode Profile &rarr;
                </a>
            </div>
        </motion.div>
    );
};

export default LeetCodeStats;
