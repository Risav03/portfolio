"use client"

import Image from "next/image"
import mypic from "@/assets/me.png"
import mypic2 from "@/assets/me.jpeg"
import { FaEthereum, FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { FloatingBoxes } from "./UI/floatingBoxes";
import { FloatingIcons } from "./UI/floatingIcons";
import { CiGlobe } from "react-icons/ci";
import { SiBlender } from "react-icons/si";


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
            <div className="w-screen h-[95vh] max-md:hidden text-white relative md:-left-16 overflow-hidden -left-4 flex flex-col items-center justify-center">
                <div className="absolute top-0">
                    <h1 className="text-[5rem] text-gray-400 font-bold">I am <span className="text-white">Risavdeb Patra</span></h1>
                    {/* <h3 className="text-[3rem] h-20 flex gap-1 items-end font-semibold bg-gradient-to-br from-green-500 to-emerald-500 text-transparent bg-clip-text">{work} <span className="h-2 w-10 -translate-y-4 bg-white animate-pulse"></span></h3> */}
                </div>
                
                <FloatingIcons className=" absolute z-50 top-[15rem] left-[6rem] rotate-[20deg] "><CiGlobe className="text-green-500" /></FloatingIcons>
                <FloatingIcons className=" absolute z-50 top-[30rem] left-[8rem] rotate-[-10deg] "><FaEthereum className="text-emerald-500" /></FloatingIcons>
                <FloatingIcons className=" absolute z-50 top-[25rem] right-[8rem] rotate-[-10deg] "><SiBlender className="text-emerald-500" /></FloatingIcons>
                <FloatingBoxes className=" top-[10rem] z-50 right-[13rem] absolute font-bold text-2xl " >Web Developer</FloatingBoxes>
                <FloatingBoxes className=" top-[25rem] z-50 left-[13rem] absolute font-bold text-xl " >Smart Contracts</FloatingBoxes>
                <FloatingBoxes className=" top-[33rem] z-50 right-[13rem] absolute font-bold text-xl  " >3D Artist</FloatingBoxes>
                <FloatingBoxes className=" top-[12rem] z-50 left-[13rem] absolute font-bold text-2xl " >Video Editor</FloatingBoxes>

                <div className="absolute bottom-0 ">
                    <div className="relative top-40">
                        <div className="absolute z-[0] left-[8rem] rounded-full blur-[150px] bg-gradient-radial from-green-500 to-emerald-500 w-[25rem] h-[25rem]">
                        </div>
                        <div className="absolute z-[2] left-[0rem] rounded-full  w-[40rem] h-[40rem] border-4 border-green-500 border-dashed">
                        </div>
                        <div className="absolute z-[2] -top-[10rem] -left-[10rem] rounded-full  w-[60rem] h-[60rem] border-4 border-green-500 border-dashed">
                        </div>
                    </div>
                    <Image src={mypic} className="w-[40rem] brightness-90 relative z-[5]"/>
                </div>
            </div>


            <div className="md:hidden min-h-screen flex flex-col items-center justify-center -translate-y-16">

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

            <div className="w-screen -translate-x-16 h-1 bg-green-500">

            </div>

            <div className="w-screen -translate-x-16 h-1 bg-emerald-700">

            </div>
        </>
    )
}