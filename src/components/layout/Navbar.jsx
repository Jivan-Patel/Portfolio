import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Hackathons", to: "hackathons" },
    { name: "Certificates", to: "certificates" },
    { name: "Coding Activity", to: "coding-activity" },
    { name: "YouTube", to: "youtube" },
    { name: "Contact", to: "contact" },
];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

    // Ensure mobile menu closes when moving to large desktop widths.
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280 && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    // Lock background scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-0 w-full z-40 transition-colors duration-300 bg-primary/80 backdrop-blur-md shadow-lg"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0 cursor-pointer text-2xl font-bold text-accent">
                            <Link to="hero" smooth={true} duration={500} onClick={() => window.dispatchEvent(new Event('closeModals'))}>
                                Patel.Jivan
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden xl:block">
                            <div className="ml-8 flex items-center space-x-2 2xl:space-x-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        onClick={() => window.dispatchEvent(new Event('closeModals'))}
                                        className="cursor-pointer hover:text-accent px-2 py-2 rounded-md text-sm 2xl:text-base font-medium transition-colors whitespace-nowrap"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <button
                                    onClick={toggleTheme}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"
                                    aria-label="Toggle Theme"
                                >
                                    {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-300" />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Toggles */}
                        <div className="-mr-2 flex xl:hidden gap-3 sm:gap-4">
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                            >
                                {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700 dark:text-slate-300" />}
                            </button>
                            <button
                                onClick={() => setIsOpen(true)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                                aria-label="Open main menu"
                            >
                                <FaBars size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <div 
                className={`fixed inset-0 z-50 w-full h-screen bg-[#0b1a2b]/95 backdrop-blur-md transition-transform duration-300 xl:hidden flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-between items-center p-6 w-full">
                    <div className="text-2xl font-bold text-accent">
                        Patel.Jivan
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-400 hover:text-white focus:outline-none transition-colors"
                        aria-label="Close menu"
                    >
                        <FaTimes size={28} />
                    </button>
                </div>
                
                <div className="flex flex-1 flex-col items-center justify-start gap-5 px-6 pt-4 pb-10 text-xl sm:text-2xl overflow-y-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            onClick={() => {
                                setIsOpen(false);
                                window.dispatchEvent(new Event('closeModals'));
                            }}
                            className="block cursor-pointer text-slate-200 hover:text-accent hover:scale-110 transition-all duration-300 font-semibold tracking-wide"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
