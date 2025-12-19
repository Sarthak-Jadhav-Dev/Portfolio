"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoSunny, IoCloud, IoRainy } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

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
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Get date components
    const month = currentTime.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const day = currentTime.getDate();

    // Calculate clock hand rotations
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Convert to 12-hour format for clock (0-11)
    const hour12 = hours % 12;

    const hourRotation = (hour12 * 30) + (minutes * 0.5); // 30° per hour + 0.5° per minute
    const minuteRotation = minutes * 6; // 6° per minute
    const secondRotation = seconds * 6; // 6° per second

    return (
        // Responsive container: stacked relative on mobile, fixed absolute on desktop
        <div className="relative mt-6 mx-auto w-[90%] md:absolute md:top-12 md:right-8 md:w-80 md:mx-0 md:mt-0 flex flex-col gap-6 z-0 pointer-events-none">

            {/* Calendar & Clock Row */}
            <div className="flex gap-4 pointer-events-auto">
                {/* Calendar Widget - Real Date */}
                <WidgetContainer className="w-36 h-36 bg-white/80 dark:bg-[#1e1e1e]/60 flex flex-col items-center justify-center">
                    <div className="text-red-500 font-bold text-lg uppercase">{month}</div>
                    <div className="text-5xl font-light text-black dark:text-white">{day}</div>
                </WidgetContainer>

                {/* Clock/Time Widget - Working Analog Clock */}
                <WidgetContainer className="w-36 h-36 bg-black/80 dark:bg-white/80 flex items-center justify-center relative overflow-hidden">
                    {/* Analog Clock Face */}
                    <div className="w-24 h-24 rounded-full border-2 border-white/30 dark:border-black/30 relative">
                        {/* Hour Hand */}
                        <div
                            className="absolute top-1/2 left-1/2 w-8 h-1 bg-white dark:bg-black origin-left -translate-y-1/2 rounded-full transition-transform duration-1000"
                            style={{ transform: `translateY(-50%) rotate(${hourRotation}deg)` }}
                        />
                        {/* Minute Hand */}
                        <div
                            className="absolute top-1/2 left-1/2 w-10 h-0.5 bg-white dark:bg-black origin-left -translate-y-1/2 rounded-full transition-transform duration-1000"
                            style={{ transform: `translateY(-50%) rotate(${minuteRotation}deg)` }}
                        />
                        {/* Second Hand */}
                        <div
                            className="absolute top-1/2 left-1/2 w-11 h-0.5 bg-red-500 origin-left -translate-y-1/2 rounded-full transition-transform duration-200"
                            style={{ transform: `translateY(-50%) rotate(${secondRotation}deg)` }}
                        />
                        {/* Center Dot */}
                        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </WidgetContainer>
            </div>

            {/* Weather Widget - Wide */}
            <WidgetContainer className="w-full h-40 bg-linear-to-br from-blue-400/80 to-blue-600/80 text-white pointer-events-auto relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <IoPersonCircleOutline  className="text-9xl text-white-100" />
                </div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div>
                        <h3 className="font-semibold text-lg">Socials</h3>
                        <span className="text-xs opacity-90">Connect with Me</span>
                    </div>
                    <div className='flex gap-4'>
                        <Link href={"https://www.instagram.com/sarthakshahajijadhav?igsh=MWo3YTZ3OHBweGprNA=="}><div className="rounded-xl p-0.5 hover:bg-black/30"><IoLogoInstagram className="text-5xl text-white-100" /></div></Link>
                        <Link href={"https://www.linkedin.com/in/sarthakshahajijadhav/"}><div className="rounded-xl p-0.5 hover:bg-black/30"><IoLogoLinkedin className="text-5xl text-white-100" /></div></Link>
                        <Link href={"https://github.com/Sarthak-Jadhav-Dev"}><div className="rounded-xl p-0.5 hover:bg-black/30"><IoLogoGithub className="text-5xl text-white-100" /></div></Link>
                    </div>
                </div>
            </WidgetContainer>

            {/* Battery / System Widget */}
            {/* <WidgetContainer className="w-full h-36 bg-green-500/20 border-green-500/30 backdrop-blur-xl pointer-events-auto">
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
            </WidgetContainer> */}

        </div>
    );
};
