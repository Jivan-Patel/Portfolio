import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import LeetCodeStats from './LeetCodeStats';
import GitHubStats from './GitHubStats';

const CodingStats = () => {
    return (
        <SectionWrapper id="coding-activity" className="bg-secondary/20">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-main mb-4">
                    Coding <span className="text-accent">Activity</span>
                </h2>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
                    Tracking my problem-solving journey and coding consistency
                </p>
            </div>
            <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                <LeetCodeStats />
                <GitHubStats />
            </div>
        </SectionWrapper>
    );
};

export default CodingStats;
