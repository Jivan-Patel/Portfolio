import React, { useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import { heroData } from "../../data/content";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const buttonsRef = useRef(null);
    const blobRef = useRef(null);

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
                </div>
            </div>
        </section>
    );
};

export default Hero;
