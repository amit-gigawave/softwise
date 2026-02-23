"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, BarChart2, CheckCircle2, Cpu, Database, Network, Shield, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";
import ChipBg from "./ChipBg";

const steps = [
    {
        number: "01",
        title: "Discovery & Workflow Mapping",
        description: "Deep-dive analysis of operational bottlenecks to map precise decision points where autonomous agents deliver maximum ROI.",
        details: ["Stakeholder Alignment", "BPMN Mapping", "Feasibility Audit"],
        icon: <Search className="w-5 h-5" />,
        color: "from-emerald-500/20 to-emerald-500/0",
        iconColor: "text-emerald-400"
    },
    {
        number: "02",
        title: "Agentic Architecture Design",
        description: "Defining the cognitive stack: selecting LLM backbones, structuring vector memory, and architecting stateful tool-use loops.",
        details: ["Memory Selection", "Model Fine-tuning", "State Orchestration"],
        icon: <Workflow className="w-5 h-5" />,
        color: "from-blue-500/20 to-blue-500/0",
        iconColor: "text-blue-400"
    },
    {
        number: "03",
        title: "Logic Engineering & Guardrails",
        description: "Constructing robust reasoning loops and deterministic safety layers to ensure predictable behavior in high-stakes environments.",
        details: ["Cognitive Design", "Safety Protocols", "Recursive Evaluation"],
        icon: <Code2 className="w-5 h-5" />,
        color: "from-purple-500/20 to-purple-500/0",
        iconColor: "text-purple-400"
    },
    {
        number: "04",
        title: "Enterprise Orchestration",
        description: "Bridges the gap between AI and infrastructure. Deploying agents into production with secure API and database integrations.",
        details: ["Secure Tooling", "Database Hooking", "Real-time Scaling"],
        icon: <Network className="w-5 h-5" />,
        color: "from-emerald-500/20 to-emerald-500/0",
        iconColor: "text-emerald-400"
    },
    {
        number: "05",
        title: "Closed-Loop Observability",
        description: "Establishing end-to-end monitoring to track reasoning accuracy, latency, and continuous model refinement post-launch.",
        details: ["Latency Tracking", "Hallucination Defense", "Iterative Refinement"],
        icon: <BarChart2 className="w-5 h-5" />,
        color: "from-blue-500/20 to-blue-500/0",
        iconColor: "text-blue-400"
    }
];

export const HowWeBuild = () => {
    return (
        <section id="how-we-build" className="relative py-32 overflow-hidden bg-transparent">
            <ChipBg />
            {/* Ambient Background Light */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6"
                    >
                        <Shield className="w-3 h-3 text-emerald-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Our Methodology</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6 leading-tight"
                    >
                        From Concept to <span className="text-zinc-500 italic">Production Agency</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-base text-zinc-400 font-medium leading-relaxed max-w-2xl"
                    >
                        We translate complex business requirements into robust, self-correcting agentic systems with a rigorous, engineering-first approach.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Vertical Connecting Line with Pulse */}
                    <div className="absolute left-[31px] md:left-[47px] top-6 bottom-6 w-px bg-zinc-800 hidden md:block">
                        <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            className="bg-linear-to-b from-emerald-500/50 via-blue-500/50 to-purple-500/50 w-full"
                        >
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-emerald-400 blur-sm animate-[pulse-line_4s_infinite]" />
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: index * 0.15 }}
                                className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-start group"
                            >
                                {/* Step Indicator */}
                                <div className="shrink-0 relative z-20">
                                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-[2rem] bg-zinc-900 border border-white/10 flex items-center justify-center backdrop-blur-3xl shadow-2xl group-hover:border-white/30 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3 overflow-hidden">
                                        <div className={cn("absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-700", step.color)} />
                                        <div className="flex flex-col items-center gap-1 relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                                            <span className="text-[9px] font-mono text-zinc-500 group-hover:text-zinc-300 tracking-[0.2em] font-bold">PHASE</span>
                                            <span className="text-xl md:text-2xl font-bold text-white tracking-tighter italic">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Hovering Icon Indicator */}
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 12 }}
                                        className={cn(
                                            "absolute -top-1 -right-1 p-1.5 rounded-xl bg-zinc-950 border border-white/10 shadow-2xl transition-all duration-500",
                                            step.iconColor
                                        )}
                                    >
                                        {step.icon}
                                    </motion.div>
                                </div>

                                <div className="flex-1 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-8 md:p-10 group-hover:bg-zinc-900/60 group-hover:border-white/15 transition-all duration-700 relative overflow-hidden">
                                    <div className={cn("absolute top-0 right-0 w-64 h-64 bg-linear-to-bl blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-1000", step.color)} />

                                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                                        <div className="max-w-2xl">
                                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-emerald-400 transition-colors duration-500">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-medium mb-6">
                                                {step.description}
                                            </p>

                                            {/* Sub-steps / Technical Details */}
                                            <div className="flex flex-wrap gap-2.5">
                                                {step.details.map((detail, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/5 border border-white/5 text-[8px] font-extrabold uppercase tracking-[0.15em] text-zinc-400 transition-colors hover:border-emerald-500/30 hover:bg-emerald-500/5 group/detail"
                                                    >
                                                        <div className="w-1 h-1 rounded-full bg-emerald-500/50" />
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
                                                <CheckCircle2 className="w-6 h-6 text-emerald-500/20 group-hover:text-emerald-500/80 transition-colors duration-700" />
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
