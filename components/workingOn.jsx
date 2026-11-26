"use client"
import React, { useRef } from 'react'
import { Heading } from './heading'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    name: "Cinnamon",
    org: "House of Edtech",
    summary: "Multi-tenant AI student support across web chat, an LMS widget, WhatsApp, and Telegram.",
    detail: "Conversation agent on Cloudflare Durable Objects, with tool use, human handoff, and write-behind sync to PlanetScale Postgres.",
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

        {/* Project mark + name */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl border border-cyan-500/25 bg-cyan-500/10 shrink-0 flex items-center justify-center text-cyan-300 font-black text-2xl">
              C
            </div>
            <motion.div
              className="absolute inset-[-4px] rounded-2xl border border-cyan-400/30"
              animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.04, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="text-left">
            <p className="text-cyan-400/50 text-[10px] font-mono tracking-[0.3em] uppercase mb-1">Current Build</p>
            <h3 className="text-white font-black text-2xl md:text-3xl leading-none">{project.name}</h3>
            <span className="inline-flex items-center text-xs text-cyan-400/60 border border-cyan-500/20 rounded-md px-2 py-0.5 mt-1.5">
              {project.org}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-16 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent shrink-0" />
        <div className="md:hidden w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

        <div className="text-left max-w-md">
          <p className="text-sm text-blue-100/70 leading-relaxed">{project.summary}</p>
          <p className="text-xs text-blue-100/40 leading-relaxed mt-2">{project.detail}</p>
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
          <WorkingOnCard key={project.name} project={project} index={idx} />
        ))}
      </div>
    </div>
  )
}
