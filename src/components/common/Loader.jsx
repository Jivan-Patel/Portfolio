import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroData } from "../../data/content";

const Loader = ({ onFinished }) => {
    const containerRef = useRef(null);
    const [displayText, setDisplayText] = useState("");
    const name = heroData.loaderName || heroData.name;

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                // Fade out the entire container
                gsap.to(containerRef.current, {
                    opacity: 0,
                    duration: 0.8,
                    delay: 0.5,
                    ease: "power2.inOut",
                    onComplete: onFinished,
                });
            },
        });

        // Typing animation
        const obj = { charIndex: 0 };
        tl.to(obj, {
            charIndex: name.length,
            duration: name.length * 0.08,
            ease: "none",
            onUpdate: () => {
                setDisplayText(name.substring(0, Math.floor(obj.charIndex)));
            },
        }, 0.5); // Start after a small delay

    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] font-mono"
        >
            <div className="w-full max-w-2xl px-6">
                <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm">
                    <span className="w-3 h-3 rounded-full bg-red-500/50" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <span className="w-3 h-3 rounded-full bg-green-500/50" />
                    <span className="ml-2">terminal — {heroData.name.toLowerCase().replace(/\s+/g, '-')}</span>
                </div>

                <div className="text-xl md:text-3xl lg:text-4xl text-white whitespace-nowrap flex items-center">
                    <span className="text-green-500 shrink-0">visitor@portfolio:</span>
                    <span className="text-blue-400 ml-2 shrink-0">~</span>
                    <span className="text-white ml-2 shrink-0">$ </span>
                    <span className="text-accent ml-2">{displayText}</span>
                    <span className="inline-block w-[0.6em] h-[1em] bg-accent ml-1 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default Loader;
