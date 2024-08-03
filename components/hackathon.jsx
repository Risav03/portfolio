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

import Image from 'next/image'
import { IoMdGlobe } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa6'


export const Hackathon = () => {
  return (
    <div className='flex flex-col items-center justify-center w-screen my-20 md:-translate-x-16 max-md:-translate-x-4'>
        <Heading>Hackathons</Heading>

        <div className='max-md:w-[90%] w-[70%] flex flex-wrap gap-4'>
            <div className='w-[25rem] relative h-[18rem] bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl gap-4 flex flex-col items-center justify-center md:p-10 p-4'>
            
                <h3 className='text-2xl font-bold bg-gradient-to-br from-green-500 to-emerald-500 bg-clip-text text-transparent '>HTM 3.0</h3>
                <div className='flex items-center justify-center w-full'>
                    <div className='w-1/2 flex flex-col items-center justify-center gap-2 border-r-[1px] border-green-500'>
                        <h3 className='text-sm'>Project</h3>
                        <h3 className='font-semibold'>Medbase</h3>
                    </div>
                    <div className='w-1/2 flex flex-col items-center justify-center gap-2'>
                        <h3 className='text-sm' >Tech Stack</h3>
                        <div className='flex gap-2'>
                            <Image src={rct} className="w-6" />
                            <Image src={tailwind} className="w-6" />
                            <Image src={ipfs} className="w-6 bg-white rounded-md p-[0.5px]" />
                            <Image src={flask} className="w-6 bg-white rounded-md p-[1px]" />

                        </div>
                    </div>
                </div>
                <h3 className='text-xl font-semibold leading-[0px] mt-5'>Awards</h3>
                <a href="https://certificate.givemycertificate.com/c/f41d78be-0698-450f-be13-bfcb7842efe4" target='_blank' ><Image src={lighthouse} className='w-10 rounded-lg border-[1px] border-white' /></a>

                
                    <div className='text-green-500 absolute bottom-4 right-4 bg-black rounded-xl py-2 px-4 flex gap-2'>
                        <a href='https://medbase-ii.firebaseapp.com/' target='_blank'><IoMdGlobe className='text-xl'/></a>
                        <a href='' ><FaGithub  className='text-xl'/></a>
                    </div>

            </div>

            <div>
                <h3>Hack this Fall 3.0</h3>
            </div>

            <div>
                <h3>Status Code 0</h3>
            </div>

        </div>
    </div>
  )
}
