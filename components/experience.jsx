"use client"

import React from 'react'
import { Heading } from './heading'

export const Experience = () => {



  return (
    <div className='w-screen flex flex-col items-center text-center -translate-x-4 md:-translate-x-16 mt-20'>
        <Heading>Work Experience</Heading>

        <div className='w-[90%] '>

            <div className='opacity-100'>
            <div className='w-full my-10 border-b-4 border-green-400 flex max-md:flex-col rounded-b-xl bg-gradient-to-b from-transparent md:h-64 to-green-500/60 p-5'>
                <div className='flex flex-col md:w-[80%] items-start justify-start gap-1 my-5 md:my-10'>
                <h3 className='text-white font-bold text-2xl'>3xBuilds</h3>
                <h3 className='text-green-400 font-bold text-lg'>Co-Founder</h3>
                    <ul className='text-sm text-start font-semibold ml-4 text-green-300 my-5'>
                        <li className='list-disc'>Client acquisition</li>
                        <li className='list-disc'>Smart Contracts</li>
                        <li className='list-disc'>Fullstack Web Development</li>
                    </ul>
                </div>
                <div className='h-full flex md:flex-col md:items-center items-center justify-center md:justify-center gap-2 font-bold md:w-[20%]'>
                    <h2 className=''>Jan '24</h2>
                    <div className='grid md:grid-flow-col max-md:grid-flow-row max-md:grid-rows-2 md:grid-cols-2 md:w-10 md:h-24 w-24'>
                        <div className='w-full max-md:border-b-[4px] md:border-r-[4px] border-dotted border-green-300'>
                        </div>
                        {/* <div className='w-2 border-l-[2px] border-dotted border-white'>
                        </div> */}
                    </div>
                    <h2 className=''>Present</h2>
                </div>
            </div>
            </div>

            <div className='opacity-80'>
                <div className='w-full my-10 border-b-4 border-green-400 flex max-md:flex-col rounded-b-xl bg-gradient-to-b from-transparent md:h-64 to-green-500/60  p-5'>
                    <div className='flex flex-col md:w-[80%] items-start justify-start gap-1 my-5 md:my-10'>
                    <h3 className='text-white font-bold text-2xl'>Beast Verse</h3>
                    <h3 className='text-green-400 font-bold text-lg'>Founder</h3>
                        <ul className='text-sm text-start font-semibold ml-4 text-green-300 my-5'>
                            <li className='list-disc'>Acted as a Community Collaborator</li>
                            <li className='list-disc'>Smart Contracts</li>
                            <li className='list-disc'>Fullstack Web Development</li>
                        </ul>
                    </div>
                    <div className='h-full flex md:flex-col md:items-center items-center justify-center md:justify-center gap-2 font-bold md:w-[20%]'>
                        <h2 className=''>Dec '22</h2>
                        <div className='grid md:grid-flow-col max-md:grid-flow-row max-md:grid-rows-2 md:grid-cols-2 md:w-10 md:h-24 w-24'>
                            <div className='w-full max-md:border-b-[4px] md:border-r-[4px] border-dotted border-green-300'>
                            </div>
                            {/* <div className='w-2 border-l-[2px] border-dotted border-white'>
                            </div> */}
                        </div>
                        <h2 className=''>Dec '23</h2>
                    </div>
                </div>
            </div>

            
            <div className='opacity-60'>

                <div className='w-full  border-b-4 border-green-400 flex max-md:flex-col rounded-b-xl bg-gradient-to-b from-transparent md:h-64 to-green-500/60 p-5'>
                        <div className='flex flex-col md:w-[80%] items-start justify-start gap-1 my-5 md:my-10'>
                            <h3 className='text-white font-bold text-2xl'>IEM IEDC</h3>
                            <h3 className='text-green-400 font-bold text-lg'>3D Design and Video Editing</h3>
                            <ul className='text-sm text-start font-semibold ml-4 text-green-300 my-5'>
                                <li className='list-disc'>Designed VFX videos for all events organised by IEM IEDC.</li>
                                <li className='list-disc'>Created 3D representations of IoT & Hardware projects produced.</li>
                            </ul>                </div>
                        <div className='h-full flex md:flex-col md:items-center items-center justify-center md:justify-center gap-2 font-bold md:w-[20%]'>
                            <h2 className=''>Feb '22</h2>
                            <div className='grid md:grid-flow-col max-md:grid-flow-row max-md:grid-rows-2 md:grid-cols-2 md:w-10 md:h-24 w-24'>
                                <div className='w-full max-md:border-b-[4px] md:border-r-[4px] border-dotted border-green-300'>
                                </div>
                                {/* <div className='w-2 border-l-[2px] border-dotted border-white'>
                                </div> */}
                            </div>
                            <h2 className=''>Oct '22</h2>
                        </div>
                    </div>
            </div>

        </div>
    </div>
  )
}
