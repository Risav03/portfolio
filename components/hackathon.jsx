import React from 'react'
import { Heading } from './heading'
import flask from "@/assets/icons/flask.svg"
import ipfs from "@/assets/icons/ipfs.svg"
import next from "@/assets/icons/nextjs.svg"
import css from "@/assets/icons/css.svg";
import html from "@/assets/icons/html.svg";
import js from "@/assets/icons/javascript.svg";
import rct from "@/assets/icons/react.svg"
import ts from "@/assets/icons/typescript.svg";
import solidity from "@/assets/icons/solidity.svg";
import tailwind from "@/assets/icons/tailwind-css.svg";
import lighthouse from "@/assets/icons/lighthouse.png"
import mongodb from "@/assets/icons/mongodb.svg"
import node from "@/assets/icons/node-js.svg"
import storyblok from "@/assets/icons/storyblok.png"
import godaddy from "@/assets/icons/godaddy.png"
import postman from "@/assets/icons/postman.png"
import peerlist from "@/assets/icons/peerlist.svg"

import Image from 'next/image'
import { IoMdGlobe } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa6'
import { SiMongodb } from 'react-icons/si'

const arr = [
    {
        hackathon: "HTM 3.0",
        description: "Medbase is a decentralized solution for storing and managing your medical documents making them universally accessible, unforgeable and impossible to duplicate.",
        project: "Medbase",
        tech: [rct, tailwind, ipfs, flask],
        awards: [{img:lighthouse, link: "https://certificate.givemycertificate.com/c/f41d78be-0698-450f-be13-bfcb7842efe4"}],
        link: "https://medbase-ii.firebaseapp.com/",
        github: ""
    },
    {
        hackathon: "HTF 3.0",
        description: "Student Academics Management webApp. Attendance, notes, notices, assignment submissions, all under the same roof along with a reward mechanism.",
        project: "Ed360",
        tech: [next, tailwind, mongodb, node],
        awards: [{img:storyblok, link: "https://certificate.givemycertificate.com/c/1b7aa65c-ba03-4b7e-b549-d3a140cbb968"}, {img:godaddy, link:"https://certificate.givemycertificate.com/c/6cc72a1c-8df9-4960-926d-164c5902484e"}, {img:postman, link:"https://certificate.givemycertificate.com/c/df34dad0-39ae-4ec8-a4d0-de8292e4a074"}, {img:peerlist, link:"https://certificate.givemycertificate.com/c/727f902b-b1dc-4b8f-9931-db3400f041c6"}],
        link: "https://medbase-ii.firebaseapp.com/",
        github: "https://github.com/Risav03/Ed360-Student-Frontend"
    },
    {
        hackathon: "Status Code 0",
        description: "An online AI training data marketplace where people can sell their data and verify ownership as NFTs and companies can buy copies of this data.",
        project: "DataVerse",
        tech: [next, tailwind, mongodb, node, solidity, ipfs],
        awards: [],
        link: "https://statuscode0.vercel.app/",
        github: "https://github.com/Risav03/statuscode0"
    },
    
]


export const Hackathon = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen my-20 md:-translate-x-16 max-md:-translate-x-4'>
        <Heading>Hackathons</Heading>

        <div className='w-[90%] justify-center items-center flex flex-wrap gap-4'>

            {arr.map((item)=>(

                <div className='w-[25rem] relative h-[30rem] bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-y-[1px] border-y-emerald-500/80 rounded-xl gap-4 flex flex-col items-center justify-start md:p-10 p-4'>
                
                    <h3 className='text-2xl font-bold bg-gradient-to-br from-green-500 to-emerald-500 bg-clip-text text-transparent '>{item.hackathon}</h3>
                    <div className='flex items-center justify-center w-full my-2'>
                        <div className='w-[40%] flex flex-col items-center justify-center gap-2 border-r-[1px] border-green-500'>
                            <h3 className='text-sm'>Project</h3>
                            <h3 className='font-semibold'>{item.project}</h3>
                        </div>
                        <div className='w-[60%] flex flex-col items-center justify-center gap-2'>
                            <h3 className='text-sm' >Tech Stack</h3>
                            <div className='flex gap-1'>
                                {item.tech.map((t)=>(
                                    <Image src={t} className='w-6 h-6 bg-white/30 border-[1px] border-white p-[2px] rounded-lg' />
                                ))}

                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-sm text-center text-green-300 my-4'>{item.description}</h4>
                    </div>
                    {item.awards.length > 0 && <h3 className='text-xl font-semibold leading-[0px] mt-5'>Awards</h3>}
                    <div className='flex flex-wrap gap-2 my-3'>
                        {item.awards.map((p)=>(
                            <a href={p.link} target='_blank' ><Image src={p.img} className='w-10 h-10 bg-white/20 p-1 hover:scale-125 duration-200 rounded-lg border-[1px] border-white' /></a>
                        ))}
                        </div>
                    
                        <div className='text-green-500 absolute bottom-4 right-4 bg-black rounded-xl py-2 px-4 flex gap-2'>
                            <a href={item.link} target='_blank'><IoMdGlobe className='text-xl'/></a>
                            <a href={item.github} ><FaGithub  className='text-xl'/></a>
                        </div>

                </div>
            ))}


        </div>
    </div>
  )
}
