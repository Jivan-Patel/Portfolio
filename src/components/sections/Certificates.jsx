import React, { useRef } from "react";
import SectionWrapper from "../common/SectionWrapper";
import { certificatesData } from "../../data/content";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const Certificates = () => {
    return (
        <SectionWrapper id="certificates">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-main mb-16">
                Professional <span className="text-accent">Certifications</span>
            </h2>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {certificatesData.map((cert) => (
                    <div
                        key={cert.id}
                        className="cert-card group bg-secondary/50 p-6 rounded-2xl border border-slate-700/50 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.1)] flex flex-col items-center text-center relative overflow-hidden"
                    >
                        {/* Decorative background element */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-accent/5 rounded-full group-hover:bg-accent/10 transition-colors" />

                        <div className="text-4xl text-accent mb-4 group-hover:scale-110 transition-transform duration-300">
                            <HiOutlineBadgeCheck />
                        </div>

                        <h3 className="text-xl font-bold text-main mb-2 tracking-tight">
                            {cert.title}
                        </h3>

                        <p className="text-accent text-sm font-medium mb-1">
                            {cert.issuer}
                        </p>

                        <p className="text-slate-400 text-xs mb-6">
                            Issued: {cert.date}
                        </p>

                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto px-6 py-2 rounded-full border border-accent/20 text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-300"
                        >
                            View Certificate
                        </a>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certificates;
