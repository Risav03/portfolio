"use client"
import React from 'react'
import { IoMdGlobe } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa6'
import Image from 'next/image'


export const ProjectBox = ({img, name, desc, link, tags}) => {
  return (
    <a href={link} target='_blank' className='flex flex-col group relative md:w-[30rem] w-[90%] object-cover hover:scale-105 duration-200 h-[14rem] md:h-[18rem] rounded-xl overflow-hidden'>
        
        <Image src={img} className=" group-hover:brightness-75 duration-200" />
        <div className='bg-green-600 rounded-t-xl h-[13rem] md:h-[11rem] group-hover:bottom-0 border-t-2 absolute z-50 duration-200 -bottom-[6.8rem] md:-bottom-[4.6rem] border-green-300 p-6'>
            <h3 className='font-bold text-2xl '>{name}</h3>
            <div className='flex flex-wrap gap-1 my-1'>
                {tags.map((item)=>(
                  <div className='bg-green-400/20 md:w-20 w-[3rem] py-2 md:text-[0.75rem] max-md:text-[0.47rem] font-semibold rounded-xl text-center text-green-300 border-[1px] border-green-300'>
                    {item}
                  </div>
                ))}
            </div>
            <h3 className='text-md text-green-200 font-semibold'>{desc}</h3>

        </div>
    </a>
  )
}
