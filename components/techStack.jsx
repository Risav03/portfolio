"use client"

import { useGlobalContext } from "../context/MainContext";
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

const arr = [
    {
        image: html,
        name: "HTML",
        time: "58 months"
    },
    {
        image: css,
        name: "CSS",
        time: "58 months"
    }, {
        image: js,
        name: "JavaScript",
        time: "56 months"
    }, {
        image: rct,
        name: "ReactJs",
        time: "54 months"
    }, {
        image: tailwind,
        name: "TailwindCSS",
        time: "54 months"
    }, {
        image: next,
        name: "NextJs",
        time: "52 months"
    }, {
        image: solidity,
        name: "Solidity",
        time: "40 months"
    }, {
        image: ts,
        name: "TypeScript",
        time: "38 months"
    },
    {
        image: blender,
        name: "Blender",
        time: "8 months"
    },
]


export default function TechStack(){

    const {setTheme} = useGlobalContext();

    return(
        <div id="experience" className="text-center py-20">
            <Heading>Tech Stack</Heading>
            
            <div className="flex flex-wrap items-center justify-center gap-3">
                {arr.map((item)=>(
                    <ExperienceBox image={item.image} text={item.name} time={item.time} />
                ))}
            </div>
        </div>
    )
}