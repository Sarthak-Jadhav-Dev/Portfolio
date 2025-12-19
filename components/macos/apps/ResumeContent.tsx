"use client";

import React from 'react';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaBriefcase, FaGraduationCap, FaCode, FaCertificate } from 'react-icons/fa';

export const ResumeContent = () => {
    return (
        <div className="h-full w-full bg-white dark:bg-[#1e1e1e] overflow-auto">
            {/* Header */}
            <div className="bg-linear-to-r from-green-500 to-emerald-600 p-6 text-white">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold">Sarthak Jadhav</h1>
                        <p className="text-green-100 mt-1">Full Stack Developer</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                        <FaDownload />
                        <span className="text-sm">Download PDF</span>
                    </button>
                </div>
                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                    <span className="flex items-center gap-2">
                        <FaEnvelope /> sarthak@example.com
                    </span>
                    <span className="flex items-center gap-2">
                        <FaPhone /> +91 XXXXXXXXXX
                    </span>
                    <span className="flex items-center gap-2">
                        <FaMapMarkerAlt /> India
                    </span>
                    <span className="flex items-center gap-2">
                        <FaGithub /> github.com/sarthak
                    </span>
                    <span className="flex items-center gap-2">
                        <FaLinkedin /> linkedin.com/in/sarthak
                    </span>
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
                        Passionate full-stack developer with experience in building modern web applications.
                        Skilled in React, Next.js, Node.js, and cloud technologies. Strong problem-solving
                        abilities and a keen eye for creating intuitive user experiences.
                    </p>
                </section>

                {/* Experience */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-3 flex items-center gap-2">
                        <FaBriefcase className="text-green-500" /> Experience
                    </h2>
                    <div className="space-y-4">
                        <div className="relative pl-6 border-l-2 border-green-300 dark:border-green-700">
                            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-green-500" />
                            <h3 className="font-semibold text-gray-900 dark:text-white">Full Stack Developer</h3>
                            <p className="text-sm text-green-600 dark:text-green-400">Company Name • 2023 - Present</p>
                            <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400 list-disc list-inside space-y-1">
                                <li>Built and maintained web applications using React and Node.js</li>
                                <li>Collaborated with cross-functional teams to deliver features</li>
                                <li>Optimized application performance and user experience</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-3 flex items-center gap-2">
                        <FaGraduationCap className="text-blue-500" /> Education
                    </h2>
                    <div className="relative pl-6 border-l-2 border-blue-300 dark:border-blue-700">
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-500" />
                        <h3 className="font-semibold text-gray-900 dark:text-white">B.Tech in Computer Science</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400">University Name • 2020 - 2024</p>
                    </div>
                </section>

                {/* Skills */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-3 flex items-center gap-2">
                        <FaCode className="text-purple-500" /> Technical Skills
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            { name: 'React/Next.js', level: 90 },
                            { name: 'TypeScript', level: 85 },
                            { name: 'Node.js', level: 80 },
                            { name: 'Python', level: 75 },
                            { name: 'PostgreSQL', level: 70 },
                            { name: 'AWS/Cloud', level: 65 },
                        ].map((skill) => (
                            <div key={skill.name} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                                    <span className="text-gray-500 dark:text-gray-500">{skill.level}%</span>
                                </div>
                                <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-linear-to-r from-green-400 to-emerald-500 rounded-full"
                                        style={{ width: `${skill.level}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certifications */}
                <section>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-3 flex items-center gap-2">
                        <FaCertificate className="text-yellow-500" /> Certifications
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {['AWS Certified Developer', 'MongoDB Certified', 'React Certified'].map((cert) => (
                            <span key={cert} className="px-3 py-1 rounded-full bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 text-sm border border-yellow-200 dark:border-yellow-800">
                                {cert}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};
