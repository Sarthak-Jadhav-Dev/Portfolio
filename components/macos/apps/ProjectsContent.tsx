"use client";

import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCodeBranch } from 'react-icons/fa';

interface Project {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    demo?: string;
    stars?: number;
    forks?: number;
    gradient: string;
}

const projects: Project[] = [
    {
        title: "Portfolio Website",
        description: "A macOS-inspired portfolio website built with Next.js and TailwindCSS featuring draggable windows and dock animations.",
        tags: ["Next.js", "TailwindCSS", "Framer Motion"],
        github: "https://github.com",
        demo: "https://example.com",
        stars: 42,
        forks: 12,
        gradient: "from-blue-500 to-purple-600"
    },
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com",
        stars: 28,
        forks: 8,
        gradient: "from-green-500 to-emerald-600"
    },
    {
        title: "Chat Application",
        description: "Real-time messaging app with WebSocket support, file sharing, and end-to-end encryption.",
        tags: ["TypeScript", "Socket.io", "PostgreSQL"],
        github: "https://github.com",
        demo: "https://example.com",
        stars: 35,
        forks: 15,
        gradient: "from-pink-500 to-rose-600"
    },
    {
        title: "Task Management Tool",
        description: "Collaborative project management tool with drag-and-drop boards, deadlines, and team collaboration features.",
        tags: ["Vue.js", "Firebase", "Vuetify"],
        github: "https://github.com",
        stars: 19,
        forks: 5,
        gradient: "from-orange-500 to-amber-600"
    },
];

export const ProjectsContent = () => {
    return (
        <div className="h-full w-full bg-gray-50 dark:bg-[#121212] overflow-auto">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/80 dark:bg-[#1e1e1e]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 p-6">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Projects</h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">A showcase of my recent work and side projects</p>
            </div>

            {/* Projects Grid */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-white dark:bg-[#1e1e1e] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        {/* Gradient Header */}
                        <div className={`h-24 bg-linear-to-br ${project.gradient} relative`}>
                            <div className="absolute inset-0 bg-black/10" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-lg font-bold">{project.title}</h3>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                                    {project.stars && (
                                        <span className="flex items-center gap-1">
                                            <FaStar className="text-yellow-500" />
                                            {project.stars}
                                        </span>
                                    )}
                                    {project.forks && (
                                        <span className="flex items-center gap-1">
                                            <FaCodeBranch />
                                            {project.forks}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <FaGithub className="text-gray-600 dark:text-gray-400" />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                        >
                                            <FaExternalLinkAlt className="text-gray-600 dark:text-gray-400" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
