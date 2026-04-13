import React from 'react';
import SectionWrapper from '../common/SectionWrapper';
import SectionHeading from '../common/SectionHeading';
import LeetCodeStats from './LeetCodeStats';
import GitHubStats from './GitHubStats';

const CodingStats = () => {
    return (
        <SectionWrapper id="coding-activity" className="bg-secondary/20">
            <SectionHeading
                title="Coding"
                accent="Activity"
                subtitle="Tracking my problem-solving journey and coding consistency"
            />
            <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                <LeetCodeStats />
                <GitHubStats />
            </div>
        </SectionWrapper>
    );
};

export default CodingStats;
