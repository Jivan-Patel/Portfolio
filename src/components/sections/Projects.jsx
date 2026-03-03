import React, { useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import { projectsData } from "../../data/content";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const cards = containerRef.current.querySelectorAll(".project-card");

        // Entrance animation
        gsap.from(cards, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                once: true
            }
        });

        // Hover animations
        cards.forEach((card) => {
            const onEnter = () => gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" });
            const onLeave = () => gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });

            card.addEventListener("mouseenter", onEnter);
            card.addEventListener("mouseleave", onLeave);
        });
    }, { scope: containerRef });

    return (
        <SectionWrapper id="projects" className="bg-secondary/30">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-main mb-16">
                Featured <span className="text-accent">Projects</span>
            </h2>
            <div
                ref={containerRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="project-card bg-primary rounded-xl overflow-hidden shadow-lg border border-slate-700 hover:border-accent/50 transition-colors group backdrop-blur-sm cursor-pointer"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-main mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3 text-sm">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tag) => (
                                    <span key={tag} className="text-xs font-semibold px-2 py-1 bg-secondary text-accent rounded-full border border-accent/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
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
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
