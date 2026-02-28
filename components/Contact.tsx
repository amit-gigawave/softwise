"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PremiumButton } from "./ui/PremiumButton";
import { Magnetic } from "./ui/Magnetic";


export const Contact = () => {
    return (
        <section id="contact" className="relative py-12 md:py-32 overflow-hidden border-t border-white/5 bg-[#050505]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none opacity-50" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[600px] bg-blue-900/10 blur-[100px] md:blur-[150px] rounded-full -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center glass rounded-4xl md:rounded-[3rem] p-8 sm:p-12 md:p-20 border border-white/10 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />

                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl tracking-tighter text-primary mb-6 leading-[1.1] relative z-10 font-black glow-primary"
                    >
                        Let's Build Your <br />
                        <span className="italic-accent text-secondary/60 font-light glow-secondary">AI Workflow</span>
                    </h2>

                    <p className="text-base md:text-lg text-secondary/80 font-medium leading-relaxed mb-8 md:mb-12 max-w-2xl relative z-10">
                        Transform your operational bottlenecks into intelligent, automated systems. Let's discuss exactly how an agentic architecture can deliver ROI for your team.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8 md:mb-12 text-secondary relative z-10 font-medium w-full">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span className="text-sm">No obligation</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span className="text-sm">Strategy session</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span className="text-sm">Clear next steps</span>
                        </div>
                    </div>

                    <div className="relative z-10 w-full flex justify-center">
                        <Magnetic>
                            <PremiumButton variant="primary" size="lg" showArrow className="w-full sm:w-auto justify-center">
                                Start Your Project
                            </PremiumButton>
                        </Magnetic>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

