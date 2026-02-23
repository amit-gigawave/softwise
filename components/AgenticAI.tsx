"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Database, Network, Workflow, CheckCircle2, Terminal, Shield, Sparkles, Activity } from "lucide-react";
import { PremiumButton } from "./ui/PremiumButton";
import { cn } from "@/lib/utils";

const reasoningSteps = [
    {
        title: "Mission Perception",
        description: "Agents ingest high-level business objectives and environmental context to define an actionable mission.",
        icon: <Brain className="w-5 h-5" />,
        color: "text-emerald-400",
        border: "border-emerald-500/20"
    },
    {
        title: "Strategic Planning",
        description: "Autonomous decomposition of complex requests into logical, multi-step execution paths.",
        icon: <Workflow className="w-5 h-5" />,
        color: "text-blue-400",
        border: "border-blue-500/20"
    },
    {
        title: "Tool Execution",
        description: "Precise orchestration across enterprise software, APIs, and databases with stateful memory.",
        icon: <Cpu className="w-5 h-5" />,
        color: "text-purple-400",
        border: "border-purple-500/20"
    },
    {
        title: "Recursive Learning",
        description: "Continuous self-correction loops that refine behavior based on environmental feedback.",
        icon: <Shield className="w-5 h-5" />,
        color: "text-emerald-400",
        border: "border-emerald-500/20"
    }
];

export const AgenticAI = () => {
    return (
        <section id="agentic-ai" className="relative py-24 overflow-hidden bg-transparent">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                {/* Hero Header */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6"
                    >
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400">The Future of Autonomy</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
                    >
                        Beyond prompts. <br />
                        <span className="text-zinc-500 italic font-light tracking-tighter">Enter the era of Agency.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed"
                    >
                        Agentic AI represents the shift from passive tools to active partners. We build systems that reason, plan, and execute across your ecosystem autonomously.
                    </motion.p>
                </div>

                {/* Interactive reasoning loop / Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    {reasoningSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className={cn(
                                "group relative p-8 rounded-[2.5rem] border bg-white/2 backdrop-blur-xl transition-all duration-500",
                                step.border,
                                "hover:bg-white/4 hover:shadow-2xl hover:shadow-emerald-500/5"
                            )}
                        >
                            <div className={cn("inline-flex p-3 rounded-2xl bg-zinc-900 border border-white/5 mb-6 mt-2 transition-transform duration-500 group-hover:scale-110", step.color)}>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center bg-zinc-900/50 rounded-[3rem] border border-white/5 p-8 md:p-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.05)_0%,transparent_70%)] pointer-events-none" />

                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">The Evolutionary Shift</h3>
                        <p className="text-lg text-zinc-400 mb-8 font-medium">
                            Passive AI waits for instructions. Agentic AI seeks outcomes. By delegating complex workflows to agents, your team focuses on strategy while the infrastructure handles the execution.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Interpret complex natural language goals",
                                "Maintain state across multi-day sessions",
                                "Integrate with legacy enterprise software",
                                "Dynamic error handling and recovery"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-zinc-300">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                    </div>
                                    <span className="text-sm font-semibold tracking-wide uppercase italic">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <PremiumButton variant="primary" size="md" showArrow>
                                View Architecture
                            </PremiumButton>
                        </div>
                    </div>

                    <div className="relative aspect-square lg:aspect-video rounded-4xl overflow-hidden border border-white/10 bg-black group">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[32px_32px]" />

                        {/* Mock Agent Dashboard / Visual */}
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="w-full h-full bg-zinc-900/80 rounded-2xl border border-white/10 p-6 relative overflow-hidden shadow-2xl">
                                <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-red-400" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                        <div className="w-3 h-3 rounded-full bg-green-400" />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                                        <span className="text-[10px] font-mono text-zinc-500">SYSTEM_ACTIVE: AUTHRL-09</span>
                                    </div>
                                </div>

                                <div className="space-y-4 font-mono text-xs">
                                    <p className="text-emerald-400">{">"} INITIALIZING_AGENTIC_CORE...</p>
                                    <p className="text-zinc-500">{">"} LOADING MISSION CONTEXT: "Optimize Supply Chain Hub"</p>
                                    <p className="text-blue-400">{">"} PLANNING_PHASE: 4 STEPS IDENTIFIED</p>
                                    <div className="pl-4 space-y-2 border-l border-zinc-800 ml-2">
                                        <p className="text-zinc-300">1. Querying SAP Inventory API...</p>
                                        <p className="text-zinc-300">2. Analyzing lead times (ML-Model 4)</p>
                                        <p className="text-zinc-300">3. Draft procurement emails (Drafts Box)</p>
                                        <p className="text-zinc-300">4. Notify operation leads (Slack)</p>
                                    </div>
                                    <p className="text-emerald-400 animate-pulse">{">"} EXECUTING STEP 1: SUCCESS (2.4s)</p>
                                </div>

                                {/* Decorative scan line */}
                                <div className="absolute top-0 left-0 w-full h-px bg-emerald-500/20 blur-sm animate-[scan_4s_linear_infinite]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(400px); }
                }
            `}</style>
        </section>
    );
};
