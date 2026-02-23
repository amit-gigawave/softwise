"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PremiumButton } from "./ui/PremiumButton";

export const Contact = () => {
    return (
        <section id="contact" className="relative py-32 overflow-hidden border-t border-white/5 bg-[#050505]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center glass rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />

                    <h2
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight relative z-10"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Let's Build Your AI Workflow
                    </h2>

                    <p className="text-lg text-zinc-400 font-medium leading-relaxed mb-12 max-w-2xl relative z-10">
                        Transform your operational bottlenecks into intelligent, automated systems. Let's discuss exactly how an agentic architecture can deliver ROI for your team.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-12 text-zinc-300 relative z-10 font-medium">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span>No obligation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span>Strategy-focused discussion</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                            <span>Clear next steps</span>
                        </div>
                    </div>

                    <PremiumButton variant="primary" size="lg" showArrow className="relative z-10">
                        Start Your AI Project
                    </PremiumButton>
                </motion.div>
            </div>
        </section>
    );
};
