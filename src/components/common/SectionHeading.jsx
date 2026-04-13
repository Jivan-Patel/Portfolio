import React from "react";

const SectionHeading = ({ title, accent, subtitle, className = "", align = "center" }) => {
    const headingAlignmentClass = align === "left" ? "text-left" : "text-center";
    const subtitleAlignmentClass = align === "left" ? "" : "mx-auto";

    return (
        <div className={`${headingAlignmentClass} mb-16 ${className}`.trim()}>
            <h2 className="text-3xl md:text-4xl font-bold text-main">
                {title} {accent && <span className="text-accent">{accent}</span>}
            </h2>
            {subtitle && (
                <p className={`mt-4 text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl ${subtitleAlignmentClass}`.trim()}>
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionHeading;
