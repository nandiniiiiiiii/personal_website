"use client";
import React from 'react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiRust } from 'react-icons/si';
import { InfiniteMovingSkills } from './ui/InfiniteMovingSkills';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';
import { FaDocker } from 'react-icons/fa'; // Python and Docker icons
import { DiJava } from 'react-icons/di'; // Java icon
import { SiNextdotjs, SiPandas } from 'react-icons/si';
import { FaArrowDown } from 'react-icons/fa';

function HeroContact() {
    const handleScrollDown = () => {
        // Scroll down by 200 pixels
        window.scrollBy({
            top: 500, // Number of pixels to scroll down
            behavior: 'smooth' // Smooth scroll behavior
        });
    }

    const skills = [
        { icon: <FaReact /> },
        { icon: <FaNodeJs /> },
        { icon: <FaPython /> },
        { icon: <SiTailwindcss /> },
        { icon: <SiTypescript /> },
    ];

    const skills2 = [
        { icon: <SiRust /> },     // Python
        { icon: <DiJava /> },       // Java
        { icon: <SiNextdotjs /> },  // Next.js
        { icon: <FaDocker /> },     // Docker
        { icon: <SiPandas /> },     // Pandas
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-black overflow-hidden">
            <div className='flex justify-center items-center flex-col mt-40'>
                <InfiniteMovingSkills skills={skills} direction="left" speed="fast" />
                <InfiniteMovingSkills skills={skills2} direction="right" speed="fast" />
                <button
                    onClick={handleScrollDown}
                    className="text-gray-800 hover:text-gray-500 p-4 mt-20 hover:bg-gray-300 rounded-full transition-all duration-300 z-10"
                    style={{ position: 'relative', zIndex: 10 }} // Ensure it is on top
                >
                    <FaArrowDown className="text-3xl" />
                </button>
            </div>
            <ShootingStars />
            <StarsBackground />
        </div>
    )
}

export default HeroContact;