"use client";

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

export const AboutMeContent = () => {
    return (
        <div className="h-full w-full bg-white dark:bg-[#1e1e1e] overflow-auto">
            {/* Hero Section */}
            <div className="relative h-24 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute -bottom-16 left-8">
                    <div className="w-32 h-32 rounded-full border-4 border-white dark:border-[#1e1e1e] overflow-hidden shadow-xl">
                        <Image
                            src="https://avatars.githubusercontent.com/u/202232052?s=400&u=3de5df0475728c2f72b076181cf57b3a79feb0bd&v=4"
                            alt="Sarthak Jadhav"
                            width={128}
                            height={128}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="pt-20 px-8 pb-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sarthak Shahaji Jadhav</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">Full Stack Developer · DevOps · Generative AI</p>
                        <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-1 text-sm">
                            <FaMapMarkerAlt className="text-sm" />
                            Pune, Maharashtra, India
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <a href="https://github.com/Sarthak-Jadhav-Dev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="GitHub">
                            <FaGithub className="text-gray-700 dark:text-gray-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/sarthakshahajijadhav/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="LinkedIn">
                            <FaLinkedin className="text-gray-700 dark:text-gray-300" />
                        </a>
                        <a href="https://www.instagram.com/sarthakshahajijadhav/?igsh=MWo3YTZ3OHBweGprNA%3D%3D#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Instagram">
                            <FaInstagram className="text-gray-700 dark:text-gray-300" />
                        </a>
                        <a href="mailto:sarthakjadhav200206@gmail.com" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" title="Email">
                            <FaEnvelope className="text-gray-700 dark:text-gray-300" />
                        </a>
                    </div>
                </div>

                {/* About */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">
                    I&apos;m a 19-year-old developer from Pune, Maharashtra, India, with a passion for building innovative tech solutions.
                    My journey spans full-stack development (MERN), DevOps, and Generative AI — from crafting SaaS products to
                    orchestrating multi-agent AI systems. I&apos;m currently pursuing B.Tech in Computer Science at Vishwakarma Institute
                    of Technology, Pune, with a CGPA of 9.4.
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-5">
                    I specialize in building production-ready applications using the MERN stack and Next.js, integrating LLM-powered workflows,
                    RAG pipelines, and agentic AI systems with LangChain and LangGraph. On the DevOps side, I work with Docker, Kubernetes,
                    AWS, Terraform, and CI/CD pipelines (Jenkins/GitHub Actions) to ship reliable, scalable software.
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-8">
                    Beyond coding, I explore research at the intersection of AI and systems — from parallelism in data mining algorithms
                    to quantum computing fundamentals. I enjoy breaking down complex papers and turning ideas into working prototypes.
                    Currently building <span className="font-medium text-blue-600 dark:text-blue-400">Plotoris</span>, an AI-powered research platform, and previously built{' '}
                    <span className="font-medium text-purple-600 dark:text-purple-400">Inspectra</span>, an agentic AI coding assistant for terminal and Telegram.
                </p>

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center gap-3 mb-2">
                            <FaGraduationCap className="text-blue-500 text-xl" />
                            <span className="font-semibold text-gray-900 dark:text-white text-sm">Education</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            B.Tech Computer Science<br />
                            VIT Pune · CGPA 9.4<br />
                            2024 – 2028
                        </p>
                    </div>
                    <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center gap-3 mb-2">
                            <FaBriefcase className="text-purple-500 text-xl" />
                            <span className="font-semibold text-gray-900 dark:text-white text-sm">Experience</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            Web Developer (Part-Time)<br />
                            Kids Trans EduTech Pvt. Ltd<br />
                            Apr 2025 – Dec 2025
                        </p>
                    </div>
                    <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                        <div className="flex items-center gap-3 mb-2">
                            <FaCode className="text-green-500 text-xl" />
                            <span className="font-semibold text-gray-900 dark:text-white text-sm">Focus Areas</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                            MERN Stack · Next.js<br />
                            DevOps · Cloud (AWS)<br />
                            Generative & Agentic AI
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div>
                    <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-3">Skills</h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {['MongoDB', 'Node.js', 'Express.js', 'React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill) => (
                            <span key={skill} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Git', 'GitHub'].map((skill) => (
                            <span key={skill} className="px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 text-xs text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {['LangChain', 'LangGraph', 'OpenAI API', 'Gemini API', 'Ollama', 'RAG', 'Python'].map((skill) => (
                            <span key={skill} className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-xs text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
