"use client";

import React, { useState, useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { IoWifi, IoBatteryCharging, IoSearch } from "react-icons/io5";

export const TopBar = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-[110] flex h-8 w-full items-center justify-between bg-white/30 px-4 text-xs font-medium text-black backdrop-blur-md dark:bg-black/30 dark:text-white border-b border-white/10">
            <div className="flex items-center gap-4">
                <button className="text-lg hover:opacity-70">
                    <FaApple />
                </button>
                <div className="hidden font-bold sm:block">Finder</div>
                <div className="hidden gap-4 sm:flex">
                    <button className="hover:opacity-70">File</button>
                    <button className="hover:opacity-70">Edit</button>
                    <button className="hover:opacity-70">View</button>
                    <button className="hover:opacity-70">Go</button>
                    <button className="hover:opacity-70">Window</button>
                    <button className="hover:opacity-70">Help</button>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="hover:opacity-70">
                    <IoBatteryCharging className="text-lg" />
                </button>
                <button className="hover:opacity-70">
                    <IoWifi className="text-lg" />
                </button>
                <button className="hover:opacity-70">
                    <IoSearch className="text-lg" />
                </button>
                <button className="hover:opacity-70">
                    <div className="h-4 w-4 bg-transparent" /> {/* Control Center Icon placeholder */}
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M7 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm1 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z" />
                    </svg>
                </button>
                <span className="cursor-default">{time}</span>
            </div>
        </div>
    );
};
