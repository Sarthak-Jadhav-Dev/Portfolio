"use client";

import React, { useState } from "react";
import { TopBar } from "./TopBar";
import { Dock } from "./Dock";
import { Window } from "./Window";
import { Widgets } from "./Widgets";
import { useDesktopStore } from "./store";
import { apps } from "./apps-config";
import { CustomRightClick } from "./customRightClick";

export const Desktop = () => {
    const { openApps } = useDesktopStore();

    const [menu,setmenu] = useState<{x:number,y:number} | null>(null);
    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault(); // stop browser menu

        setmenu({
          x: e.clientX,
          y: e.clientY,
        });
      };

    const handleMenuClose = () => {
        setmenu(null);
      };

    return (
        <div onContextMenu={handleRightClick} className="relative h-screen w-full overflow-y-hidden bg-cover bg-center select-none"
            style={{ backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-2020-5120x2880-1455.jpg')" }}>

            {menu && (
                <CustomRightClick
                  x={menu.x}
                  y={menu.y}
                  onClose={handleMenuClose}
                />
              )}
            {/* Overlay for tint (optional) */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />


            <TopBar />

            <Widgets />

            {/* Desktop Area for Icons (optional) */}
            {/* We could map desktop shortcuts here if needed */}

            {/* Windows Layer */}
            <div className="absolute inset-0 z-0">
                {openApps.map((id) => {
                    const app = apps.find((a) => a.id === id);
                    if (!app) return null;
                    return (
                        <Window
                            key={app.id}
                            id={app.id}
                            title={app.title}
                            defaultWidth={app.width}
                            defaultHeight={app.height}
                        >
                            {app.component}
                        </Window>
                    );
                })}
            </div>

            <Dock />
        </div>
    );
};
