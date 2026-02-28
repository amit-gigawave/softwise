"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

import { PremiumButton } from "./ui/PremiumButton";
import { Magnetic } from "./ui/Magnetic";
import { SectionBadge } from "./ui/SectionBadge";
import Link from "next/link";

export const Hero = () => {
    useEffect(() => {
        // @ts-expect-error - Ensure Unicorn Studio initializes for this specific component after mount
        if (typeof window !== "undefined" && window.UnicornStudio) {
            // @ts-expect-error
            window.UnicornStudio.init();
        }
    }, []);
    return (

        <section id="home" className="relative flex min-h-screen items-center justify-center pt-24 md:pt-32 pb-12 md:pb-24 overflow-hidden">
            {/*
          Background glows to match Nexus site depth.
          Center Amber & Top Blue
        */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-[80px] md:blur-[120px] opacity-30 md:opacity-40 w-[600px] md:w-[1000px] h-full bg-green-600/20 md:bg-green-600/30 -z-10 rounded-full pointer-events-none" />
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-full bg-blue-500/10 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none" />

            {/* Unicorn Studio Background Component */}
            <div
                className="aura-background-component -z-10 w-full top-0 bottom-0 absolute hue-rotate-150 saturate-200 h-screen pointer-events-none opacity-50 md:opacity-100"
                data-alpha-mask="80"
                style={{
                    maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)',
                    WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'
                }}
            >
                <div className="aura-background-component hue-rotate-40 top-0 w-full -z-10 absolute h-full">
                    <div
                        data-us-project="HzcaAbRLaALMhHJp8gLY"
                        className="absolute w-full h-full left-0 top-0 -z-10"
                    ></div>
                </div>
            </div>

            <div className="container mx-auto max-w-6xl relative z-10 px-4 md:px-6">
                <div className="flex flex-col items-center text-center">
                    <SectionBadge text="The Era of Autonomy" />

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter max-w-5xl text-primary leading-none md:leading-[0.95] mb-8 md:mb-10 glow-primary"
                    >
                        Custom Agentic AI <br />
                        <span className="italic-accent text-secondary/60 font-light text-3xl md:text-5xl glow-secondary">for the Intelligent Core.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col gap-4 text-sm sm:text-lg md:text-xl text-secondary/80 font-medium max-w-2xl leading-relaxed mb-12 md:mb-16"
                    >
                        <p className="px-4">
                            We build autonomous systems that don't just process data—they reason, plan, and execute across your ecosystem. Transform passive tools into active partners.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto"
                    >
                        <Link
                            href="#"
                            className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full p-px relative items-center justify-center"
                        >
                            {/* Spinning Border Beam (Visible on hover) */}
                            <span className="animate-[spin_3s_linear_infinite] transition-opacity duration-300 group-hover:opacity-100 opacity-0 absolute -inset-full bg-[conic-gradient(from_90deg_at_50%_50%,transparent_50%,white_100%)]" />

                            {/* Default Static Border */}
                            <span className="transition-opacity duration-300 group-hover:opacity-0 bg-zinc-800 rounded-full absolute inset-0" />

                            {/* Button Surface & Content */}
                            <span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-primary text-xs font-medium text-secondary/60 tracking-widest bg-linear-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full py-2.5 px-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
                                <span className="uppercase">Book a Strategy Call</span>
                            </span>
                        </Link>

                        {/* <div className="w-full sm:w-auto px-4 sm:px-0">
                            <PremiumButton variant="primary" size="md" showArrow className="w-full sm:w-auto justify-center">
                                Book a Strategy Call
                            </PremiumButton>
                        </div> */}
                        {/* <Magnetic>
                            </Magnetic> */}

                    </motion.div>
                </div>
            </div>
        </section>

    );
};

