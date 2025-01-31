import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Community</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <a href="https://github.com/Devnehate" className="text-[15px] ml-[6px]">Github</a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <a href="https://discord.com/channels/@me/1217344892246949950" className="text-[15px] ml-[6px]">Discord</a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <a href="https://youtube.com" className="text-[15px] ml-[6px]">Youtube</a>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <a href="https://www.instagram.com/_nehate_dev_004" className="text-[15px] ml-[6px]">Instagram</a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <a href="https://x.com/ndev7567" className="text-[15px] ml-[6px]">Twitter</a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <a href="https://www.linkedin.com/in/dev-nehate-4a22841a2" className="text-[15px] ml-[6px]">Linkedin</a>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Become Sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="https://www.linkedin.com/in/dev-nehate-4a22841a2" className="text-[15px] ml-[6px]">Learning about me</a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="mailto:ndev7567@gmail.com" className="text-[15px] ml-[6px]">ndev7567@gmail.com</a>
                        </p>
                    </div>
                </div>

                <div className="mb-[20px] mt-5 text-[15px] text-center">
                    &copy; MERN Maestro 2024 Inc. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer