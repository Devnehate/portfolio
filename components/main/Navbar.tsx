'use client'

import { Socials } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    }
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0f61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto'>
                <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src="/NavLogo.png"
                        alt="logo"
                        width={70}
                        height={70}
                        className='cursor-pointer hover:animate-bounce'
                    />
                    <span className='font-bold ml-[10px] hidden md:block text-gray-300'>
                        MERN Maestro
                    </span>
                </a>
                <div className='hidden md:flex w-[450px] h-full flex-row items-center justify-between md:mr-20'>
                    <div className='flex w-full h-auto items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" onClick={(e) => handleSmoothScroll(e, 'about-me', setIsMenuOpen)} className='cursor-pointer'>About me</a>
                        <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills', setIsMenuOpen)} className='cursor-pointer'>Skills</a>
                        <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects', setIsMenuOpen)} className='cursor-pointer'>Projects</a>
                    </div>
                </div>
                <div className='flex flex-row gap-5 text-white'>
                    {
                        Socials.map((social) => {
                            return (
                                <a href={social.link} target="_blank" rel="noopener noreferrer" key={social.name}>
                                    <Image
                                        src={social.src}
                                        alt={social.name}
                                        width={23}
                                        height={23}
                                    />
                                </a>
                            )
                        })
                    }
                </div>
                <button className='md:hidden text-white' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </button>
            </div>
            {isMenuOpen && (
                <div className='md:hidden flex flex-col items-center bg-[#0300145e] text-gray-200 py-4 rounded-lg shadow-lg'>
                    <a href="#about-me" onClick={(e) => handleSmoothScroll(e, 'about-me', setIsMenuOpen)} className='cursor-pointer py-2 w-full text-center border-b border-gray-700'>About me</a>
                    <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills', setIsMenuOpen)} className='cursor-pointer py-2 w-full text-center border-b border-gray-700'>Skills</a>
                    <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects', setIsMenuOpen)} className='cursor-pointer py-2 w-full text-center'>Projects</a>
                </div>
            )}
        </div>
    )
}

export default Navbar