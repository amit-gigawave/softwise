"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, ArrowUpRight, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "./ui/Magnetic";

const footerLinks = [
    {
        title: "Platform",
        links: [
            { name: "Agentic AI", href: "/agentic-ai" },
            { name: "Solutions", href: "/solutions" },
            { name: "How it Works", href: "/process" },
            { name: "Use Cases", href: "/use-cases" },
        ],
    },

];

const socialLinks = [
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "GitHub", href: "#", icon: Github },
];
export const Footer = () => {
    return (
        <footer className="relative bg-black border-t border-white/5 pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden">
            {/* Background Aesthetic Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/3 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 translate-x-1/2 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-secondary/2 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">

                    {/* Brand & Mission Column */}
                    <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
                        <div className="flex flex-col gap-4">
                            <Magnetic strength={0.2}>
                                <Link href="/" className="flex items-center gap-3 group w-fit">
                                    <div className="w-10 h-10 rounded-xl bg-white/3 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500 shadow-2xl">
                                        <Cpu className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <span className="text-xl md:text-2xl font-black tracking-tighter text-primary glow-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                                        Softwise<span className="text-secondary glow-secondary">.</span>io
                                    </span>
                                </Link>
                            </Magnetic>
                            <p className="text-secondary/80 text-base leading-relaxed max-w-md font-medium">
                                Engineering autonomous intelligence for the modern enterprise. We bridge the gap between complex workflows and seamless AI execution.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            {socialLinks.map((social) => (
                                <Magnetic key={social.name} strength={0.4}>
                                    <Link
                                        key={social.name}
                                        href={social.href}
                                        className="w-10 h-10 rounded-full bg-white/3 border border-white/10 flex items-center justify-center text-secondary/60 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-500 group"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    </Link>
                                </Magnetic>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-7 grid mx-auto gap-10 md:gap-4 lg:gap-4">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="flex flex-col gap-5 md:gap-6">
                                <h3 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] text-secondary/60 flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-primary/40" />
                                    {section.title}
                                </h3>
                                <ul className="flex flex-col gap-3 md:gap-4">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center gap-1.5 text-[13px] md:text-[14px] font-medium text-secondary/80 hover:text-primary transition-all duration-300 w-fit"
                                            >
                                                <span>{link.name}</span>
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-y-0.5 translate-x-0 transition-all duration-300 text-primary" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 md:pt-10 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full md:w-auto">
                        <p className="text-[12px] md:text-[13px] text-secondary/60 font-medium">
                            © {new Date().getFullYear()} Softwise.io. All rights reserved.
                        </p>
                        <div className="hidden md:block w-px h-4 bg-white/5" />
                        <div className="flex items-center gap-6">
                        </div>
                    </div>

                </div>
            </div>

            {/* Subtle Gradient Hint at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-primary/2 to-transparent pointer-events-none" />
        </footer>
    );
};

