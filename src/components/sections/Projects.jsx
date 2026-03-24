import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import { projectsData } from "../../data/content";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLoadMore } from "../../hooks/useLoadMore";
/* eslint-disable-next-line no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
    const { visibleCount, handleLoadMore, hasMore } = useLoadMore(3, 3, projectsData.length);
    const visibleProjects = projectsData.slice(0, visibleCount);

    return (
        <SectionWrapper id="projects" className="bg-secondary/30">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-main mb-16">
                Featured <span className="text-accent">Projects</span>
            </h2>
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
                            className="bg-primary rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-accent/50 transition-colors group backdrop-blur-sm cursor-pointer flex flex-col h-full"
                        >
                            <div className="relative h-48 overflow-hidden shrink-0">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
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
                                <div className="flex gap-4 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-main transition-colors"
                                    >
                                        <FaGithub size={18} /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
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
                        className="px-8 py-3 rounded-full border-2 border-accent text-accent font-bold hover:bg-accent hover:text-primary transition-all duration-300 shadow-[0_0_15px_rgba(var(--accent-rgb),0.2)] hover:shadow-[0_0_25px_rgba(var(--accent-rgb),0.4)] hover:-translate-y-1"
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
