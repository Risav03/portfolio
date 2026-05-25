"use client"
import React from 'react'
import { Heading } from './heading'
import { IoMdGlobe } from 'react-icons/io'
import { PiGraduationCap } from 'react-icons/pi'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Badge } from './ui/badge'

export const Education = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div className='w-screen flex flex-col items-center text-center -translate-x-4 md:-translate-x-16 mt-24'>
      <Heading>Education</Heading>
      <div className='w-[90%] max-w-4xl' ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative overflow-hidden rounded-2xl border border-indigo-500/20 bg-[#05071a]"
        >
          {/* Top accent stripe */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent" />

          {/* Background watermark text */}
          <div className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none overflow-hidden select-none">
            <span
              className="text-[7rem] xl:text-[9rem] font-black text-indigo-400/[0.035] leading-none font-mono"
              style={{ whiteSpace: 'nowrap' }}
            >
              B.TECH
            </span>
          </div>

          {/* Decorative blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-600/6 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-blue-600/5 blur-3xl rounded-full pointer-events-none" />

          {/* Corner brackets */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-indigo-500/30 rounded-tl-sm" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-indigo-500/30 rounded-tr-sm" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-indigo-500/20 rounded-bl-sm" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-indigo-500/20 rounded-br-sm" />

          <div className="relative flex max-md:flex-col gap-6 md:gap-10 items-center p-8 md:p-10">
            {/* Left: icon + degree badge */}
            <div className="shrink-0 flex flex-col items-center gap-3">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.25, type: "spring", stiffness: 200 }}
                className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20"
              >
                <PiGraduationCap className="text-indigo-400 text-4xl" />
              </motion.div>
              <span className="px-3 py-1 rounded-full text-xs font-bold border border-indigo-500/25 bg-indigo-500/10 text-indigo-400 font-mono tracking-widest">
                BTech
              </span>
            </div>

            {/* Center: university info */}
            <div className="flex-1 text-left">
              <p className="text-indigo-400/40 text-[10px] font-mono tracking-[0.3em] uppercase mb-2">
                Undergraduate Degree
              </p>
              <h3 className="text-white font-black text-xl md:text-2xl leading-tight mb-1">
                Institute of Engineering &amp; Management
              </h3>
              <p className="text-indigo-300/50 text-sm font-semibold mb-3">
                Computer Science &amp; Engineering
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">Kolkata, WB</Badge>
                <a
                  href="https://iem.edu.in"
                  target="_blank"
                  className="inline-flex items-center gap-1 text-xs text-indigo-400/50 hover:text-indigo-400 transition-colors"
                >
                  <IoMdGlobe size={12} />
                  iem.edu.in
                </a>
              </div>

              <p className="text-blue-100/35 text-xs mt-3 leading-relaxed max-w-md">
                Active member of IEM IEDC — produced VFX videos and 3D representations for tech events.
              </p>
            </div>

            {/* Right: CGPA + dates */}
            <div className="shrink-0 flex flex-col items-center gap-4 md:pl-8 md:border-l border-indigo-500/10 max-md:pt-4 max-md:border-t max-md:border-indigo-500/10 max-md:w-full max-md:flex-row max-md:justify-around">
              <div className="text-center">
                <motion.div
                  className="text-5xl md:text-6xl font-black text-indigo-400 font-mono tabular-nums leading-none"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  8.44
                </motion.div>
                <div className="text-[10px] text-indigo-400/40 font-mono tracking-widest mt-1 uppercase">CGPA</div>
              </div>

              <div className="flex md:flex-col items-center gap-2 font-mono text-xs">
                <span className="text-white/55 font-semibold">Jul &apos;21</span>
                <div className="md:h-8 h-px md:w-px w-6 bg-gradient-to-b from-indigo-500/50 to-blue-500/30" />
                <span className="text-indigo-400 font-bold">Jun &apos;25</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
