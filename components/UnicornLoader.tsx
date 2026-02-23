"use client";

import Script from "next/script";
import { useEffect } from "react";

export const UnicornLoader = () => {
    useEffect(() => {
        // Double check initialization on mount/navigation
        // @ts-expect-error
        if (typeof window !== "undefined" && window.UnicornStudio) {
            // @ts-expect-error
            window.UnicornStudio.init();
        }
    }, []);

    return (
        <Script
            src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
            strategy="afterInteractive"
            onLoad={() => {
                // @ts-expect-error - UnicornStudio initialization
                if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
                    // @ts-expect-error
                    window.UnicornStudio.init();
                    // @ts-expect-error
                    window.UnicornStudio.isInitialized = true;
                }
            }}
        />
    );
};
