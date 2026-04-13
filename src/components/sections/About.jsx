import React, { useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import SectionHeading from "../common/SectionHeading";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {
    const imageRef = useRef(null);

    useGSAP(() => {
        const image = imageRef.current;
        if (!image) return;

        const onEnter = () => gsap.to(image, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        const onLeave = () => gsap.to(image, { scale: 1, duration: 0.3, ease: "power2.out" });

        image.addEventListener("mouseenter", onEnter);
        image.addEventListener("mouseleave", onLeave);

        return () => {
            image.removeEventListener("mouseenter", onEnter);
            image.removeEventListener("mouseleave", onLeave);
        };
    }, { scope: imageRef });

    return (
        <SectionWrapper id="about" className="bg-secondary/30">
            <SectionHeading title="About" accent="Me" />
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="space-y-6 text-section-content">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        I am a passionate software engineer with a strong foundation in building scalable web applications.
                        My journey involves exploring various technologies and frameworks to create intuitive and dynamic user experiences.
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        When I'm not coding, you can find me exploring new tech trends, contributing to open source, or enjoying a good cup of coffee.
                        I believe in writing clean, maintainable code and dealing with complex problems.
                    </p>
                </div>
                <div className="flex justify-center">
                    <div
                        ref={imageRef}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-accent/20 group cursor-pointer"
                    >
                        <div className="absolute inset-0 bg-transparent group-hover:bg-accent/10 transition-colors duration-300 z-10" />
                        <img
                            src="https://res.cloudinary.com/dkohpqbdj/image/upload/v1770397905/profile_v8f3pg.png"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
