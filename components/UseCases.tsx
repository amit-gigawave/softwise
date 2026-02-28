"use client";

import { motion } from "framer-motion";
import { Settings, BarChart3, HeadphonesIcon, DatabaseSearch, ArrowRight, Layers, Activity, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionBadge } from "./ui/SectionBadge";

const useCases = [
    {
        title: "Autonomous Operations",
        icon: Settings,
        description: "Orchestrating internal cross-departmental coordination, approvals, and complex task execution with zero latency.",
        examples: [
            "Recursive approvals & routing",
            "Dynamic document processing",
            "Intelligent vendor workflows"
        ],
        accent: "from-primary/20 to-primary/0",
        iconColor: "text-primary"
    },
    {
        title: "Reasoning-Led GTM",
        icon: BarChart3,
        description: "Autonomous lead qualification and CRM-driven execution loops that adapt messaging based on prospect sentiment.",
        examples: [
            "Sentiment-driven scoring",
            "Personalized outbound agents",
            "Real-time data enrichment"
        ],
        accent: "from-secondary/20 to-secondary/0",
        iconColor: "text-secondary"
    },
    {
        title: "Cognitive Support",
        icon: HeadphonesIcon,
        description: "Multi-tier agentic ticket triage and knowledge-based resolution that reasons across your documentation.",
        examples: [
            "Context-aware resolution",
            "Automated KB synthesis",
            "Predictive escalation loops"
        ],
        accent: "from-primary/20 to-primary/0",
        iconColor: "text-primary"
    },
    {
        title: "Agentic Intelligence",
        icon: DatabaseSearch,
        description: "Autonomous unstructured data parsing and competitor research agents that deliver synthesized monthly reports.",
        examples: [
            "Recursive research loops",
            "Market signal extractions",
            "Automated KPI synthesis"
        ],
        accent: "from-secondary/20 to-secondary/0",
        iconColor: "text-secondary"
    }
];

export const UseCases = () => {
    return (
        <section id="use-cases" className="relative py-12 md:py-32 overflow-hidden bg-transparent">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <SectionBadge text="Applications" icon={Activity} />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 leading-tight glow-primary"
                    >
                        Deploy Agency <span className="text-secondary/60 italic glow-secondary">Everywhere</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-secondary/80 max-w-2xl font-medium"
                    >
                        From operations to deep research, our agentic architecture adapts to the unique reasoning requirements of every department.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col p-10 rounded-[3rem] border border-white/5 bg-zinc-900/30 backdrop-blur-3xl transition-all duration-500 hover:border-white/20 hover:bg-zinc-900/50"
                        >
                            <div className={cn("absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none rounded-[3rem]", useCase.accent)} />

                            <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                                {/* Left Side: Icon & Title */}
                                <div className="shrink-0">
                                    <div className="p-5 rounded-4xl bg-zinc-950 border border-white/5 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                                        <useCase.icon className={cn("w-8 h-8", useCase.iconColor)} />
                                    </div>
                                </div>

                                {/* Right Side: Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-primary mb-4 tracking-tight">
                                        {useCase.title}
                                    </h3>
                                    <p className="text-secondary/80 leading-relaxed mb-8 font-medium">
                                        {useCase.description}
                                    </p>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-px flex-1 bg-white/5" />
                                            <span className="text-[10px] font-bold text-secondary/60 uppercase tracking-widest whitespace-nowrap">Core Functions</span>
                                            <div className="h-px flex-1 bg-white/5" />
                                        </div>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                            {useCase.examples.map((example, idx) => (
                                                <li key={idx} className="flex items-center gap-2.5 text-secondary">
                                                    <div className={cn("w-1.5 h-1.5 rounded-full", useCase.iconColor.replace('text', 'bg'))} />
                                                    <span className="text-xs font-semibold tracking-wide uppercase italic">{example}</span>
                                                </li>
                                            ))}
                                        </ul>
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
