"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { IoSunny, IoCloud, IoRainy } from "react-icons/io5";

// Reusable Widget Wrapper
const WidgetContainer = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <motion.div
        whileHover={{ scale: 1.02 }}
        className={`rounded-2xl backdrop-blur-md border border-white/20 shadow-lg p-4 select-none cursor-default ${className}`}
    >
        {children}
    </motion.div>
);

export const Widgets = () => {
    return (
        // Fixed container on the right side
        <div className="absolute top-12 right-8 flex flex-col gap-6 w-80 z-0 pointer-events-none">

            {/* Calendar & Clock Row */}
            <div className="flex gap-4 pointer-events-auto">
                {/* Calendar Widget */}
                <WidgetContainer className="w-36 h-36 bg-white/80 dark:bg-[#1e1e1e]/60 flex flex-col items-center justify-center">
                    <div className="text-red-500 font-bold text-lg uppercase">DEC</div>
                    <div className="text-5xl font-light text-black dark:text-white">15</div>
                </WidgetContainer>

                {/* Clock/Time Widget - Mocked for visual */}
                <WidgetContainer className="w-36 h-36 bg-black/80 dark:bg-white/80 flex items-center justify-center relative overflow-hidden">
                    {/* Analog Clock Face Mock */}
                    <div className="w-24 h-24 rounded-full border-2 border-white/30 dark:border-black/30 relative">
                        <div className="absolute top-1/2 left-1/2 w-10 h-1 bg-white dark:bg-black origin-left -translate-y-1/2 rotate-45 rounded-full" /> {/* Hour */}
                        <div className="absolute top-1/2 left-1/2 w-11 h-0.5 bg-red-500 origin-left -translate-y-1/2 -rotate-12 rounded-full" /> {/* Minute */}
                    </div>
                </WidgetContainer>
            </div>

            {/* Weather Widget - Wide */}
            <WidgetContainer className="w-full h-40 bg-gradient-to-br from-blue-400/80 to-blue-600/80 text-white pointer-events-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <IoSunny className="text-9xl text-yellow-100" />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <h3 className="font-semibold text-lg">Cupertino</h3>
                        <span className="text-xs opacity-90">Mostly Sunny</span>
                    </div>
                    <div>
                        <span className="text-5xl font-light">21°</span>
                        <div className="flex gap-4 mt-2 text-sm opacity-80">
                            <span>H:24° L:18°</span>
                        </div>
                    </div>
                </div>
            </WidgetContainer>

            {/* Battery / System Widget */}
            <WidgetContainer className="w-full h-36 bg-green-500/20 border-green-500/30 backdrop-blur-xl pointer-events-auto">
                <div className="flex flex-col h-full justify-between text-green-900 dark:text-green-100">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-bold text-sm">System Normal</span>
                    </div>
                    <div className="space-y-2">
                        <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                            <div className="bg-green-500 h-full w-[85%]" />
                        </div>
                        <div className="flex justify-between text-xs font-medium opacity-70">
                            <span>MacBook Pro</span>
                            <span>85%</span>
                        </div>
                    </div>
                </div>
            </WidgetContainer>

        </div>
    );
};
