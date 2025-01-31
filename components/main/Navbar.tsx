'use client'

import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
};

const Navbar = () => {
    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2a0f61]/50  bg-[#03001417 backdrop-blur-md] z-50 px-10'>
            <div className='w-full h-full flex flow-row items-center justify-between m-auto px-[10px]'>
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
                <div className='w-[450px] h-full flex flex-row items-center justify-between md:mr-20'>
                    <div className='flex w-full h-auto items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href="#about-me" onClick={(e) => handleSmoothScroll(e, 'about-me')} className='cursor-pointer'>About me</a>
                        <a href="#skills" onClick={(e) => handleSmoothScroll(e, 'skills')} className='cursor-pointer'>Skills</a>
                        <a href="#projects" onClick={(e) => handleSmoothScroll(e, 'projects')} className='cursor-pointer'>Projects</a>
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
            </div>
        </div>
    )
}

export default Navbar