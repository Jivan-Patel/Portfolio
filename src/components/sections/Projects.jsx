import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import SectionHeading from "../common/SectionHeading";
import { projectsData } from "../../data/content";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import { useLoadMore } from "../../hooks/useLoadMore";
/* eslint-disable-next-line no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
    const { visibleCount, handleLoadMore, hasMore } = useLoadMore(3, 3, projectsData.length);
    const visibleProjects = projectsData.slice(0, visibleCount);

    return (
        <SectionWrapper id="projects" className="bg-secondary/30">
            <SectionHeading title="Featured" accent="Projects" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <AnimatePresence mode="popLayout">
                    {visibleProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="bg-primary rounded-xl overflow-hidden shadow-lg border border-main/15 hover:border-accent/50 transition-colors group cursor-pointer flex flex-col h-full"
                        >
                            <div className="relative h-48 overflow-hidden shrink-0">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover filter-none transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 flex flex-col grow">
                                <h3 className="text-xl font-bold text-main mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tag) => (
                                        <span key={tag} className="text-xs font-semibold px-2 py-1 bg-secondary text-accent rounded-full border border-accent/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap gap-3 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-main/15 bg-secondary/40 text-sm font-medium text-slate-700 dark:text-slate-200 hover:border-accent/40 hover:text-main hover:bg-secondary transition-all duration-300"
                                    >
                                        <FaGithub size={18} /> Code
                                    </a>
                                    {project.youtube && (
                                        <a
                                            href={project.youtube}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-red-600/20 bg-red-600/10 text-sm font-medium text-red-600 hover:border-red-600/40 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm shadow-red-600/10 hover:shadow-red-600/20"
                                            aria-label={`Watch ${project.title} project video on YouTube`}
                                        >
                                            <FaYoutube size={18} /> Video
                                        </a>
                                    )}
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-accent/25 bg-accent/10 text-sm font-medium text-accent hover:border-accent/50 hover:bg-accent hover:text-onaccent transition-all duration-300"
                                    >
                                        <FaExternalLinkAlt size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Load More Button or End Message */}
            <div className="flex justify-center mt-8">
                {hasMore ? (
                    <button
                        onClick={handleLoadMore}
                        className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent hover:text-onaccent transition-all duration-300 shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)] hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-1"
                    >
                        Load More Projects
                    </button>
                ) : (
                    <p className="text-slate-500 italic text-sm">
                        You've reached the end of the list.
                    </p>
                )}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
