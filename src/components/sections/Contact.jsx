import React, { useState, useRef, useEffect } from "react";
import SectionWrapper from "../common/SectionWrapper";
import { contactData } from "../../data/content";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [state, handleSubmit] = useForm("mjgandke");
    const formRef = useRef(null);

    useGSAP(() => {
        gsap.from(formRef.current, {
            opacity: 0,
            x: 50,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: formRef.current,
                start: "top 80%",
                once: true
            }
        });
    }, { scope: formRef });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        if (state.succeeded) {
            setTimeout(() => setFormData({ name: "", email: "", message: "" }), 0);
        }
    }, [state.succeeded]);

    return (
        <SectionWrapper id="contact" className="bg-secondary/10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-main mb-16">
                Get In <span className="text-accent">Touch</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold text-main">Let's Talk</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                        I'm open to freelance opportunities and full-time roles.
                        If you have a project in mind or just want to say hi, feel free to reach out!
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent">
                                <FaEnvelope />
                            </div>
                            <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                        </div>
                        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent">
                                <FaPhone />
                            </div>
                            <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
                        </div>
                        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
                            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-accent">
                                <FaMapMarkerAlt />
                            </div>
                            <span>{contactData.address}</span>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/mjgandke"
                    method="POST"
                    className="bg-secondary/30 p-8 rounded-2xl border border-slate-700 shadow-xl"
                >
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-primary border border-slate-600 rounded-lg px-4 py-3 text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                placeholder="Enter Your Name"
                            />
                            <ValidationError prefix="Name" field="name" errors={state.errors} />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-primary border border-slate-600 rounded-lg px-4 py-3 text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                                placeholder="Enter Your Email"
                            />
                            <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-primary border border-slate-600 rounded-lg px-4 py-3 text-main focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                                placeholder="Enter your message here..."
                            ></textarea>
                            <ValidationError prefix="Message" field="message" errors={state.errors} />
                        </div>

                        <button
                            type="submit"
                            disabled={state.submitting}
                            className={`w-full py-3 rounded-lg font-bold text-primary transition-all duration-300 ${state.succeeded
                                ? "bg-green-500 hover:bg-green-600"
                                : "bg-accent hover:bg-accent/90"
                                }`}
                        >
                            {state.submitting ? "Sending..." : state.succeeded ? "Message Sent!" : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </SectionWrapper>
    );
};

export default Contact;

