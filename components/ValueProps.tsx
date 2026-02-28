"use client";

import { motion } from "framer-motion";

import { ArrowRight, User, Waypoints, Activity, Share2 } from "lucide-react";
import { PremiumButton } from "./ui/PremiumButton";
import { Magnetic } from "./ui/Magnetic";
import { SectionBadge } from "./ui/SectionBadge";


export const ValueProps = () => {
    return (
        <section className="relative py-12 md:py-24 px-4 md:px-6 lg:mx-auto max-w-7xl rounded-4xl md:rounded-[3rem] mt-12 md:mt-24 mb-12 md:mb-24 overflow-hidden border-none text-center md:text-left">
            {/* Background Gradients */}
            {/* <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/5 via-transparent to-white/5 pointer-events-none" /> */}

            <div className="container mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col gap-8 md:gap-10 w-full mb-12 md:mb-16">
                    <SectionBadge text="Why Softwise" icon={Activity} />

                    {/* Main content */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-10">
                        <div className="max-w-3xl flex flex-col gap-4 md:gap-6">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1.1] text-primary font-black tracking-tighter glow-primary"
                            >
                                Intelligence you feel.
                                <span className="block italic-accent text-secondary/60 mt-2 font-light glow-secondary  text-2xl md:text-5xl">
                                    Autonomous progress you can trust.
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-sm md:text-lg text-secondary/80 font-medium max-w-xl leading-relaxed"
                            >
                                A robust agentic AI infrastructure designed for autonomous reasoning,
                                seamless tool integration, and high-stakes business automation.
                            </motion.p>
                        </div>

                        {/* CTA */}
                        <div className="w-full sm:w-auto">
                            <Magnetic>
                                <PremiumButton variant="outline" size="md" showArrow className="w-full sm:w-auto justify-center">
                                    Explore Features
                                </PremiumButton>
                            </Magnetic>
                        </div>
                    </div>
                </div>


                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

                    {/* Card 1: Smart Task Automation */}
                    <div className="group relative flex flex-col overflow-hidden bg-zinc-950/50 border border-white/10 rounded-4xl p-6 md:p-8 transition-all duration-500 hover:border-emerald-500/30 justify-between min-h-[400px] md:min-h-[450px]">
                        <style>{`
              @keyframes orbit-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
              @keyframes breathe-glow { 
                0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(52, 211, 153, 0.1); } 
                50% { transform: scale(1.05); box-shadow: 0 0 35px rgba(52, 211, 153, 0.2); } 
              }
              @keyframes ripple-expand { 
                0% { transform: scale(0.8); opacity: 0.6; border-width: 1px; } 
                100% { transform: scale(2.5); opacity: 0; border-width: 0px; } 
              }
              @keyframes dot-handoff { 
                0%, 100% { opacity: 0.3; r: 2px; fill: #34d399; } 
                50% { opacity: 1; r: 4px; fill: #10b981; } 
              }
            `}</style>

                        <div className="relative h-40 md:h-48 w-full flex items-center justify-center mb-6 md:mb-8">
                            {/* <div className="absolute -top-2 -right-2 z-30 font-handwritten text-emerald-400 text-lg md:text-xl rotate-12 bg-black/60 px-2 py-1 rounded-lg border border-emerald-500/20 backdrop-blur-sm">
                                Built for scale.
                            </div> */}
                            <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-50 rounded-full blur-3xl scale-75"></div>

                            <div className="absolute w-16 md:w-20 h-16 md:h-20 rounded-full border border-primary/20" style={{ animation: "ripple-expand 4s cubic-bezier(0, 0, 0.2, 1) infinite" }}></div>

                            <svg className="w-full h-full text-primary/10 z-10" viewBox="0 0 200 200">
                                <g style={{ transformOrigin: "100px 100px", animation: "orbit-slow 15s linear infinite" }}>
                                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" className="opacity-30" />
                                    <circle cx="100" cy="20" r="4" fill="var(--primary)" className="shadow-[0_0_10px_var(--primary)]" />
                                    <circle cx="180" cy="100" r="3" fill="var(--secondary)" className="opacity-60" />
                                    <circle cx="20" cy="100" r="3" fill="var(--secondary)" className="opacity-60" />
                                </g>
                                <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="1" className="opacity-40" />

                                {/* Hand-off Dots */}
                                {[0, 90, 180, 270].map((deg, i) => (
                                    <circle key={i} cx={100 + 45 * Math.sin(deg * Math.PI / 180)} cy={100 - 45 * Math.cos(deg * Math.PI / 180)} r="2" fill="var(--primary)" style={{ animation: `dot-handoff 4s ease-in-out infinite`, animationDelay: `${i}s` }} />
                                ))}
                            </svg>

                            <div className="absolute flex items-center justify-center w-14 md:w-16 h-14 md:h-16 bg-zinc-900/80 rounded-full border border-white/10 z-20 backdrop-blur-sm" style={{ animation: "breathe-glow 4s ease-in-out infinite" }}>
                                <User className="w-6 md:w-8 h-6 md:h-8 text-white relative z-10" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl text-primary font-black tracking-tight mb-3">
                                Smart Agent Orchestration
                            </h3>
                            <p className="text-secondary/80 font-medium leading-relaxed text-sm md:text-base">
                                Coordinate complex multi-agent workflows with intelligent reasoning
                                and autonomous task decomposition.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Deep Tool Integration */}
                    <div className="lg:col-span-2 group relative flex flex-col overflow-hidden bg-zinc-950/50 border border-white/10 rounded-4xl p-6 md:p-8 transition-all duration-500 hover:border-primary/30 justify-between min-h-[400px] md:min-h-[450px]">
                        <style>{`
              @keyframes flowData { 
                0% { stroke-dashoffset: 120; opacity: 0; } 
                15% { opacity: 1; } 
                85% { opacity: 1; } 
                100% { stroke-dashoffset: 0; opacity: 0; } 
              }
              @keyframes breatheDiamond { 
                0%, 100% { transform: rotate(45deg) scale(1); box-shadow: 0 0 30px rgba(52, 211, 153, 0.2); border-color: rgba(52, 211, 153, 0.2); } 
                50% { transform: rotate(45deg) scale(1.05); box-shadow: 0 0 50px rgba(52, 211, 153, 0.4); border-color: rgba(52, 211, 153, 0.5); } 
              }
              @keyframes orbitSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            `}</style>

                        <div className="absolute top-0 right-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/10 blur-3xl rounded-full md:-translate-y-1/2 md:translate-x-1/2 group-hover:bg-primary/15 transition-colors duration-700" />

                        <div className="relative h-40 md:h-48 w-full flex items-center justify-center mb-6 md:mb-8 overflow-visible">
                            {/* <div className="absolute -bottom-2 -left-2 z-30 font-handwritten text-emerald-400 text-lg md:text-xl -rotate-6 bg-black/60 px-2 py-1 rounded-lg border border-emerald-500/20 backdrop-blur-sm">
                                Human-in-the-loop oversight.
                            </div> */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                                <defs>
                                    <linearGradient id="flowEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
                                        <stop offset="50%" stopColor="var(--secondary)" stopOpacity="1" />
                                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path d="M50 100 L120 100 L150 70" stroke="white" strokeOpacity="0.1" strokeWidth="1" fill="none" />
                                <path d="M350 100 L280 100 L250 130" stroke="white" strokeOpacity="0.1" strokeWidth="1" fill="none" />

                                <path d="M50 100 L120 100 L150 70" stroke="url(#flowEmerald)" strokeWidth="2" strokeDasharray="120" strokeDashoffset="120" fill="none" style={{ animation: "flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite" }} />
                                <path d="M350 100 L280 100 L250 130" stroke="url(#flowEmerald)" strokeWidth="2" strokeDasharray="120" strokeDashoffset="120" fill="none" style={{ animation: "flowData 3s cubic-bezier(0.4, 0, 0.2, 1) infinite", animationDelay: "1.5s" }} />

                                <g transform="translate(50 100) rotate(45)">
                                    <rect x="-8" y="-8" width="16" height="16" fill="#121215" stroke="white" strokeOpacity="0.2" className="group-hover:stroke-primary transition-colors" />
                                </g>
                                <g transform="translate(350 100) rotate(45)">
                                    <rect x="-8" y="-8" width="16" height="16" fill="#121215" stroke="white" strokeOpacity="0.2" className="group-hover:stroke-primary transition-colors" />
                                </g>
                            </svg>

                            <div className="relative flex items-center justify-center">
                                <div className="absolute inset-0 bg-primary blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                                <div className="w-20 md:w-24 h-20 md:h-24 border border-primary/30 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center relative overflow-hidden" style={{ animation: "breatheDiamond 4s ease-in-out infinite" }}>
                                    <div className="w-10 md:w-12 h-10 md:h-12 border border-primary/50 rounded-lg flex items-center justify-center bg-primary/5 relative z-20">
                                        <Waypoints className="w-5 md:w-6 h-5 md:h-6 text-primary" />
                                    </div>
                                    <div className="absolute inset-0 z-10 opacity-30" style={{ animation: "orbitSpin 8s linear infinite" }}>
                                        <div className="w-full h-full rounded-2xl border-t border-r border-primary/40" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl text-primary font-black tracking-tight mb-3">
                                Production-Grade Tooling
                            </h3>
                            <p className="text-secondary/80 font-medium leading-relaxed max-w-lg text-sm md:text-base">
                                Connect your agents to APIs, databases, and internal software
                                with secure, stateful tool execute and human-in-the-loop oversight.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Real-time Visibility */}
                    <div className="md:col-span-2 group relative flex flex-col overflow-hidden bg-zinc-950/50 border border-white/10 rounded-4xl p-6 md:p-8 transition-all duration-500 hover:border-primary/30 justify-between min-h-[400px] md:min-h-[450px]">
                        <style>{`
              @keyframes shimmer-lock { 
                0%, 100% { opacity: 0.4; transform: scale(1); } 
                50% { opacity: 0.8; transform: scale(1.05); } 
              }
              @keyframes active-pulse { 
                0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); transform: scale(1); } 
                50% { box-shadow: 0 0 35px rgba(16, 185, 129, 0.5); transform: scale(1.02); } 
              }
              @keyframes scan-sweep { 
                0% { transform: translateY(-150%) rotate(10deg); opacity: 0; } 
                20% { opacity: 1; } 
                80% { opacity: 1; } 
                100% { transform: translateY(250%) rotate(10deg); opacity: 0; } 
              }
            `}</style>

                        <div className="flex w-full h-40 md:h-48 mb-6 md:mb-8 relative items-center justify-center">
                            <div className="absolute w-48 md:w-64 h-48 md:h-64 bg-primary/10 blur-3xl rounded-full" />
                            <div className="flex items-center gap-4 md:gap-6 relative z-10 scale-90 md:scale-100">
                                <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl border border-white/10 bg-zinc-900/80 flex items-center justify-center text-zinc-600 backdrop-blur-sm" style={{ animation: "shimmer-lock 4s ease-in-out infinite" }}>
                                    <Activity className="w-5 md:w-6 h-5 md:h-6" />
                                </div>

                                <div className="relative w-20 md:w-24 h-20 md:h-24 rounded-3xl bg-primary flex items-center justify-center text-black border border-white/20 shadow-2xl" style={{ animation: "active-pulse 3s ease-in-out infinite" }}>
                                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                                        <div className="w-full h-1/2 bg-white/20 blur-md absolute top-0 left-0" style={{ animation: "scan-sweep 4s ease-in-out infinite" }} />
                                    </div>
                                    <Activity className="w-8 md:w-10 h-8 md:h-10" />
                                    <div className="absolute -bottom-4 bg-zinc-950 text-white border border-white/10 px-3 py-1 rounded-full flex items-center gap-2 whitespace-nowrap">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                        </span>
                                        <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase">Live Monitoring</span>
                                    </div>
                                </div>

                                <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl border border-white/10 bg-zinc-900/80 flex items-center justify-center text-zinc-600 backdrop-blur-sm" style={{ animation: "shimmer-lock 4s ease-in-out infinite", animationDelay: "2s" }}>
                                    <Activity className="w-5 md:w-6 h-5 md:h-6" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl text-primary font-black tracking-tight mb-3">
                                Deterministic Visibility
                            </h3>
                            <p className="text-secondary/80 font-medium leading-relaxed max-w-lg text-sm md:text-base">
                                Trace agent reasoning processes in real-time. Gain complete
                                transparency into the cognitive steps taken by your AI infrastructure.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Scalability */}
                    <div className="group relative flex flex-col overflow-hidden bg-zinc-950/50 border border-white/10 rounded-4xl p-6 md:p-8 transition-all duration-500 hover:border-primary/30 justify-between min-h-[400px] md:min-h-[450px]">
                        <style>{`
              @keyframes signal-flow { 0% { stroke-dashoffset: 20; opacity: 0.3; } 100% { stroke-dashoffset: 0; opacity: 0.6; } }
              @keyframes signal-pulse { 
                0%, 100% { stroke-width: 1; opacity: 0.2; } 
                50% { stroke-width: 1.5; opacity: 0.6; stroke: var(--primary); } 
              }
              @keyframes node-activate { 
                0%, 90%, 100% { fill: white; r: 3px; } 
                95% { fill: var(--primary); r: 5px; } 
              }
              @keyframes grid-pan { from { background-position: 0% 0%; } to { background-position: 100px 100px; } }
            `}</style>

                        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "40px 40px", animation: "grid-pan 40s linear infinite" }} />

                        <div className="relative h-40 md:h-48 w-full flex items-center justify-center mb-6 md:mb-8 z-10">
                            <svg className="w-full h-full text-white/10" viewBox="0 0 200 200">
                                <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="1" />
                                <line x1="60" y1="20" x2="60" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "signal-flow 3s linear infinite" }} />
                                <line x1="140" y1="20" x2="140" y2="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" style={{ animation: "signal-flow 4s linear infinite reverse" }} />

                                {[60, 100, 140, 100, 100].map((cx, i) => (
                                    <circle key={i} cx={cx} cy={40 + i * 30} r="3" fill="white" style={{ animation: "node-activate 8s ease-in-out infinite", animationDelay: `${i * 1.5}s` }} />
                                ))}

                                <path d="M60 80 C 80 80, 80 100, 100 100" stroke="currentColor" strokeWidth="1" style={{ animation: "signal-pulse 5s ease-in-out infinite" }} fill="none" />
                                <path d="M140 130 C 120 130, 120 150, 100 150" stroke="currentColor" strokeWidth="1" style={{ animation: "signal-pulse 5s ease-in-out infinite", animationDelay: "2s" }} fill="none" />
                            </svg>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl text-primary font-black tracking-tight mb-3">
                                Infinite Scalability
                            </h3>
                            <p className="text-secondary/80 font-medium leading-relaxed text-sm md:text-base">
                                Architected globally. Scale from a single internal agent to
                                thousands of concurrent autonomous sessions effortlessly.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

