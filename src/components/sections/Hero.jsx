import React, { useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import { heroData } from "../../data/content";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
import { FaLinkedinIn, FaGithub, FaYoutube, FaXTwitter, FaDownload } from "react-icons/fa6";
import { SiLeetcode, SiSololearn } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const buttonsRef = useRef(null);
    const blobRef = useRef(null);
    const socialsRef = useRef(null);

    useGSAP(() => {
        // Entrance animations
        const tl = gsap.timeline();

        tl.from(contentRef.current.children, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        })
            .from(buttonsRef.current, {
                scale: 0.5,
                opacity: 0,
                duration: 0.8,
                ease: "back.out(1.7)"
            }, "-=0.5");

        // Parallax effects
        gsap.to(contentRef.current, {
            y: 150,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(buttonsRef.current, {
            y: 100,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        // Floating blob animation
        gsap.to(blobRef.current, {
            y: 30,
            x: 20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, { scope: heroRef });

    return (
        <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div ref={blobRef} className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 pt-20">
                <div ref={contentRef} className="space-y-10">
                    <h1 className="text-5xl md:text-7xl font-bold text-main tracking-tight">
                        {heroData.name}
                    </h1>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-500 dark:text-slate-400">
                        {heroData.role}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        {heroData.subheading}
                    </p>
                </div>

                <div
                    ref={buttonsRef}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="w-full sm:w-auto inline-block bg-accent text-primary font-bold px-10 py-4 rounded-full hover:bg-accent/90 transition-all shadow-lg hover:shadow-accent/50 cursor-pointer text-center"
                    >
                        View My Work
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="w-full sm:w-auto inline-block bg-transparent border-2 border-accent text-accent font-bold px-10 py-4 rounded-full hover:bg-accent hover:text-primary transition-all shadow-lg cursor-pointer text-center"
                    >
                        Contact Me
                    </Link>
                    <a
                        href="https://drive.google.com/file/d/15oqTGJwdIWqwDIfnhjtxeyANAh1j3yvO/view?usp=drive_link"
                        target="_blank"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-10 py-4 rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.8)] cursor-pointer text-center scale-100 hover:-translate-y-1 duration-300"
                    >
                        <FaDownload className="text-xl animate-bounce" />
                        View Resume
                    </a>
                </div>

                {/* Social Links */}
                <div
                    ref={socialsRef}
                    className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-12 pb-10"
                >
                    {[
                        { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/patel-jivan", name: "LinkedIn", color: "hover:text-[#0a66c2]" },
                        { icon: FaGithub, url: "https://github.com/Jivan-Patel", name: "GitHub", color: "hover:text-white" },
                        { icon: SiLeetcode, url: "https://leetcode.com/u/patel_jivan/", name: "LeetCode", color: "hover:text-[#ffa116]" },
                        { icon: FaYoutube, url: "https://www.youtube.com/@PatelJivan-07", name: "YouTube", color: "hover:text-[#ff0000]" },
                        { icon: FaXTwitter, url: "https://x.com/JivanPatel76913", name: "X", color: "hover:text-white" },
                        { icon: SiSololearn, url: "https://www.sololearn.com/en/profile/35598716", name: "SoloLearn", color: "text-[#1195aa]" },
                    ].map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative group p-3 sm:p-4 rounded-full bg-slate-800/50 text-slate-300 transition-all duration-300 hover:-translate-y-2 hover:bg-slate-800 hover:${item.color} shadow-lg hover:shadow-[0_0_15px_currentColor] border border-slate-700/50 hover:border-currentColor/50 flex items-center justify-center`}
                            >
                                <Icon className="text-xl sm:text-2xl" />
                                {/* Tooltip */}
                                <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs font-semibold py-1.5 px-3 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-slate-700">
                                    {item.name}
                                    {/* Tooltip Arrow */}
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45 border-b border-r border-slate-700"></span>
                                </span>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Hero;
