"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import { useDesktopStore } from '../store';

export const AboutMeCard = () => {
    const { openApp, closeApp, openApps } = useDesktopStore();
    const isOpen = openApps.includes('aboutMe');

    const handleClick = () => {
        if (isOpen) {
            closeApp('aboutMe');
        } else {
            openApp('aboutMe');
        }
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleClick}
            className={`w-full md:w-32 h-32 bg-white/90 dark:bg-[#2a2a2a]/80 flex flex-col items-center justify-center gap-3 rounded-2xl backdrop-blur-md border shadow-lg p-4 select-none cursor-pointer hover:shadow-xl transition-shadow ${isOpen ? 'border-blue-400 ring-2 ring-blue-400/30' : 'border-white/30'}`}
        >
            <div className='w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center'>
                <FaUser className="text-white text-xl" />
            </div>
            <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>About Me</span>
        </motion.div>
    );
};
