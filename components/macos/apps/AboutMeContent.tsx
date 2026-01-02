"use client";

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

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
                            alt="Profile"
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
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sarthak Jadhav</h1>
                        <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-1">
                            <FaMapMarkerAlt className="text-sm" />
                            Pune, Maharahstra, India
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <a href="https://github.com/Sarthak-Jadhav-Dev" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <FaGithub className="text-gray-700 dark:text-gray-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/sarthakshahajijadhav/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <FaLinkedin className="text-gray-700 dark:text-gray-300" />
                        </a>
                        <a href="https://www.instagram.com/sarthakshahajijadhav/?igsh=MWo3YTZ3OHBweGprNA%3D%3D#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <FaInstagram className="text-gray-700 dark:text-gray-300" />
                        </a>
                        <a href="mailto:sarthakjadhav2006@gmail.com" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                            <FaEnvelope className="text-gray-700 dark:text-gray-300" />
                        </a>
                    </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-8">
                    I'm a 19-year-old developer and content creator from Pune, Maharashtra, India, with a passion for building innovative tech solutions and engaging digital content. My journey spans multiple domains—from MERN Stack development , DEVOPS , GenAI to content creation and emerging technologies like quantum computing.
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-8">
                    Technical Expertise
I specialize in full-stack web development using the MERN stack and Next.js, building SaaS applications with MongoDB Atlas and modern UI frameworks like Shadcn UI. My programming toolkit includes JavaScript/TypeScript, Python, and C++, which I apply across various domains from web development , Agentic AI Development , data mining and algorithm implementation. I'm currently developing a FinTech SaaS product focused on KYC/AML automation with transaction monitoring capabilities, integrating machine learning models to rank alerts and suppress false positives.
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-8">
                    Research & Innovation
My research interests lie at the intersection of computer science and emerging technologies. I'm working on a research paper analyzing parallelism in the Apriori algorithm for efficient data mining of large datasets. As a beginner in quantum computing, I'm exploring fundamental concepts like superposition and entanglement while studying quantum key distribution applications. I approach complex research papers systematically, breaking down methodologies, experiments, and workflows to gain deep understanding. I have also worked in Project in Creating
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-8">
                    Current Learning Path
I'm actively expanding my skill set as a beginner in several areas: mastering GenAI for Agentic AI and automation, deepening my understanding of object-oriented programming principles including inheritance and dynamic binding, and exploring quantum computing fundamentals. I prefer practical learning approaches, often seeking lightweight ML models and existing solutions before building custom implementations.
                </p>

                {/* Info Cards */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center gap-3 mb-2">
                            <FaGraduationCap className="text-blue-500 text-xl" />
                            <span className="font-semibold text-gray-900 dark:text-white">Education</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            B.Tech in Computer Science from Vishwakarma Institute of Technology , Pune
                        </p>
                    </div>
                    <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800">
                        <div className="flex items-center gap-3 mb-2">
                            <FaBriefcase className="text-purple-500 text-xl" />
                            <span className="font-semibold text-gray-900 dark:text-white">Experience</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Full Stack Developer
                        </p>
                    </div>
                </div> */}

                {/* Skills */}
                {/* <div className="mt-8">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {['MongoDB' , 'Node.js' , 'Express.js' , 'React.js' , 'Next.js' , 'TypeScript' , 'TailwindCSS'].map((skill) => (
                            <span key={skill} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300">
                                {skill}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                        {['Git-GitHub','Docker','Kubernetes','AWS','Jenkins'].map((skill) => (
                            <span key={skill} className="px-3 py-1 rounded-full bg-purple-50 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    );
};
