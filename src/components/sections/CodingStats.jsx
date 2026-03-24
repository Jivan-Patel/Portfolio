import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import LeetCodeStats from './LeetCodeStats';
import GitHubStats from './GitHubStats';

const CodingStats = () => {
    return (
        <SectionWrapper id="coding-activity" className="bg-secondary/20">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-main mb-16">
                Coding <span className="text-accent">Activity</span>
            </h2>
            <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                <LeetCodeStats />
                <GitHubStats />
            </div>
        </SectionWrapper>
    );
};

export default CodingStats;
