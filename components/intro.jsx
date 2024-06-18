"use client"

import Image from "next/image"
import mypic from "@/assets/me.jpeg"
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { useState, useEffect } from "react";


export default function Intro(){

    const[work, setWork] = useState(" ");
    var workArr = ["CSE Undergrad" ,"Web Developer", "3D Artist", "Smart Contracts Developer", "Game Developer", "Video Editor"];

    
    let i = 0;
    let j = 0;
    let k = 0;

    function streamingWork(){
        setInterval(()=>{
        
                const word = workArr[i];
                console.log(word.length);
                var str = ""
    
                var streamer = setInterval(()=>{
                    
                    if(j<word.length){
                        str = str + word[j];
                        j++;
                    }
                    else{

                        setTimeout(()=>{
                            const removedstr = str.slice(0,j-k);
                            console.log(removedstr);
                            k++;
        
                            if(j-k==-2){
                                j = 0;
                                k = 0;
                                clearInterval(streamer);
                            }
        
                            str = removedstr;
                        },1000)
                    }
                    setWork(str);
                },70)
    
                console.log("Moving on");
                    
                if(i<workArr.length-1){
                    i++;
                }
                else{
                    i = 0;
                }
    
            // }
        },5000);

    }
    
    
    useEffect(()=>{

        streamingWork();
    },[])

    return (
        <div>

            <div className="flex flex-cols gap-10">
                <div className="relative">
                    <Image src={mypic} width={1920} height={1080} className="w-[15rem] rounded-full grayscale" />
                    <div className="absolute top-[-0.15rem] left-[-0.15rem] z-[-1] rounded-full w-[15.3rem] h-[15.3rem] bg-gradient-to-br from-green-500 to-emerald-500"></div>
                    <div className="absolute top-[-0.2rem] left-[-0.2rem] z-[-1] rounded-full w-[15.4rem] h-[15.4rem] bg-gradient-to-br from-green-700 to-emerald-700 blur-3xl"></div>
                </div>
                <div className="flex flex-col text-left items-center justify-center">
                    <div className="flex gap-6 relative px-4 py-2 bg-black rounded-xl">
                        <FaSquareXTwitter size={35} className= "fill-emerald-500  duration-300 hover:bg-emerald-400 hover:fill-black rounded-md"/>
                        <FaLinkedin size={35} className= "fill-emerald-500  duration-300 hover:bg-emerald-400 hover:fill-black rounded-md"/>
                        <AiFillInstagram size={35} className= "fill-emerald-500  duration-300 hover:bg-emerald-400 hover:fill-black rounded-md"/>
                        <FaGithub size={35} className= "fill-emerald-500  duration-300 hover:bg-emerald-400 hover:fill-black rounded-md"/>
                        <div className="bg-gradient-to-br from-green-500 to-emerald-500 absolute w-[101%] h-[102%] top-[-1%] left-[-0.5%] rounded-xl z-[-1]"></div>
                    </div>

                    <div className="text-left w-[100%] mt-3">
                        <h3 className="text-gray-400">Lets Connect!</h3>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex relative">
                <h1 className="text-4xl">I am <span className="font-bold">Risavdeb Patra</span>, a <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-b from-green-500 to-emerald-500">{work}</span></h1>
                <div className="h-[2.6rem] w-[0.7rem] bg-emerald-500 animate-pulse"></div>
            </div>

        </div>
    )
}