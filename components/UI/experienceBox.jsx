"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

export const ExperienceBox = ({ image, icon, text, time, index = 0 }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  // Convert "N months" to a progress 0-100 relative to 60 months max
  const months = parseInt(time) || 0
  const maxMonths = 60
  const progress = Math.min((months / maxMonths) * 100, 100)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04, type: "spring", stiffness: 200 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="spotlight-card relative p-[1px] rounded-2xl group overflow-hidden w-[160px]"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - r.top}px`)
      }}
    >
      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/30 via-transparent to-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className='relative bg-[#020817] border border-blue-500/15 group-hover:border-blue-500/40 rounded-2xl flex flex-col items-center justify-center gap-3 p-4 h-44 transition-colors duration-300'>
        {/* Icon */}
        <div className='relative flex items-center justify-center w-12 h-12'>
          <div className='absolute inset-0 bg-blue-500/15 blur-xl rounded-full group-hover:bg-blue-500/30 transition-colors duration-300' />
          {image ? (
            <Image src={image} className='w-10 h-10 relative z-10 drop-shadow-lg' alt={text} />
          ) : icon ? (
            <div className='relative z-10 text-3xl text-blue-400 group-hover:text-blue-300 transition-colors'>{icon}</div>
          ) : null}
        </div>

        {/* Name */}
        <div className='text-center'>
          <h3 className='font-bold text-white text-sm group-hover:text-blue-200 transition-colors'>{text}</h3>
          <p className='text-blue-400/50 text-xs mt-0.5 font-mono'>{time}</p>
        </div>

        {/* Progress bar */}
        <div className='w-full px-1'>
          <div className='h-1 w-full bg-blue-500/10 rounded-full overflow-hidden'>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${progress}%` } : { width: 0 }}
              transition={{ duration: 0.8, delay: index * 0.04 + 0.3, ease: "easeOut" }}
              className='h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full'
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
