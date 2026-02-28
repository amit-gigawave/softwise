"use client";

import { motion } from "framer-motion";
import {
    Github,
    MessageSquare,
    Database,
    Cloud,
    Layout,
    Slack,
    Zap,
    Layers,
    ShieldCheck
} from "lucide-react";

import { Magnetic } from "./ui/Magnetic";
import { SectionBadge } from "./ui/SectionBadge";

export const Integrations = () => {
    const integrationIcons = [
        { Icon: Github, color: "text-white" },
        { Icon: Slack, color: "text-[#4A154B]" },
        { Icon: MessageSquare, color: "text-blue-400" }, // For Discord/Notion
        { Icon: Layout, color: "text-pink-400" }, // For Figma/Trello
        { Icon: Database, color: "text-emerald-400" },
        { Icon: Cloud, color: "text-sky-400" },
    ];

    const paths = [
        { d: "M450 300 C 450 200, 300 120, 150 30", offset: 600, begin: "0s" },
        { d: "M450 300 C 450 210, 360 130, 270 30", offset: 520, begin: "0.2s" },
        { d: "M450 300 C 450 150, 420 80, 390 30", offset: 450, begin: "0.4s" },
        { d: "M450 300 C 450 150, 480 80, 510 30", offset: 450, begin: "0.6s" },
        { d: "M450 300 C 450 210, 540 130, 630 30", offset: 520, begin: "0.8s" },
        { d: "M450 300 C 450 200, 600 120, 750 30", offset: 600, begin: "1s" },
    ];


    return (
        <section className="relative py-12 md:py-24 overflow-hidden border-t border-white/5 bg-black/20">
            {/* <ChipBg /> */}
            <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-16 px-4">
                    <SectionBadge text="Integrations" icon={Zap} />

                    <h2 className="text-4xl sm:text-5xl md:text-5xl font-black tracking-tighter text-primary mb-6 glow-primary">
                        {"Connect Softwise to your entire tech stack".split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.1 + i * 0.1 }}
                                className="inline-block mr-2 last:mr-0"
                            >
                                {word === "Softwise" ? (
                                    <span className="text-primary">{word}</span>
                                ) : (
                                    word
                                )}
                            </motion.span>
                        ))}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-secondary/80 font-medium leading-relaxed">
                        One platform, infinite possibilities. Sync with all your favorite tools to empower your autonomous agents.
                    </p>
                </div>

                {/* Animation Section */}
                <div className="relative mx-auto mt-12 max-w-4xl h-64 md:h-80">
                    {/* Top Icons Row */}
                    <div className="relative z-20 flex items-center justify-center gap-4 sm:gap-10 md:gap-14">
                        {integrationIcons.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="group relative"
                            >
                                <Magnetic strength={0.2}>
                                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all hover:border-emerald-400/50 hover:bg-emerald-500/10 group-hover:scale-110 duration-500">
                                        <item.Icon className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-500 ${item.color}`} />
                                    </div>
                                </Magnetic>
                            </motion.div>
                        ))}
                    </div>


                    {/* SVG Connection Lines */}
                    <div className="absolute inset-0 mt-6 pointer-events-none opacity-40 md:opacity-100">
                        <svg viewBox="0 0 900 360" className="w-full h-full" fill="none" preserveAspectRatio="xMidYMid meet">
                            <defs>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="5" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>


                            {/* Top connection points */}
                            {[150, 270, 390, 510, 630, 750].map((cx, i) => (
                                <circle key={i} cx={cx} cy="30" r="4" fill="var(--primary)" filter="url(#glow)">
                                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                                </circle>
                            ))}

                            {/* Dynamic Curved Paths */}
                            {paths.map((path, i) => (
                                <path
                                    key={i}
                                    d={path.d}
                                    stroke="var(--primary)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    fill="none"
                                    opacity="0.3"
                                    style={{
                                        strokeDasharray: path.offset,
                                        strokeDashoffset: path.offset
                                    }}
                                >
                                    <animate
                                        attributeName="stroke-dashoffset"
                                        values={`${path.offset};0;${path.offset}`}
                                        dur="4s"
                                        begin={path.begin}
                                        repeatCount="indefinite"
                                    />
                                </path>
                            ))}

                        </svg>
                    </div>

                    {/* Central Action Icon */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-primary blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />

                            <span
                                className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 border border-primary/40 relative z-10 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent" />
                                <Zap className="h-6 w-6 text-primary fill-current" />
                            </span>

                        </motion.div>
                    </div>
                </div>

                {/* Footer Features */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                    className="mx-auto mt-8 md:mt-12 max-w-4xl text-secondary/80"
                >
                    <div className="flex items-center justify-center gap-4 sm:gap-12 flex-wrap text-xs md:text-sm border-t border-white/5 pt-10 md:pt-12">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <Layers className="h-3.5 w-3.5 text-primary" />
                            <span className="font-bold">Instant sync</span>
                        </div>
                        <div className="hidden lg:block w-16 h-px border-t border-dashed border-primary/40" />
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                            <span className="font-bold">Enterprise security</span>
                        </div>
                        <div className="hidden lg:block w-16 h-px border-t border-dashed border-primary/40" />
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                            <Zap className="h-3.5 w-3.5 text-primary" />
                            <span className="font-bold">Low Latency</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

    );
};
