"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Rnd } from "react-rnd";
import { useDesktopStore } from "./store";
import { cn } from "@/lib/utils";
import { IoClose, IoRemove, IoExpand } from "react-icons/io5";

interface WindowProps {
    id: string;
    title: string;
    children: React.ReactNode;
    defaultWidth?: number;
    defaultHeight?: number;
}

export const Window = ({ id, title, children, defaultWidth = 600, defaultHeight = 400 }: WindowProps) => {
    const { focusedApp, closeApp, toggleMinimize, bringToFront, minimizedApps } = useDesktopStore();
    const isFocused = focusedApp === id;
    const isMinimized = minimizedApps.includes(id);

    // Initial Position Calculation
    const [isMounted, setIsMounted] = useState(false);
    const [initialPosition, setInitialPosition] = useState({ x: 100, y: 100 });
    const [position, setPosition] = useState({ x: 100, y: 100 });

    useEffect(() => {
        if (typeof window !== "undefined") {
            const initialPos = {
                x: window.innerWidth / 2 - defaultWidth / 2,
                y: 100
            };
            setInitialPosition(initialPos);
            setPosition(initialPos);
            setIsMounted(true);
        }
    }, [defaultWidth]);

    // Animations
    const variants: Variants = {
        initial: { scale: 0.8, opacity: 0, y: 20 },
        animate: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        }
    };

    if (isMinimized) return null;
    if (!isMounted) return null;

    return (
        <Rnd
            default={{
                x: initialPosition.x,
                y: initialPosition.y,
                width: defaultWidth,
                height: defaultHeight,
            }}
            minWidth={300}
            minHeight={200}
            bounds="parent"
            position={position}
            onDragStop={(e, d) => {
                // Prevent windows from being dragged above y=28 (TopBar height)
                const newY = Math.max(28, d.y);
                setPosition({ x: d.x, y: newY });
            }}
            dragHandleClassName="window-drag-handle"
            onMouseDown={() => bringToFront(id)}
            style={{ zIndex: isFocused ? 50 : 10 }}
            enableResizing={{
                bottom: true,
                bottomRight: true,
                right: true,
                left: true,
                bottomLeft: true,
                top: false,
                topLeft: false,
                topRight: false,
            }}
        >
            <motion.div
                initial="initial"
                animate="animate"
                variants={variants}
                className={cn(
                    "flex flex-col h-full w-full rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl border border-white/20",
                    "bg-white/80 dark:bg-[#1e1e1e]/80", // Mac-like translucent background
                    isFocused ? "shadow-2xl ring-1 ring-white/10" : "shadow-lg grayscale-[0.05] opacity-95"
                )}
            >
                {/* Title Bar - Drag Handle */}
                <div
                    className="window-drag-handle flex h-10 w-full shrink-0 items-center justify-between bg-linear-to-b from-white/50 to-transparent px-4 dark:from-white/10 cursor-default"
                    onDoubleClick={() => toggleMinimize(id)}
                >
                    <div className="flex items-center gap-2 group z-20" onMouseDown={(e) => e.stopPropagation()}>
                        <button
                            onClick={(e) => { e.stopPropagation(); closeApp(id); }}
                            className="flex h-3 w-3 items-center justify-center rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 text-[8px] text-black/0 group-hover:text-black/60 transition-colors"
                        >
                            <IoClose />
                        </button>
                        <button
                            onClick={(e) => { e.stopPropagation(); toggleMinimize(id); }}
                            className="flex h-3 w-3 items-center justify-center rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80 text-[8px] text-black/0 group-hover:text-black/60 transition-colors"
                        >
                            <IoRemove />
                        </button>
                        <button
                            className="flex h-3 w-3 items-center justify-center rounded-full bg-[#28C840] hover:bg-[#28C840]/80 text-[8px] text-black/0 group-hover:text-black/60 transition-colors"
                        >
                            <IoExpand className="rotate-45" />
                        </button>
                    </div>

                    <div className="flex-1 text-center text-sm font-medium text-black/70 dark:text-white/70 select-none">
                        {title}
                    </div>

                    <div className="w-14" /> {/* Spacer for centering title */}
                </div>

                {/* Content Area */}
                <div className="flex-1 w-full overflow-auto bg-transparent relative cursor-auto" onMouseDown={(e) => e.stopPropagation()}>
                    {children}
                    {!isFocused && <div className="absolute inset-0 bg-transparent pointer-events-none" />}
                </div>
            </motion.div>
        </Rnd>
    );
};
