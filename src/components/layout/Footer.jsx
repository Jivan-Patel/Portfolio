import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { contactData, heroData } from "../../data/content";

const Footer = () => {
    return (
        <footer className="bg-primary pt-10 pb-8 border-t border-slate-800 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                <div className="flex justify-center gap-6">
                    <a
                        href={contactData.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white text-2xl transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href={contactData.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white text-2xl transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href={contactData.social.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white text-2xl transition-colors"
                    >
                        <FaXTwitter />
                    </a>
                </div>

                <p className="text-slate-500 text-sm">
                    Designed & Built by {heroData.name}
                </p>
                <p className="text-slate-600 text-xs flex items-center justify-center gap-1">
                    Made with <FaHeart className="text-red-500" /> using React & Tailwind
                </p>
            </div>
        </footer>
    );
};

export default Footer;
