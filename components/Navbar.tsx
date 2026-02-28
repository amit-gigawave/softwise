"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

import { PremiumButton } from "./ui/PremiumButton";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Agentic AI", href: "/agentic-ai" },
    { name: "Solutions", href: "/solutions" },
    { name: "Why Us", href: "/why-us" },
];

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed flex z-50 w-full pt-4 md:pt-6 px-4 top-0 left-0 justify-center pointer-events-none">
            <nav className="shadow-black/50 flex md:gap-12 md:w-auto bg-black/60 w-full max-w-5xl rounded-full py-2 pl-6 pr-2 shadow-2xl backdrop-blur-xl gap-x-8 gap-y-8 items-center justify-between pointer-events-auto border border-white/10 relative">
                {/* Logo */}
                <Link href="/" className="text-base font-black text-primary tracking-tighter shrink-0 glow-primary">
                    Softwise.io
                </Link>

                {/* Desktop Nav Items */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-primary transition-colors text-sm font-medium text-secondary/60 tracking-wide"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4 shrink-0">

                    <Link
                        href="#"
                        className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full p-px relative items-center justify-center"
                    >
                        {/* Spinning Border Beam (Visible on hover) */}
                        <span className="animate-[spin_3s_linear_infinite] transition-opacity duration-300 group-hover:opacity-100 opacity-0 absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,transparent_50%,var(--primary)_100%)]" />

                        {/* Default Static Border */}
                        <span className="transition-opacity duration-300 group-hover:opacity-0 bg-zinc-800 rounded-full absolute inset-0" />

                        {/* Button Surface & Content */}
                        <span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-primary text-xs font-medium text-secondary/60 tracking-widest bg-linear-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full py-2.5 px-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                            <span className="uppercase">Request Demo</span>
                        </span>
                    </Link>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white hover:bg-white/5 rounded-full transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        className="absolute top-24 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:hidden shadow-2xl pointer-events-auto overflow-hidden z-50"
                    >
                        {/* Decorative background for mobile menu */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <div className="flex flex-col gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-[15px] font-medium text-secondary/60 hover:text-primary transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="h-px bg-white/5 my-2" />
                            <div className="flex flex-col gap-4">
                                <Link
                                    href="/contact"
                                    className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full p-px relative items-center justify-center"
                                >
                                    {/* Spinning Border Beam (Visible on hover) */}
                                    <span className="animate-[spin_3s_linear_infinite] transition-opacity duration-300 group-hover:opacity-100 opacity-0 absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,transparent_50%,#ffffff_100%)]" />

                                    {/* Default Static Border */}
                                    <span className="transition-opacity duration-300 group-hover:opacity-0 bg-zinc-800 rounded-full absolute inset-0" />

                                    {/* Button Surface & Content */}
                                    <span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white text-xs font-medium text-zinc-400 tracking-widest bg-linear-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full py-2.5 px-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                                        <span className="uppercase">Request Demo</span>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
