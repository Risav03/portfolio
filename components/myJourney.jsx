"use client"

import React from 'react'
import { Heading } from './heading'
import { useRouter } from 'next/navigation'

export const MyJourney = () => {

    const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center my-20 gap-5 ' >
        <Heading>My Journey</Heading>
        <ul className='max-md:w-[80%] mx-auto'>
            <li className='mb-2 list-disc text-green-400'><h3 className='text-gray-400'>Completed my schooling in PCMB from <a href='https://www.southpoint.ac.in/' target='_blank' className='font-bold bg-gradient-to-br from-emerald-500 to-green-500 bg-clip-text text-transparent'>South Point High School</a></h3></li>
            <li className='mb-2 list-disc text-green-400'><h3 className='text-gray-400'>Got admitted in <a href='https://iem.edu.in/' target='_blank' className='font-bold bg-gradient-to-br from-emerald-500 to-green-500 bg-clip-text text-transparent'>IEM, Kolkata</a> via WBJEE</h3></li>
            <li className='mb-2 list-disc text-green-400'><h3 className='text-gray-400'>Got selected to work in <a href='https://iedc.iemecell.com/' target='_blank' className='font-bold bg-gradient-to-br from-emerald-500 to-green-500 bg-clip-text text-transparent'>IEM IEDC</a> as a 3D Artist and Video Editor</h3></li>
            <li className='mb-2 list-disc text-green-400'><h3 className='text-gray-400'>Started diving deeper into web development in my 1st year semester break </h3></li>
            <li className='mb-2 list-disc text-green-400'><h3 className='text-gray-400'>And here I am building my porfolio with over <button className='font-bold bg-gradient-to-br from-emerald-500 to-green-500 bg-clip-text text-transparent' onClick={()=>{router.push("#experience")}}>3 years of experience</button> and having served <span className='font-bold bg-gradient-to-br from-emerald-500 to-green-500 bg-clip-text text-transparent'>7+ high profile clients!</span></h3></li>
        </ul>
        
    </div>
  )
}
