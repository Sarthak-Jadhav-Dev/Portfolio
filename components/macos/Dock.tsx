"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { apps } from "./apps-config";
import { useDesktopStore } from "./store";
import { cn } from "@/lib/utils";

export const Dock = () => {
    const mouseX = useMotionValue(Infinity);
    const { openApp, closeApp, openApps, minimizedApps } = useDesktopStore();

    const handleIconClick = (appId: string) => {
        if (openApps.includes(appId)) {
            closeApp(appId);
        } else {
            openApp(appId);
        }
    };

    return (
        <div className="fixed bottom-2 md:bottom-4 left-0 right-0 z-100 flex justify-center">
            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="flex h-16 items-end gap-2 md:gap-4 rounded-2xl bg-white/20 px-2 md:px-4 pb-3 pt-2 backdrop-blur-2xl border border-white/20 dark:bg-black/20"
            >
                {apps.map((app) => (
                    <DockIcon
                        key={app.id}
                        mouseX={mouseX}
                        id={app.id}
                        title={app.title}
                        icon={app.icon}
                        isOpen={openApps.includes(app.id)}
                        onClick={() => handleIconClick(app.id)}
                    />
                ))}
            </motion.div>
        </div>
    );
};

const DockIcon = ({ mouseX, id, title, icon: Icon, isOpen, onClick }: any) => {
    const ref = React.useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <div className="flex flex-col items-center gap-1 group">
            {/* Tooltip usually goes here but standard tooltip title is fine for now on hover via browser title or custom */}
            <motion.div
                ref={ref}
                style={{ width }}
                onClick={onClick}
                className="aspect-square cursor-pointer rounded-xl bg-linear-to-br from-blue-400 to-blue-600 shadow-lg flex items-center justify-center relative hover:brightness-110 active:scale-95 transition-all text-white"
            >
                {/* For now all icons are generic blue gradients, ideally use real icons or specific colors per app */}
                <Icon className="h-1/2 w-1/2 text-white" />
            </motion.div>
            <div className={cn("h-1 w-1 rounded-full bg-black/50 dark:bg-white/50", isOpen ? "opacity-100" : "opacity-0")} />
        </div>
    );
};
