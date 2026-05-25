"use client"
import React, { useRef, useState } from 'react'
import { IoMdGlobe } from 'react-icons/io'
import { FaGithub, FaXTwitter } from 'react-icons/fa6'
import Image from 'next/image'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Badge } from './badge'

export const ProjectBox = ({ img, name, desc, link, tags, xHandle }) => {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 30 })
  const sy = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
    setHovered(false)
  }

  return (
    <motion.a
      ref={ref}
      href={link}
      target='_blank'
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, type: "spring" }}
      className='relative flex flex-col md:w-[22rem] w-[90%] rounded-2xl overflow-hidden border border-blue-500/20 bg-white/[0.02] backdrop-blur-sm group cursor-pointer'
    >
      {/* Image / placeholder */}
      <div className='relative h-44 overflow-hidden'>
        {img ? (
          <>
            <Image src={img} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className='absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/30 to-transparent' />
          </>
        ) : xHandle ? (
          <div className='w-full h-full bg-gradient-to-br from-blue-950 to-[#020817] flex items-center justify-center relative overflow-hidden'>
            <img
              src={`https://unavatar.io/x/${xHandle}`}
              alt={xHandle}
              className='w-20 h-20 rounded-full object-cover border-2 border-blue-500/30 opacity-70 group-hover:opacity-90 transition-opacity duration-300'
              onError={(e) => { e.target.style.display = 'none' }}
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent' />
            <div className='absolute inset-0 flex items-end justify-end p-3 opacity-40'>
              <FaXTwitter className='text-2xl text-blue-300' />
            </div>
          </div>
        ) : (
          <div className='w-full h-full bg-gradient-to-br from-blue-950 to-[#020817]' />
        )}

        {/* Shimmer on hover */}
        {hovered && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '200%' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className='absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent skew-x-12 pointer-events-none'
          />
        )}
      </div>

      {/* Content */}
      <div className='p-5 flex flex-col gap-2'>
        <div className='flex items-start justify-between gap-2'>
          <h3 className='font-bold text-lg text-white group-hover:text-blue-200 transition-colors'>{name}</h3>
          <div className='flex gap-1 shrink-0 mt-0.5'>
            {link && (
              <span className='p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors'>
                <IoMdGlobe size={14} />
              </span>
            )}
          </div>
        </div>

        <div className='flex flex-wrap gap-1.5'>
          {tags.map((item) => (
            <Badge key={item} variant="default" className='text-[10px] px-2 py-0.5'>{item}</Badge>
          ))}
        </div>

        <p className='text-sm text-blue-100/50 leading-relaxed mt-1'>{desc}</p>
      </div>

      {/* Border glow on hover */}
      <motion.div
        className='absolute inset-0 rounded-2xl border border-blue-400/40 pointer-events-none'
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Corner accent */}
      <div className='absolute top-0 right-0 w-16 h-16 bg-blue-500/5 blur-2xl rounded-full pointer-events-none' />
    </motion.a>
  )
}
