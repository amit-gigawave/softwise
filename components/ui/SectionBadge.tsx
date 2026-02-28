"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
    text: string;
    icon?: LucideIcon;
    className?: string;
    delay?: number;
}

export const SectionBadge = ({
    text,
    icon: Icon,
    className,
    delay = 0
}: SectionBadgeProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay }}
            className={cn("flex items-center justify-center gap-4 mb-8 w-fit mx-auto", className)}
        >
            <div className="h-px w-8 md:w-16 bg-linear-to-r from-transparent via-primary/30 to-primary/10" />

            <div className="flex items-center gap-2 px-1 w-fit mx-auto">
                {Icon && <Icon className="w-3.5 h-3.5 text-primary/60" />}
                <span className="text-[13px] md:text-sm font-medium text-secondary/80 tracking-wide whitespace-nowrap">
                    {text}
                </span>
            </div>

            <div className="h-px w-8 md:w-16 bg-linear-to-l from-transparent via-primary/30 to-primary/10" />
        </motion.div>
    );
};
