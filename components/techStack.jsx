"use client"

import { Heading } from "./heading";
import { ExperienceBox } from "./UI/experienceBox";
import blender from "@/assets/icons/blender.svg";
import next from "@/assets/icons/nextjs.svg"
import css from "@/assets/icons/css.svg";
import html from "@/assets/icons/html.svg";
import js from "@/assets/icons/javascript.svg";
import rct from "@/assets/icons/react.svg"
import ts from "@/assets/icons/typescript.svg";
import solidity from "@/assets/icons/solidity.svg";
import tailwind from "@/assets/icons/tailwind-css.svg";
import {
    SiRedis, SiPostgresql, SiDocker, SiMongodb, SiGraphql,
    SiCloudflare, SiFirebase, SiExpo, SiBun, SiPrisma, SiStripe,
    SiOpenai, SiVercel,
} from "react-icons/si";
import { FaNodeJs, FaAws, FaPython } from "react-icons/fa";
import { MdOutlineQueue } from "react-icons/md";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const arr = [
    { image: html,       name: "HTML",          time: "58 months" },
    { image: css,        name: "CSS",            time: "58 months" },
    { image: js,         name: "JavaScript",     time: "56 months" },
    { image: rct,        name: "ReactJs",        time: "54 months" },
    { image: tailwind,   name: "TailwindCSS",    time: "54 months" },
    { image: next,       name: "NextJs",         time: "52 months" },
    { icon: <FaNodeJs />,     name: "Node.js",       time: "48 months" },
    { icon: <SiMongodb />,    name: "MongoDB",       time: "46 months" },
    { image: solidity,   name: "Solidity",       time: "40 months" },
    { image: ts,         name: "TypeScript",     time: "38 months" },
    { icon: <FaPython />,     name: "Python",        time: "30 months" },
    { icon: <SiPostgresql />, name: "PostgreSQL",    time: "18 months" },
    { icon: <FaAws />,        name: "AWS",            time: "16 months" },
    { icon: <SiDocker />,     name: "Docker",         time: "16 months" },
    { icon: <SiRedis />,      name: "Redis",          time: "10 months" },
    { icon: <MdOutlineQueue />, name: "BullMQ",       time: "8 months" },
    { icon: <SiCloudflare />, name: "CDN / CF",       time: "8 months" },
    { icon: <SiGraphql />,    name: "GraphQL",        time: "8 months" },
    { icon: <SiFirebase />,   name: "Firebase",       time: "10 months" },
    { icon: <SiBun />,        name: "Elysia / Bun",  time: "8 months" },
    { icon: <SiExpo />,       name: "Expo",           time: "6 months" },
    { icon: <SiPrisma />,     name: "Prisma",         time: "10 months" },
    { icon: <SiStripe />,     name: "Stripe",         time: "8 months" },
    { icon: <SiOpenai />,     name: "OpenAI",         time: "10 months" },
    { icon: <SiVercel />,     name: "Vercel",         time: "48 months" },
    { image: blender,    name: "Blender",        time: "8 months" },
]

export default function TechStack() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-80px" })

    return (
        <div id="techstack" className="text-center py-24">
            <Heading>Tech Stack</Heading>

            <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                className="text-blue-300/50 text-sm font-mono mb-8"
            >
                {arr.length} technologies · bar = experience depth
            </motion.p>

            <div ref={ref} className="flex flex-wrap items-center justify-center gap-3 max-w-6xl mx-auto">
                {arr.map((item, i) => (
                    <ExperienceBox key={item.name} image={item.image} icon={item.icon} text={item.name} time={item.time} index={i} />
                ))}
            </div>
        </div>
    )
}
