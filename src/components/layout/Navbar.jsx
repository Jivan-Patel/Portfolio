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
    { name: "Certificates", to: "certificates" },
    { name: "Coding Activity", to: "coding-activity" },
<<<<<<< HEAD
    { name: "Education", to: "education" },
=======
>>>>>>> ddcfcac (Replacing Youtube section with Coding Activity/ stats)
    { name: "Contact", to: "contact" },
];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);

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
                            <Link to="hero" smooth={true} duration={500}>
                                Patel.Jivan
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        className="cursor-pointer hover:text-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
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
                        <div className="-mr-2 flex md:hidden gap-4">
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
                className={`fixed inset-0 z-50 w-full h-screen bg-[#0b1a2b]/95 backdrop-blur-md transition-transform duration-300 md:hidden flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
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
                
                <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 text-2xl pb-20">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
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
