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
        title: "AI-Teams",
        description: "A distributed multi-agent research swarm powered by LangGraph and Google Gemini. Validates, decomposes, and executes complex research queries using a hierarchical team of autonomous AI agents. Automated research team orchestration using LangGraph and Google Gemini",
        tags: ["LangGraph", "LangChain", "Python"],
        github: "https://github.com/Sarthak-Jadhav-Dev/AI-Team",
        gradient: "from-blue-500 to-purple-600"
    },
    {
        title: "KYC-AML",
        description: "KYC & AML Compliance Orchestrator A powerful low-code engine to visually design and deploy compliance workflows. Features real-time Transaction Monitoring (TM), KYC identity verification, and AML screening nodes using Next.js, React Flow, and TypeScript.",
        tags: ["React", "Node.js", "MongoDB", "Docker","TypeScript","Next.js"],
        github: "https://github.com/Sarthak-Jadhav-Dev/KYC-AML",
        gradient: "from-green-500 to-emerald-600"
    },
    {
        title: "Cubestry",
        description: "Cubestry is an open-source web application designed to help users and developers test, compare, and understand different AI models side-by-side. By providing a unified interface for multiple LLM providers, Cubestry allows you to battle-test prompts and models to find the perfect fit for your specific needs.",
        tags: ["React", "Node.js", "MongoDB","TypeScript","Next.js"],
        github: "https://github.com/Sarthak-Jadhav-Dev/Cubestry",
        demo: "https://cubestry.vercel.app",
        gradient: "from-pink-500 to-rose-600"
    },
    {
        title: "Freelance Website for Kids Trans EduTech Pvt.Ltd",
        description: "A modern and responsive website for Kids Trans EduTech Pvt.Ltd, a company that provides educational services to children.",
        tags: ["React", "Node.js", "MongoDB"],
        github: "https://github.com/Sarthak-Jadhav-Dev/KidsTransEduTech",
        demo: "https://kidstransedutech.com",
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
