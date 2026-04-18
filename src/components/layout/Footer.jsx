import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { contactData, heroData } from "../../data/content";

const Footer = () => {
    return (
        <footer className="bg-primary pt-10 pb-8 border-t border-main/15 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src="/Logo.png" alt="Patel Jivan" className="h-20 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity sm:h-24" />
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                    <a
                        href={contactData.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-main/60 hover:text-accent text-2xl transition-colors"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href={contactData.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-main/60 hover:text-accent text-2xl transition-colors"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href={contactData.social.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-main/60 hover:text-accent text-2xl transition-colors"
                    >
                        <FaXTwitter />
                    </a>
                </div>

                <p className="text-main/60 text-sm">
                    Designed & Built by {heroData.name}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
