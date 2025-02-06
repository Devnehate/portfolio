"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col md:flex-row max-sm:flex-col items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]"
        >
            <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
                <motion.div
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] bg-[#2a2a2ac7] opacity-[0.9]"
                >
                    <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px]">
                        MernStack Developer Portfolio
                    </h1>
                </motion.div>

                {/* <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
                >
                    <span>
                        Providing
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            the best{" "}
                        </span>
                        project experience
                    </span>
                </motion.div> */}

                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white w-auto h-auto"
                >
                    <span className="">
                        Hello
                    </span>
                    <span className=" max-lg:-mt-5">
                        <span >
                            I&apos;m
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                            {" "}
                            Dev Nehate{" "}
                        </span>
                    </span>

                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="text-base md:text-lg text-gray-400 my-5 max-w-[600px]"
                >
                    I&apos;m a MernStack Developer with experience in Website and Software development. Check out my projects and skills.
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    href="https://github.com/Devnehate"
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                >
                    Learn More!
                </motion.a>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
            >
                <Image
                    src="/mainIconsdark.svg"
                    alt="work icons"
                    height={650}
                    width={650}
                    className="w-[320px] h-[320px] md:w-[650px] md:h-[650px]"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroContent;