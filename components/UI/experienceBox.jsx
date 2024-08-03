import React from 'react'
import Image from 'next/image'

export const ExperienceBox = ({image, text, time}) => {
  return (
    <div className='p-[1px] shadow-2xl duration-200 hover:-translate-y-1 rounded-xl w-64 h-52 border-b-2 border-green-500'>
        <div className='bg-transparent flex flex-col items-center h-full justify-center rounded-xl gap-4'>
            <div className='relative w-full mx-auto flex items-center justify-center my-6'>
                <div className='absolute bg-white/50 blur-xl rounded-full h-10 w-10 z-1'></div>
                <Image src={image} className='w-10 h-10 absolute z-4' />
            </div>
            <div>
                <h3 className='font-bold bg-gradient-to-br to-green-400 from-emerald-400 bg-clip-text text-transparent text-2xl' >{text}</h3>
                <h3 className='text-sm font-semibold'>{time}</h3>
            </div>
        </div>
    </div>
  )
}
