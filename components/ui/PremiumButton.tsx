"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "emerald";
    size?: "xs" | "sm" | "md" | "lg";
    children: React.ReactNode;
    className?: string;
    showArrow?: boolean;
    href?: string;
}

export const PremiumButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ variant = "primary", size = "md", children, className, showArrow = false, href, ...props }, ref) => {
        const buttonRef = useRef<HTMLButtonElement>(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });

        const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
            if (!buttonRef.current) return;
            const rect = buttonRef.current.getBoundingClientRect();
            setPosition({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        };

        const variantStyles = {
            primary: "bg-white text-black border-transparent",
            secondary: "bg-zinc-900 text-white border-white/10 hover:border-white/20",
            emerald: "bg-emerald-500 text-black border-transparent",
            outline: "bg-white/[0.03] text-white border-white/10 hover:border-white/20",
            ghost: "bg-transparent text-white/70 hover:text-white border-transparent"
        };

        const sizeStyles = {
            xs: "px-4 py-1.5 text-[9px] tracking-[0.2em]",
            sm: "px-5 py-2.5 text-[10px] tracking-[0.22em]",
            md: "px-7 py-3 text-[11px] tracking-[0.24em]",
            lg: "px-9 py-4 text-[12px] tracking-[0.26em]"
        };

        const content = (
            <>
                {/* Magnetic Mouse-following Glow */}
                <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(80px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.08), transparent)`,
                    }}
                />

                {/* Subtle Hover Reveal Overlay */}
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300 pointer-events-none" />

                {/* Text & Icon Container */}
                <span className="relative z-10 flex items-center justify-center gap-2.5">
                    {children}
                    {showArrow && (
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-1" />
                    )}
                </span>

                {/* Shimmer Glint Animation */}
                <span className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <span className="absolute inset-0 w-[200%] h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
                </span>

                {/* Border Beam Animation for specific variants */}
                {(variant === "outline" || variant === "secondary") && (
                    <span className="absolute inset-0 rounded-lg pointer-events-none">
                        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_40%,rgba(255,255,255,0.2)_50%,transparent_60%,transparent_100%)]" />
                        <span className="absolute inset-px bg-black pointer-events-none rounded-[7px] -z-10" />
                    </span>
                )}
            </>
        );

        const commonClasses = cn(
            "group relative inline-flex items-center justify-center font-bold uppercase transition-all duration-500 rounded-lg border backdrop-blur-md overflow-hidden",
            variantStyles[variant],
            sizeStyles[size],
            className
        );

        const motionProps = {
            whileHover: { y: -1 },
            whileTap: { scale: 0.98 },
            onMouseMove: handleMouseMove
        };

        if (href) {
            return (
                <Link href={href} className={commonClasses}>
                    <motion.span
                        className="w-full h-full flex items-center justify-center"
                        {...motionProps}
                    >
                        {content}
                    </motion.span>
                </Link>
            );
        }

        return (
            <motion.button
                ref={buttonRef}
                className={commonClasses}
                {...motionProps}
                {...props}
            >
                {content}
            </motion.button>
        );
    }
);

PremiumButton.displayName = "PremiumButton";
