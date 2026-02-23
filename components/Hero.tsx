"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { PremiumButton } from "./ui/PremiumButton";

export const Hero = () => {
    useEffect(() => {
        // @ts-expect-error - Ensure Unicorn Studio initializes for this specific component after mount
        if (typeof window !== "undefined" && window.UnicornStudio) {
            // @ts-expect-error
            window.UnicornStudio.init();
        }
    }, []);
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
            {/*
          Background glows to match Nexus site depth.
          Center Amber & Top Blue
        */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-[120px] opacity-40 w-[1000px] h-full bg-green-600/30 -z-10 rounded-full pointer-events-none" />
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-full bg-blue-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

            {/* Unicorn Studio Background Component */}
            <div
                className="aura-background-component -z-10 w-full top-0 bottom-0 absolute hue-rotate-150 saturate-200 h-[100vh]  pointer-events-none"
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



            <div className="container mx-auto max-w-6xl relative z-10 px-6">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8 backdrop-blur-md"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">The Era of Autonomy</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight max-w-5xl text-white leading-[1.05] mb-8"
                    >
                        Custom Agentic AI <br />
                        <span className="text-zinc-500 italic font-light tracking-tighter">for the Intelligent Core.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col gap-4 text-base md:text-lg text-zinc-400 font-medium max-w-2xl leading-relaxed mb-12"
                    >
                        <p>
                            We build autonomous systems that don't just process data—they reason, plan, and execute across your ecosystem. Transform passive tools into active partners.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-wrap items-center justify-center gap-6"
                    >
                        <PremiumButton variant="primary" size="md" showArrow>
                            Book a Strategy Call
                        </PremiumButton>
                        <PremiumButton variant="outline" size="md">
                            Technical Spec
                        </PremiumButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
