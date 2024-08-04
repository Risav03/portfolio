import React from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

export const Footer = () => {
  return (
    <div className='w-screen h-52 flex flex-col gap-2 items-center justify-center rounded-t-xl border-t-2 border-green-500 bg-[#08080b] -translate-x-4 md:-translate-x-16'>
        <h3 className='text-3xl font-bold bg-gradient-to-br from-green-500 to-emerald-500 bg-clip-text text-transparent'>Contact Me</h3>
        <div className='flex max-md:flex-col gap-2'>
            <a href='https://mail.google.com/mail/?view=cm&fs=1&to=risavdeb03@gmail.com' target='_blank' className='font-semibold hover:scale-105 duration-200 flex items-center justify-center w-32 py-2 rounded-xl gap-2 border-[1px] border-green-500'><IoMdMail/>Email</a>
            <a href='https://x.com/Degeneer03' target='_blank' className='font-semibold hover:scale-105 duration-200 flex items-center justify-center w-32 py-2 rounded-xl gap-2 border-[1px] border-green-500'><FaXTwitter/>Twitter</a>
        </div>
    </div>
  )
}
