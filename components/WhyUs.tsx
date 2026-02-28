"use client";

import { motion } from "framer-motion";
import { FileText, Send, Zap, ShieldCheck, Cpu, Code2, Layers, Rocket, Activity } from "lucide-react";
import { PremiumButton } from "./ui/PremiumButton";
import Link from "next/link";
import Image from "next/image";
import { SectionBadge } from "./ui/SectionBadge";

export const WhyUs = () => {
    return (
        <section id="why-us" className="relative py-12 md:py-24 overflow-hidden border-t border-white/5 ">

            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--primary-rgb)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionBadge text="Core Capabilities" />
                        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight text-primary leading-tight glow-primary">
                            Infrastructure built for <span className="text-secondary/60">autonomous scale</span>
                        </h2>
                        <p className="mt-4 text-lg text-secondary/80 leading-relaxed font-medium">
                            From complex reasoning loops to secure tool orchestration, Softwise provides the bedrock for production-grade agentic AI.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {/* Big feature: Autonomous Multi-Agent Systems */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:col-span-2 md:row-span-2 shadow-2xl"
                    >
                        <div className="relative h-64 sm:h-80 md:h-[450px]">
                            <img
                                src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f2227b53-6c8a-42ab-a473-d7a119e14c95_1600w.jpg"
                                alt="Agentic Core"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
                        </div>
                        <div className="absolute bottom-0 left-0 p-6 sm:p-10 w-full">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-[11px] font-bold text-primary uppercase tracking-wide">Autonomous</span>
                                <span className="text-xs font-semibold text-secondary/60 tracking-wide uppercase">Next-Gen Reasoning</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-primary mb-4">Launch agents, not just prompts</h3>
                            <p className="max-w-xl text-secondary text-base sm:text-lg leading-relaxed font-medium">
                                Deploy self-correcting agentic systems that break down goals, reason across contexts, and execute multi-step tasks without constant human intervention.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <PremiumButton variant="outline" size="sm" href="#">
                                    <FileText className="h-3.5 w-3.5" />
                                    Read Technical Specs
                                </PremiumButton>
                                <PremiumButton variant="secondary" size="sm" href="/contact" showArrow>
                                    Request Architecture
                                </PremiumButton>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column: Tool Orchestration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-emerald-500/30 transition-all duration-500"
                    >
                        <div className="p-6 sm:p-8">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold tracking-tight text-primary flex items-center gap-3">
                                    <Layers className="h-5 w-5 text-primary" />
                                    Dynamic Toolchains
                                </h3>
                                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary">STATEFUL</span>
                            </div>
                            <p className="text-sm text-secondary/80 leading-relaxed font-medium">
                                Enable agents to intelligently select and execute tools across your entire software stack with high precision and state tracking.
                            </p>
                            <div className="mt-6 rounded-2xl overflow-hidden border border-white/5 group-hover:border-emerald-500/20 transition-all">
                                <img
                                    src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6e2b186b-730f-4956-8043-14955d1766bf_800w.jpg"
                                    alt="Tool Orchestration"
                                    className="aspect-video w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right column: Deterministic Safety */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-emerald-500/30 transition-all duration-500"
                    >
                        <div className="p-6 sm:p-8">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold tracking-tight text-primary flex items-center gap-3">
                                    <ShieldCheck className="h-5 w-5 text-primary" />
                                    Safety Guardrails
                                </h3>
                                <span className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/15 px-2 py-0.5 text-[10px] font-bold text-secondary uppercase">Secure</span>
                            </div>
                            <p className="text-sm text-secondary/80 leading-relaxed font-medium">
                                Embedded security layers ensure agents strictly adhere to business rules, data privacy, and ethical constraints at runtime.
                            </p>
                            <div className="mt-6 rounded-2xl overflow-hidden border border-white/5 group-hover:border-emerald-500/20 transition-all">
                                <img
                                    src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dc543ce0-b776-4e3a-a6d5-933229659050_800w.jpg"
                                    alt="Security Illustration"
                                    className="aspect-video w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom small: Real-time Traceability */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-emerald-500/30 transition-all duration-500"
                    >
                        <div className="p-6 sm:p-8">
                            <h3 className="text-lg font-bold tracking-tight text-primary flex items-center gap-3 mb-4">
                                <Activity className="h-5 w-5 text-primary" />
                                Full Traceability
                                <span className="ml-auto inline-flex items-center rounded-full border border-primary/30 bg-primary/15 px-2 py-0.5 text-[10px] font-bold text-primary">LIVE</span>
                            </h3>
                            <p className="text-sm text-secondary/80 leading-relaxed font-medium">
                                Gain complete visibility into every reasoning step and tool call. Audit agent behavior in real-time with granular logs.
                            </p>
                            <div className="mt-6 rounded-2xl overflow-hidden border border-white/5 group-hover:border-emerald-500/20 transition-all">
                                <img
                                    src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/91cceaf5-3a72-47d0-9d15-ee799cfea874_800w.jpg"
                                    alt="Trace Dashboard"
                                    className="aspect-video w-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom small: Rapid Deployment */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-emerald-500/30 transition-all duration-500"
                    >
                        <div className="p-6 sm:p-8">
                            <h3 className="text-lg font-bold tracking-tight text-primary flex items-center gap-3 mb-4">
                                <Rocket className="h-5 w-5 text-primary" />
                                Production Ready
                            </h3>
                            <p className="text-sm text-secondary/80 leading-relaxed font-medium">
                                Move from prototype to production-grade agentic workflows in days, not months, with our pre-built infrastructure.
                            </p>
                            <div className="mt-6 rounded-2xl overflow-hidden border border-white/5 group-hover:border-emerald-500/20 transition-all">
                                <img
                                    src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/70ea4bbd-c103-404b-bff1-cab817e4f4d6_800w.jpg"
                                    alt="Deployment Imagery"
                                    className="aspect-video w-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Bottom small: Enterprise Integrations */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-emerald-500/30 transition-all duration-500"
                    >
                        <div className="p-6 sm:p-8">
                            <h3 className="text-lg font-bold tracking-tight text-primary flex items-center gap-3 mb-4">
                                <Cpu className="h-5 w-5 text-primary" />
                                Scalable Core
                            </h3>
                            <p className="text-sm text-secondary/80 leading-relaxed font-medium">
                                Architected to handle high-frequency agent interactions with low latency across geographically distributed systems.
                            </p>
                            <div className="mt-6 rounded-2xl overflow-hidden border border-white/5 group-hover:border-emerald-500/20 transition-all">
                                <img
                                    src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a0573e8d-a170-4eda-aba7-4f4fc78c43b7_800w.jpg"
                                    alt="System Imagery"
                                    className="aspect-video w-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

