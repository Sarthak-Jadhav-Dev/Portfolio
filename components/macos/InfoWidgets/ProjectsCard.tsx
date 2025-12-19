"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { useDesktopStore } from '../store';

export const ProjectsCard = () => {
    const { openApp, closeApp, openApps } = useDesktopStore();
    const isOpen = openApps.includes('projects');

    const handleClick = () => {
        if (isOpen) {
            closeApp('projects');
        } else {
            openApp('projects');
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className={`w-full md:w-32 h-32 bg-white/90 dark:bg-[#2a2a2a]/80 flex flex-col items-center justify-center gap-3 rounded-2xl backdrop-blur-md border shadow-lg p-4 select-none cursor-pointer hover:shadow-xl transition-shadow ${isOpen ? 'border-purple-400 ring-2 ring-purple-400/30' : 'border-white/30'}`}
        >
            <div className='w-12 h-12 rounded-full bg-linear-to-br from-purple-400 to-purple-600 flex items-center justify-center'>
                <FaCode className="text-white text-xl" />
            </div>
            <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>Projects</span>
        </motion.div>
    );
};
