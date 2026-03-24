import React from "react";
import SectionWrapper from "../common/SectionWrapper";
import { certificatesData } from "../../data/content";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useLoadMore } from "../../hooks/useLoadMore";
/* eslint-disable-next-line no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";

const Certificates = () => {
    const { visibleCount, handleLoadMore, hasMore } = useLoadMore(3, 3, certificatesData.length);
    const visibleCertificates = certificatesData.slice(0, visibleCount);

    return (
        <SectionWrapper id="certificates">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-main mb-16">
                Professional <span className="text-accent">Certifications</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <AnimatePresence mode="popLayout">
                    {visibleCertificates.map((cert) => (
                        <motion.div
                            key={cert.id}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="cert-card group bg-secondary/50 p-6 rounded-2xl border border-slate-700/50 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.1)] flex flex-col items-center text-center relative overflow-hidden h-full"
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

                            <p className="text-slate-400 text-xs mb-6 flex-grow">
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
                        Load More Certificates
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

export default Certificates;
