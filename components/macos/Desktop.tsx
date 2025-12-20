"use client";

import React, { useState } from "react";
import { TopBar } from "./TopBar";
import { Dock } from "./Dock";
import { Window } from "./Window";
import { Widgets } from "./Widgets";
import { useDesktopStore } from "./store";
import { apps } from "./apps-config";
import { CustomRightClick } from "./customRightClick";
import { Personcards } from "./InfoWidgets/Personcards";
import { AboutMeCard } from "./InfoWidgets/AboutMeCard";
import { ResumeCard } from "./InfoWidgets/ResumeCard";
import { ProjectsCard } from "./InfoWidgets/ProjectsCard";

export const Desktop = () => {
  const { openApps } = useDesktopStore();

  const [menu, setmenu] = useState<{ x: number, y: number } | null>(null);
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
    <div onContextMenu={handleRightClick} className="relative h-screen w-full overflow-y-auto md:overflow-y-hidden bg-cover bg-center select-none pb-24 md:pb-0"
      style={{ backgroundImage: "url('https://4kwallpapers.com/images/wallpapers/macos-big-sur-apple-layers-fluidic-colorful-wwdc-2020-5120x2880-1455.jpg')" }}>

      {menu && (
        <CustomRightClick
          x={menu.x}
          y={menu.y}
          onClose={handleMenuClose}
        />
      )}
      {/* Overlay for tint (optional) */}
      <div className="fixed inset-0 bg-black/10 pointer-events-none" />


      <TopBar />
      <Personcards />

      {/* Info Widget Cards - Responsive Grid */}
      <div className="relative mt-4 mx-auto w-[90%] md:absolute md:top-56 md:left-8 md:w-auto md:mx-0 md:mt-0 flex  gap-2 z-10">
        <AboutMeCard />
        <ResumeCard />
        <ProjectsCard />
      </div>

      <Widgets />

      {/* Desktop Area for Icons (optional) */}
      {/* We could map desktop shortcuts here if needed */}

      {/* Windows Layer - pointer-events-none so it doesn't block clicks on widgets below */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {openApps.map((id) => {
          const app = apps.find((a) => a.id === id);
          if (!app) return null;
          return (
            <div key={app.id} className="pointer-events-auto">
              <Window
                id={app.id}
                title={app.title}
                defaultWidth={app.width}
                defaultHeight={app.height}
              >
                {app.component}
              </Window>
            </div>
          );
        })}
      </div>

      <Dock />
    </div>
  );
};
