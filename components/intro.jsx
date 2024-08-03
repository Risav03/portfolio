"use client"

import Image from "next/image"
import mypic from "@/assets/me.png"
import mypic2 from "@/assets/me.jpeg"
import { FaEthereum, FaHtml5, FaNodeJs, FaReact, FaSquareXTwitter, FaVideo } from "react-icons/fa6";
import { FaLinkedin, FaPlaneDeparture } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { IoIosArrowBack, IoLogoGameControllerB } from "react-icons/io";
import { FloatingBoxes } from "./UI/floatingBoxes";
import { FloatingIcons } from "./UI/floatingIcons";
import { CiGlobe } from "react-icons/ci";
import { SiBlender, SiMongodb, SiSolana, SiSolidity, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill, RiNftFill } from "react-icons/ri";

export default function Intro(){

    const[work, setWork] = useState("");
    var workArr = ["CSE Undergrad" ,"Web Developer", "3D Artist", "Smart Contracts Developer", "Video Editor"];

    async function parseWork(){
        const currentWork = workArr[i];

        for(let j = 0; j<currentWork.length; j++){
            setWork(prev => prev + currentWork[j]);
            await delay(100);
        }

        await delay(2000);

        for(let k = 0; k<currentWork.length; k++){
            setWork(prev => prev.substring(0, prev.length-1));
            await delay(50);
        }

        await delay(500);

        if(i == 4){
            i = 0;
        }
        else{
            i++;
        }
        parseWork();
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    var i = 0;
    
    useEffect(()=>{
        parseWork();
    },[])


    return (
        <>
            <div className="w-screen h-screen max-md:hidden text-white relative md:-left-16 overflow-hidden -left-4 flex flex-col items-center justify-center">
                <div className="absolute max-2xl:top-0 2xl:top-5 z-50 pt-10">
                    <h1 className="text-[5rem] text-gray-400 font-bold">I am <span className="text-white">Risavdeb Patra</span></h1>
                    {/* <h3 className="text-[3rem] h-20 flex gap-1 items-end font-semibold bg-gradient-to-br from-green-500 to-emerald-500 text-transparent bg-clip-text">{work} <span className="h-2 w-10 -translate-y-4 bg-white animate-pulse"></span></h3> */}
                </div>
                
                

                <div className="absolute bottom-0 ">
                    <div className="relative top-40">
                        <div className="absolute z-[0] left-[5rem] blur-[150px] rounded-full  bg-gradient-radial from-green-500 to-emerald-500 max-2xl:w-[30rem] max-2xl:h-[30rem] 2xl:w-[40rem] 2xl:h-[40rem]">
                        </div>
                        <div className="absolute z-[2] left-[0.5rem] rounded-full max-2xl:w-[40rem] max-2xl:h-[40rem] 2xl:w-[45rem] 2xl:h-[45rem] border-8 border-green-500 border-double">
                        </div>
                        <div className="absolute z-[2] max-2xl:-top-[10rem] 2xl:-top-[12rem] max-2xl:-left-[10rem] 2xl:-left-[12rem] rounded-full max-2xl:w-[60rem] max-2xl:h-[60rem] 2xl:w-[70rem] 2xl:h-[70rem] border-4 border-green-500 border-dotted">
                        </div>

                        
                        <FloatingIcons className=" absolute z-50 -top-[2rem] left-[3rem] rotate-[20deg] "><FaEthereum className="text-emerald-500 text-xl" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 top-[5rem] left-[8rem] rotate-[-10deg] "><RiNextjsFill className="text-green-500 text-xl" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 -top-[10rem] right-[12rem] rotate-[-10deg] "><FaReact className="text-emerald-500 text-xl" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 -top-[8rem] left-[12rem] rotate-[-10deg] "><FaNodeJs className="text-emerald-500 text-lg" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 -top-[5rem] -left-[10rem] rotate-[-10deg] "><SiSolana className="text-green-500 text-2xl" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 top-[5rem] -right-[13rem] rotate-[10deg] "><AiFillGithub className="text-emerald-500 text-lg" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 top-[2rem] -left-[18rem] rotate-[10deg] "><SiTailwindcss className="text-emerald-500 text-lg" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 -top-[5rem] right-[6rem] rotate-[-10deg] "><CiGlobe className="text-green-500 text-2xl" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 top-[25rem] -left-[13rem] rotate-[5deg] "><FaPlaneDeparture className="text-green-500 text-xl" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 top-[10rem] -right-[5rem] rotate-[10deg] "><SiMongodb className="text-emerald-500 text-lg" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 top-[10rem] -left-[7rem] rotate-[-15deg] "><SiSolidity className="text-emerald-500 text-lg" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 top-[18rem] -right-[2rem] rotate-[-10deg] "><SiBlender className="text-emerald-500 text-xl" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 top-[19rem] -left-[2rem] rotate-[20deg] "><FaVideo className="text-green-500 text-lg" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 top-[25rem] -right-[15rem] rotate-[-30deg] "><RiNftFill className="text-green-500 text-lg" /></FloatingIcons>
                        <FloatingIcons className=" absolute z-50 -top-[6rem] -right-[10rem] rotate-[10deg] "><FaHtml5 className="text-green-500 text-xl" /></FloatingIcons>


                        <FloatingBoxes className=" top-[0rem] z-50 -right-[10rem] absolute font-bold max-2xl:text-2xl 2xl:text-3xl " >Web Developer</FloatingBoxes>
                        <FloatingBoxes className=" z-50 top-[4rem] -left-[12rem] absolute font-bold max-2xl:text-xl 2xl:text-2xl " >Smart Contracts</FloatingBoxes>
                        <FloatingBoxes className=" z-50 top-[20rem] -right-[15rem] absolute font-bold max-2xl:text-xl 2xl:text-2xl  " >3D Artist</FloatingBoxes>
                        <FloatingBoxes className=" top-[16rem] z-50 -left-[16rem] absolute font-bold text-2xl " >Video Editor</FloatingBoxes>
                    </div>
                    <Image src={mypic} className="max-2xl:w-[40rem] 2xl:w-[45rem] brightness-90 relative z-[5]"/>
                </div>
            </div>


            <div className="md:hidden min-h-screen flex flex-col items-center justify-center">

            <div className="flex max-md:flex-col flex-row items-center gap-10">
                <div className="flex max-md:flex-col flex-row items-center justify-center gap-10">
                    <div className="relative w-[18rem]">
                        <div className="w-[18rem]">
                            <Image src={mypic2} className="w-[18rem] relative z-10 rounded-full grayscale" />
                        </div>
                        <div className="h-[18.5rem] w-[18.5rem] absolute rounded-full bg-green-500 top-[-4px] left-[-4px] z-[0]"></div>
                        <div className="absolute top-[-0.2rem] left-[-0.2rem] z-[-1] rounded-full w-[18rem] h-[18rem] bg-gradient-to-br from-green-700 to-emerald-700 blur-3xl"></div>
                    </div>
                    <div className="flex flex-col gap-4 w-full items-center md:items-start justify-center">
                        <div className="flex flex-col items-start gap-5 justify-center">
                            <div className="flex items-center max-md:justify-start justify-center max-md:flex-col">
                                <h2 className="max-md:text-2xl md:text-3xl font-semibold text-nowrap">I am Risavdeb Patra, a </h2>
                                <div className="flex items-end h-9">
                                    <span className="text-nowrap max-md:text-xl md:text-3xl ml-2 bg-gradient-to-br from-green-500 to-emerald-500 bg-clip-text text-transparent font-bold">{work}</span>
                                    <div className="h-1 w-4 bg-white/80 animate-pulse" ></div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="flex gap-6 relative px-4 md:w-[20rem] w-[15rem] justify-center py-2 bg-black rounded-xl border-y-[1px] border-emerald-500">
                                <FaSquareXTwitter size={35} className= "fill-emerald-500  duration-300 hover:bg-emerald-400 hover:fill-black rounded-md"/>
                                <FaLinkedin size={35} className= "fill-emerald-500  duration-300 hover:bg-emerald-400 hover:fill-black rounded-md"/>
                                <AiFillInstagram size={35} className= "fill-emerald-500  duration-300 hover:bg-emerald-400 hover:fill-black rounded-md"/>
                                <FaGithub size={35} className= "fill-emerald-500  duration-300 hover:bg-emerald-400 hover:fill-black rounded-md"/>
                        </div>
                    </div>
                </div>
                

            </div>


            </div>

            <div className="max-md:w-full w-screen md:-translate-x-16 h-[1px] bg-green-500">

            </div>

            <div className="max-md:w-full w-screen md:-translate-x-16 h-[1px] bg-emerald-700">

            </div>
        </>
    )
}