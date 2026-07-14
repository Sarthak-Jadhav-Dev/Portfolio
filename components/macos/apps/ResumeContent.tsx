"use client";

import React from 'react';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaBriefcase, FaGraduationCap, FaCode, FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

export const ResumeContent = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Sarthak-Jadhav-Campus-Intern-Resume.pdf';
        link.download = 'Sarthak-Jadhav-Campus-Intern-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="h-full w-full bg-white dark:bg-[#1e1e1e] overflow-auto">
            {/* Header */}
            <div className="bg-linear-to-r from-stone-500 to-stone-700 p-6 text-white">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold tracking-wide">Sarthak Shahaji Jadhav</h1>
                        <p className="text-stone-200 mt-1 text-sm">Full Stack Developer · DevOps · Generative AI</p>
                    </div>
                    <button
                        onClick={handleDownload}
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm font-medium"
                    >
                        <FaDownload />
                        <span>Download PDF</span>
                    </button>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 text-sm text-stone-100">
                    <a href="mailto:sarthakjadhav200206@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                        <FaEnvelope /> sarthakjadhav200206@gmail.com
                    </a>
                    <span className="flex items-center gap-2">
                        <FaPhone /> +91 9922995573
                    </span>
                    <span className="flex items-center gap-2">
                        <FaMapMarkerAlt /> Pune, Maharashtra, India
                    </span>
                    <a href="https://github.com/Sarthak-Jadhav-Dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                        <FaGithub /> github.com/Sarthak-Jadhav-Dev
                    </a>
                    <a href="https://www.linkedin.com/in/sarthakshahajijadhav/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                        <FaLinkedin /> linkedin.com/in/sarthakshahajijadhav
                    </a>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">

                {/* Summary */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-3">
                        Professional Summary
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        Motivated software developer with hands-on experience in full-stack development (MERN), DevOps, and Generative AI systems.
                        Skilled in building applications using the MERN stack, Next.js, and cloud tools. Experienced in developing LLM-powered
                        applications, multi-agent systems, and RAG pipelines. Passionate about solving complex problems and building
                        production-ready systems in Agentic AI and intelligent distributed systems.
                    </p>
                </section>

                {/* Experience */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-3 flex items-center gap-2">
                        <FaBriefcase className="text-blue-500" /> Experience
                    </h2>
                    <div className="space-y-4">
                        <div className="relative pl-6 border-l-2 border-blue-300 dark:border-blue-700">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">Web Developer (Part-Time)</h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Kids Trans EduTech Pvt. Ltd · April 2025 – December 2025 · Remote</p>
                            <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                                <li>Built and maintained modern web applications using Next.js and MERN stack.</li>
                                <li>Improved application performance and usability through optimized frontend architecture.</li>
                                <li>Assisted in deploying web applications and maintaining version control workflows.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-3 flex items-center gap-2">
                        <FaCode className="text-purple-500" /> Projects
                    </h2>
                    <div className="space-y-4">
                        {/* Plotoris */}
                        <div className="relative pl-6 border-l-2 border-purple-300 dark:border-purple-700">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500" />
                            <div className="flex items-center gap-3 flex-wrap">
                                <h3 className="font-semibold text-gray-900 dark:text-white">Plotoris – &quot;All in One Research Platform&quot;</h3>
                                <a href="https://github.com/Sarthak-Jadhav-Dev/-PLOTORIS-" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400 text-xs flex items-center gap-1">
                                    <FaGithub /> GitHub
                                </a>
                                <a href="https://plotoris.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400 text-xs flex items-center gap-1">
                                    <FaExternalLinkAlt /> Live
                                </a>
                            </div>
                            <p className="text-sm text-purple-600 dark:text-purple-400">March 2026 – May 2026 · MERN / Next.js / AI Agents</p>
                            <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                                <li>AI-powered SaaS platform designed for advanced digital research and multi-agent workflows.</li>
                                <li>All-in-one AI platform where researchers can manage and orchestrate their research tasks.</li>
                                <li>Improves results with context-rich AI Agents and RAG pipelines.</li>
                            </ul>
                        </div>

                        {/* Inspectra */}
                        <div className="relative pl-6 border-l-2 border-purple-300 dark:border-purple-700">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-purple-500" />
                            <div className="flex items-center gap-3 flex-wrap">
                                <h3 className="font-semibold text-gray-900 dark:text-white">Inspectra – Agentic AI Coding Assistant</h3>
                                <a href="https://github.com/Sarthak-Jadhav-Dev/Inspectra" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400 text-xs flex items-center gap-1">
                                    <FaGithub /> GitHub
                                </a>
                            </div>
                            <p className="text-sm text-purple-600 dark:text-purple-400">January 2026 – March 2026 · Bun / OpenRouter / TypeScript</p>
                            <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                                <li>Agentic AI coding assistant for the terminal and Telegram — autonomously researches, plans, and edits codebases.</li>
                                <li>Built using Bun, OpenRouter, and TypeScript with user-approval flows.</li>
                                <li>Personal assistant that connects your Telegram with your codebase seamlessly.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-3 flex items-center gap-2">
                        <FaGraduationCap className="text-blue-500" /> Education
                    </h2>
                    <div className="space-y-4">
                        <div className="relative pl-6 border-l-2 border-blue-300 dark:border-blue-700">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">B.Tech in Computer Science</h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Vishwakarma Institute of Technology, Pune · 2024 – 2028</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">CGPA: 9.4</p>
                        </div>
                        <div className="relative pl-6 border-l-2 border-blue-300 dark:border-blue-700">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-400" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">Class XII – Science (MH)</h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">Versatile Junior College, Pune · 2024</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">86.5%</p>
                        </div>
                        <div className="relative pl-6 border-l-2 border-blue-300 dark:border-blue-700">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-300" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">Class X – CBSE</h3>
                            <p className="text-sm text-blue-600 dark:text-blue-400">City International School, Kothrud, Pune · 2022</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">90.20%</p>
                        </div>
                    </div>
                </section>

                {/* Certifications */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-3 flex items-center gap-2">
                        <FaCertificate className="text-yellow-500" /> Certifications
                    </h2>
                    <div className="space-y-3">
                        <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/40">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Certified DevOps Engineer</h3>
                            <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-0.5">TuteDude · 2025</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                CI/CD pipelines, Docker containerization, AWS (EC2, S3, IAM), Linux administration, Bash & Python scripting, Git/GitHub.
                            </p>
                        </div>
                        <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-200 dark:border-yellow-800/40">
                            <h3 className="font-semibold text-gray-900 dark:text-white text-sm">Full Stack Generative and Agentic AI in Python</h3>
                            <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-0.5">Udemy · 2025</p>
                            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                Multi-agent systems, RAG pipelines, LangGraph & LangChain, OpenAI & Gemini APIs, Ollama, Docker.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-3 flex items-center gap-2">
                        <FaCode className="text-green-500" /> Technical Skills
                    </h2>
                    <div className="space-y-3">
                        <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Languages</p>
                            <div className="flex flex-wrap gap-2">
                                {['JavaScript', 'TypeScript', 'Python', 'C++'].map((skill) => (
                                    <span key={skill} className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-xs border border-green-200 dark:border-green-800">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Full Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Next.js', 'Tailwind CSS'].map((skill) => (
                                    <span key={skill} className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 text-xs border border-blue-200 dark:border-blue-800">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">DevOps & Cloud</p>
                            <div className="flex flex-wrap gap-2">
                                {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Jenkins', 'Git', 'GitHub'].map((skill) => (
                                    <span key={skill} className="px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 text-xs border border-orange-200 dark:border-orange-800">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">AI & ML</p>
                            <div className="flex flex-wrap gap-2">
                                {['LangChain', 'LangGraph', 'OpenAI API', 'Gemini API', 'Ollama', 'RAG', 'NumPy', 'Pandas', 'Redis'].map((skill) => (
                                    <span key={skill} className="px-3 py-1 rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-xs border border-purple-200 dark:border-purple-800">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};
