import React from "react";
import { FaCompass, FaTerminal, FaFolder, FaUser, FaFileAlt, FaCode } from "react-icons/fa";
import { IoSettingsSharp, IoMail } from "react-icons/io5";
import { AboutMeContent } from "./apps/AboutMeContent";
import { ResumeContent } from "./apps/ResumeContent";
import { ProjectsContent } from "./apps/ProjectsContent";

export interface AppConfig {
    id: string;
    title: string;
    icon: React.ElementType;
    component: React.ReactNode;
    width?: number;
    height?: number;
}

const Placeholder = ({ text }: { text: string }) => (
    <div className="flex h-full w-full items-center justify-center bg-white dark:bg-[#1e1e1e] text-xl font-semibold text-gray-500">
        {text}
    </div>
);

export const apps: AppConfig[] = [
    // {
    //     id: "finder",
    //     title: "Finder",
    //     icon: FaFolder,
    //     component: <Placeholder text="Finder Content" />,
    //     width: 800,
    //     height: 400,
    // },
    // {
    //     id: "safari",
    //     title: "Safari",
    //     icon: FaCompass,
    //     component: <Placeholder text="Safari Browser" />,
    //     width: 1000,
    //     height: 400,
    // },
    // {
    //     id: "terminal",
    //     title: "Terminal",
    //     icon: FaTerminal,
    //     component: <div className="h-full w-full bg-black p-4 font-mono text-sm text-green-400">user@macbook:~$ <span className="animate-pulse">_</span></div>,
    //     width: 600,
    //     height: 400,
    // },
    {
        id: "mail",
        title: "Mail",
        icon: IoMail,
        component: <Placeholder text="Inbox (0)" />,
        width: 900,
        height: 400,
    },
    // {
    //     id: "settings",
    //     title: "Settings",
    //     icon: IoSettingsSharp,
    //     component: <Placeholder text="System Preferences" />,
    //     width: 700,
    //     height: 400,
    // },
    // {
    //     id: "portfolio",
    //     title: "Portfolio",
    //     icon: FaUser,
    //     component: <Placeholder text="My Portfolio Content" />,
    //     width: 900,
    //     height: 400,
    // },
    {
        id: "aboutMe",
        title: "About Me",
        icon: FaUser,
        component: <AboutMeContent />,
        width: 700,
        height: 400,
    },
    {
        id: "resume",
        title: "Resume",
        icon: FaFileAlt,
        component: <ResumeContent />,
        width: 800,
        height: 400,
    },
    {
        id: "projects",
        title: "Projects",
        icon: FaCode,
        component: <ProjectsContent />,
        width: 900,
        height: 400,
    }
];
