"use client"
import React, { useRef } from 'react'
import { Heading } from './heading'
import { FaXTwitter } from 'react-icons/fa6'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    name: "BasemateAgent",
    handle: "basemateagent",
    url: "https://x.com/basemateagent",
    collab: "0xteo",
    collabUrl: "https://x.com/0xteo",
    start: "May '26",
    end: "Present",
  },
]

function WorkingOnCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      className="relative w-full overflow-hidden rounded-2xl border border-cyan-500/25 bg-cyan-950/10 group"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - r.top}px`)
      }}
    >
      {/* Spotlight hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(300px circle at var(--mouse-x,50%) var(--mouse-y,50%), rgba(6,182,212,0.04), transparent)' }}
      />

      {/* Animated top bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Corner glow blobs */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-500/6 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full pointer-events-none" />

      <div className="flex max-md:flex-col items-center gap-8 p-6 md:p-8">

        {/* Project avatar + name */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-cyan-500/25 bg-cyan-500/10 shrink-0">
              <img
                src={`https://unavatar.io/x/${project.handle}`}
                alt={project.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-[-4px] rounded-2xl border border-cyan-400/30"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="text-left">
            <p className="text-cyan-400/50 text-[10px] font-mono tracking-[0.3em] uppercase mb-1">Current Build</p>
            <h3 className="text-white font-black text-2xl md:text-3xl leading-none">{project.name}</h3>
            <a
              href={project.url}
              target="_blank"
              className="inline-flex items-center gap-1 text-xs text-cyan-400/50 hover:text-cyan-400 border border-cyan-500/20 rounded-md px-2 py-0.5 mt-1.5 transition-colors"
            >
              <FaXTwitter size={10} />@{project.handle}
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent shrink-0" />
        <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

        {/* Collaborating with */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-left">
            <p className="text-blue-400/35 text-[10px] font-mono tracking-[0.3em] uppercase mb-2">Collaborating with</p>
            <a
              href={project.collabUrl}
              target="_blank"
              className="flex items-center gap-2.5 group/collab"
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border border-blue-500/25 bg-blue-500/10 shrink-0">
                <img
                  src={`https://unavatar.io/x/${project.collab}`}
                  alt={project.collab}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
              <div>
                <span className="text-white/70 font-semibold text-sm group-hover/collab:text-white transition-colors">
                  @{project.collab}
                </span>
                <div className="flex items-center gap-1 mt-0.5">
                  <FaXTwitter size={9} className="text-blue-400/40" />
                  <span className="text-blue-400/30 text-[10px]">on X</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Status + dates */}
        <div className="flex md:flex-col items-center justify-center gap-4 shrink-0">
          {/* BUILDING badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono font-bold text-cyan-400">
            <motion.span
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
            />
            BUILDING
          </div>

          {/* Timeline */}
          <div className="flex md:flex-col items-center gap-2 font-mono text-xs">
            <span className="text-white/55 font-semibold">{project.start}</span>
            <div className="md:h-8 h-px md:w-px w-5 bg-gradient-to-b from-cyan-500/40 to-blue-500/30" />
            <span className="text-cyan-400 font-bold">{project.end}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const WorkingOn = () => {
  return (
    <div className='w-screen flex flex-col items-center text-center -translate-x-4 md:-translate-x-16 mt-24'>
      <Heading>Working On</Heading>
      <div className='w-[90%] max-w-4xl flex flex-col gap-4'>
        {projects.map((project, idx) => (
          <WorkingOnCard key={project.handle} project={project} index={idx} />
        ))}
      </div>
    </div>
  )
}
