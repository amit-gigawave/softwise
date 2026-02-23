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
import ChipBg from "./ChipBg";

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
        <section className="relative py-24 overflow-hidden border-t border-white/5 ">
            {/* <ChipBg /> */}
            <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 px-4"
                >
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-400 ring-1 ring-emerald-400/20 uppercase tracking-tight font-semibold mb-6">
                        <Zap className="h-3.5 w-3.5" />
                        Integrations
                    </span>

                    <h2 className="sm:text-5xl text-4xl font-bold tracking-tight text-white mb-6">
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
                                    <span className="text-emerald-400">{word}</span>
                                ) : (
                                    word
                                )}
                            </motion.span>
                        ))}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
                        One platform, infinite possibilities. Sync with all your favorite tools to empower your autonomous agents.
                    </p>
                </motion.div>

                {/* Animation Section */}
                <div className="relative mx-auto mt-12 max-w-4xl h-72 sm:h-80">
                    {/* Top Icons Row */}
                    <div className="relative z-20 flex items-center justify-center gap-6 sm:gap-14">
                        {integrationIcons.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + idx * 0.1 }}
                                className="group relative"
                            >
                                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all hover:ring-emerald-400/50 hover:bg-white/10">
                                    <item.Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${item.color}`} />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* SVG Connection Lines */}
                    <div className="absolute inset-0 mt-6 pointer-events-none">
                        <svg viewBox="0 0 900 360" className="w-full h-full" fill="none">
                            <defs>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="5" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>

                            {/* Top connection points */}
                            {[150, 270, 390, 510, 630, 750].map((cx, i) => (
                                <circle key={i} cx={cx} cy="30" r="4" fill="#34D399" filter="url(#glow)">
                                    <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                                </circle>
                            ))}

                            {/* Dynamic Curved Paths with the requested animation */}
                            {paths.map((path, i) => (
                                <path
                                    key={i}
                                    d={path.d}
                                    stroke="#34D399"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    fill="none"
                                    opacity="0.4"
                                    style={{
                                        strokeDasharray: path.offset,
                                        strokeDashoffset: path.offset
                                    }}
                                >
                                    <animate
                                        attributeName="stroke-dashoffset"
                                        values={`${path.offset};0;${path.offset}`}
                                        dur="3s"
                                        begin={path.begin}
                                        repeatCount="indefinite"
                                    />
                                </path>
                            ))}
                        </svg>
                    </div>

                    {/* Central Action Icon */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30">
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
                        >
                            <span
                                className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/20 ring-2 ring-emerald-400/40"
                                style={{
                                    boxShadow: "0 0 20px rgba(52,211,153,0.6), 0 0 40px rgba(52,211,153,0.3)"
                                }}
                            >
                                <Zap className="h-6 w-6 text-emerald-400 fill-current" />
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
                    className="mx-auto mt-12 max-w-4xl text-neutral-300"
                >
                    <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap text-sm border-t border-white/5 pt-12">
                        <div className="inline-flex items-center gap-2">
                            <Layers className="h-4 w-4 text-emerald-400" />
                            <span className="font-medium">Instant sync</span>
                        </div>
                        <div className="hidden sm:block w-24 h-px border-t border-dashed border-emerald-400/40" />
                        <div className="inline-flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-emerald-400" />
                            <span className="font-medium">Enterprise security</span>
                        </div>
                        <div className="hidden sm:block w-24 h-px border-t border-dashed border-emerald-400/40" />
                        <div className="inline-flex items-center gap-2">
                            <Zap className="h-4 w-4 text-emerald-400" />
                            <span className="font-medium">Low Latency</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
