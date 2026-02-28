"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, BarChart2, CheckCircle2, Cpu, Database, Network, Shield, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import ChipBg from "./ChipBg";
import { SectionBadge } from "./ui/SectionBadge";

const steps = [
    {
        number: "01",
        title: "Discovery & Workflow Mapping",
        description: "Deep-dive analysis of operational bottlenecks to map precise decision points where autonomous agents deliver maximum ROI.",
        details: ["Stakeholder Alignment", "BPMN Mapping", "Feasibility Audit"],
        icon: <Search className="w-5 h-5" />,
        color: "from-primary/20 to-primary/0",
        iconColor: "text-primary"
    },
    {
        number: "02",
        title: "Agentic Architecture Design",
        description: "Defining the cognitive stack: selecting LLM backbones, structuring vector memory, and architecting stateful tool-use loops.",
        details: ["Memory Selection", "Model Fine-tuning", "State Orchestration"],
        icon: <Workflow className="w-5 h-5" />,
        color: "from-secondary/20 to-secondary/0",
        iconColor: "text-secondary"
    },
    {
        number: "03",
        title: "Logic Engineering & Guardrails",
        description: "Constructing robust reasoning loops and deterministic safety layers to ensure predictable behavior in high-stakes environments.",
        details: ["Cognitive Design", "Safety Protocols", "Recursive Evaluation"],
        icon: <Code2 className="w-5 h-5" />,
        color: "from-primary/20 to-primary/0",
        iconColor: "text-primary"
    },
    {
        number: "04",
        title: "Enterprise Orchestration",
        description: "Bridges the gap between AI and infrastructure. Deploying agents into production with secure API and database integrations.",
        details: ["Secure Tooling", "Database Hooking", "Real-time Scaling"],
        icon: <Network className="w-5 h-5" />,
        color: "from-secondary/20 to-secondary/0",
        iconColor: "text-secondary"
    },
    {
        number: "05",
        title: "Closed-Loop Observability",
        description: "Establishing end-to-end monitoring to track reasoning accuracy, latency, and continuous model refinement post-launch.",
        details: ["Latency Tracking", "Hallucination Defense", "Iterative Refinement"],
        icon: <BarChart2 className="w-5 h-5" />,
        color: "from-primary/20 to-primary/0",
        iconColor: "text-primary"
    }
];


export const HowWeBuild = () => {
    return (
        <section id="how-we-build" className="relative py-12 md:py-32 overflow-hidden bg-transparent">
            {/* <ChipBg /> */}
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
                <div className="flex flex-col items-center text-center mb-16 md:mb-24 max-w-3xl mx-auto">
                    <SectionBadge text="Our Methodology" icon={Shield} />


                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-6 leading-[1.1] glow-primary"
                    >
                        From Concept to <br />
                        <span className="italic-accent text-secondary/60 font-light glow-secondary">Production Agency</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-base md:text-lg text-secondary/80 font-medium leading-relaxed max-w-2xl"
                    >
                        We translate complex business requirements into robust, self-correcting agentic systems with a rigorous, engineering-first approach.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Vertical Connecting Line with Pulse */}
                    <div className="absolute left-[31px] md:left-[47px] top-6 bottom-6 w-px bg-zinc-800 hidden sm:block">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="bg-linear-to-b from-primary/50 via-primary/30 to-secondary/50 w-full"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-primary blur-sm animate-[pulse-line_4s_infinite]" />
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-8 md:gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group"
                            >
                                {/* Step Indicator */}
                                <div className="shrink-0 relative z-20">
                                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-3xl md:rounded-4xl bg-zinc-950 border border-white/10 flex items-center justify-center backdrop-blur-3xl shadow-2xl group-hover:border-primary/30 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 overflow-hidden">
                                        <div className={cn("absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-700", step.color)} />
                                        <div className="flex flex-col items-center gap-1 relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                                            <span className="text-[8px] md:text-[9px] font-mono text-secondary/60 group-hover:text-secondary tracking-[0.2em] font-bold">PHASE</span>
                                            <span className="text-lg md:text-2xl font-black text-primary tracking-tighter italic">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Hovering Icon Indicator */}
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 12 }}
                                        className={cn(
                                            "absolute -top-1 -right-1 p-1.5 rounded-xl bg-zinc-950 border border-white/10 shadow-2xl transition-all duration-500 z-30",
                                            step.iconColor
                                        )}
                                    >
                                        {step.icon}
                                    </motion.div>
                                </div>

                                <div className="flex-1 bg-zinc-950/40 backdrop-blur-3xl border border-white/5 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 group-hover:bg-zinc-900/40 group-hover:border-primary/20 transition-all duration-700 relative overflow-hidden">
                                    <div className={cn("absolute top-0 right-0 w-64 h-64 bg-linear-to-bl blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000", step.color)} />

                                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 md:gap-8">
                                        <div className="max-w-2xl">
                                            <h3 className="text-xl md:text-2xl font-black text-primary mb-3 tracking-tighter group-hover:text-primary transition-colors duration-500">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-secondary/80 leading-relaxed font-medium mb-6">
                                                {step.description}
                                            </p>

                                            {/* Sub-steps / Technical Details */}
                                            <div className="flex flex-wrap gap-2 md:gap-2.5">
                                                {step.details.map((detail, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest text-secondary/80 transition-colors hover:border-primary/30 hover:bg-primary/5 group/detail"
                                                    >
                                                        <div className="w-1 h-1 rounded-full bg-primary" />
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="shrink-0 hidden lg:block opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
                                            <div className="w-px h-16 bg-linear-to-b from-transparent via-white/10 to-transparent" />
                                        </div>

                                        <div className="shrink-0 hidden lg:block group-hover:scale-110 transition-transform duration-700">
                                            <div className="p-5 rounded-full bg-white/2 border border-white/5 backdrop-blur-2xl">
                                                <CheckCircle2 className="w-6 h-6 text-primary/20 group-hover:text-primary/80 transition-colors duration-700" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse-line {
                    0%, 100% { top: 0%; opacity: 0; }
                    50% { top: 50%; opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>

        </section>
    );
};
