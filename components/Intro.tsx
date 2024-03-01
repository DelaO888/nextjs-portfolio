"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { setTextRange } from "typescript";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Intro() {

    const { ref } = useSectionInView("Home", 0.5)
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.5
                        }}>
                        <Image src="https://media.licdn.com/dms/image/D4E03AQFpaMrdtrV8tQ/profile-displayphoto-shrink_800_800/0/1694485778553?e=1712793600&v=beta&t=KnGNNnBreP-3Nv13WCWXceW_jRlAL8CeZchu98u2_Cc" alt="Ivan Portrait" width="250" height="250" quality="95" priority={true}
                            className="h-32 w-32 rounded-full object-cover border-[0.35rem] border-white shadow-xl"></Image>
                    </motion.div>

                    <motion.span className="text-4xl absolute bottom-0 right-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.4,
                            duration: 0.7
                        }}>
                        👋
                    </motion.span>
                </div>
            </div>
            <div>
                <motion.h1 className="text-center font-medium mb-10 mt-4 px-4 !leading-[1.5] sm:text-xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}>
                    <p className="text-4xl/[40px]">Ivan Antonio De la O Rangel </p>
                    <p className="text-xl">Junior Web Developer</p>
                </motion.h1>
            </div>
            <motion.div className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2
                }}>
                <Link href="#contact" className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition group"
                    onClick={() => {
                        setActiveSection("Contact")
                        setTimeOfLastClick(Date.now())
                    }}>Contact me here
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1" /> </Link>
                <a href="/CV - Portfolio.pdf" download={true} className="bg-white group px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10">
                    Download CV <HiDownload className="group-hover:translate-y-1 transition" />
                </a>

                <a href="https://www.linkedin.com/in/iv%C3%A1n-de-la-o-38bb7223a/" target="_blank" rel="noopener noreferrer" className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60">
                    <BsLinkedin ></BsLinkedin>
                </a>

                <a href="https://github.com/DelaO888" target="_blank" rel="noopener noreferrer" className="bg-white p-4 flex items-center gap-2 text-[1.35rem] rounded-full text-gray-700 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border hover:text-gray-950 border-black/10 dark:bg-white/10 dark:text-white/60">
                    <FaGithubSquare ></FaGithubSquare>
                </a>
            </motion.div>
        </section>
    )
}