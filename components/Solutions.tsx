"use client";

import { motion } from "framer-motion";
import { Bot, Network, Server, CheckCircle2, Sparkles, Box, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { PremiumButton } from "./ui/PremiumButton";
import { SectionBadge } from "./ui/SectionBadge";

const solutions = [
    {
        title: "Autonomous Agent Clusters",
        icon: Bot,
        description: "Specialized neural agents that orchestrate complex multi-step missions across your enterprise ecosystem with high-fidelity reasoning.",
        listHeading: "Capabilities:",
        bullets: [
            "Cross-system context retention",
            "Multi-modal input processing",
            "Deterministic constraint adherence",
            "Full execution traceability"
        ],
        gradient: "from-primary/20 to-transparent",
        iconColor: "text-primary"
    },
    {
        title: "Agentic Loop Automation",
        icon: Network,
        description: "Transforming linear scripts into recursive reasoning loops that adapt to environmental feedback and self-correct during failure.",
        listHeading: "Features:",
        bullets: [
            "Dynamic task routing",
            "Real-time error recovery",
            "Low-latency decision loops",
            "Predictive bottleneck detection"
        ],
        gradient: "from-secondary/20 to-transparent",
        iconColor: "text-secondary"
    },
    {
        title: "Production Infrastructure",
        icon: Server,
        description: "Scalable core for hosting agentic workflows with enterprise-grade security, long-term memory, and robust tool governance.",
        listHeading: "Governance:",
        bullets: [
            "Human-in-the-loop oversight",
            "Secure state management",
            "SLA-driven scalability",
            "Comprehensive audit logging"
        ],
        gradient: "from-primary/20 to-transparent",
        iconColor: "text-primary"
    }
];

export const Solutions = () => {
    return (
        <section id="solutions" className="relative py-12 md:py-32 overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <SectionBadge text="Our Offerings" icon={Box} />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 leading-tight glow-primary"
                    >
                        Architecting <span className="text-secondary/60 italic glow-secondary">Agentic Workflows</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-secondary/80 max-w-2xl font-medium"
                    >
                        We build the bedrock for the next generation of business automation—where AI doesn't just assist, but acts.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group relative flex flex-col h-full bg-zinc-900/50 backdrop-blur-xl border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-white/20 transition-all duration-500"
                        >
                            <div className={cn("absolute inset-0 bg-linear-to-b opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none", solution.gradient)} />

                            <div className="relative p-10 flex flex-col flex-1 z-10">
                                <div className="mb-8 flex items-center justify-between">
                                    <div className="p-4 bg-zinc-950 border border-white/10 rounded-2xl group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                                        <solution.icon className={cn("w-7 h-7", solution.iconColor)} />
                                    </div>
                                    <Sparkles className="w-5 h-5 text-white/10 group-hover:text-white/30 transition-colors" />
                                </div>

                                <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">
                                    {solution.title}
                                </h3>

                                <p className="text-secondary/80 leading-relaxed font-medium mb-10 flex-1">
                                    {solution.description}
                                </p>

                                <div className="mt-auto space-y-6">
                                    <div className="h-px bg-white/5 w-full" />
                                    <div>
                                        <h4 className="text-[10px] font-bold text-secondary/60 uppercase tracking-[0.3em] mb-4">
                                            {solution.listHeading}
                                        </h4>
                                        <ul className="grid grid-cols-1 gap-3">
                                            {solution.bullets.map((bullet, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-secondary">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 shadow-[0_0_10px_var(--primary)]" />
                                                    <span className="text-sm font-medium">{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pt-4">
                                        <PremiumButton variant="outline" size="sm" className="w-full">
                                            Learn More
                                        </PremiumButton>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
