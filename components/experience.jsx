"use client"
import React, { useRef } from 'react'
import { Heading } from './heading'
import { IoMdGlobe } from 'react-icons/io'
import { motion, useInView } from 'framer-motion'
import { Badge } from './UI/badge'

const experiences = [
  {
    company: "House of Edtech",
    role: "Fullstack Developer",
    type: "Full-time",
    start: "May '26",
    end: "Present",
    bullets: [
      "Built Cinnamon, a multi-tenant AI student-support platform for web chat, an LMS widget, WhatsApp, and Telegram",
      "Implemented the conversation agent on Cloudflare Durable Objects, with tool use, human handoff, and write-behind sync to PlanetScale Postgres",
      "Shipped it on TypeScript, Bun, Turborepo, Hono, Workers AI, the Vercel AI SDK, Drizzle, Better Auth, Next.js, and Svelte 5",
    ],
    tags: ["Cinnamon", "Durable Objects", "AI"],
  },
  {
    company: "Topi Contract",
    role: "Fullstack Developer",
    type: "Remote Freelancing",
    start: "Nov '25",
    end: "Oct '26",
    bullets: [
      "Nov 2025–May 2026: Fireside Base with BaseJunkie and House Protocol with latenightonbase",
      "May–July 2026: namdotxyz with Sang W Nam",
      "July–October 2026: Basemate with Mateo",
    ],
    tags: ["Web3", "AI", "Full Stack"],
  },
  {
    company: "House of Edtech",
    role: "Fullstack Developer",
    type: "Full-time",
    start: "Nov '24",
    end: "Nov '25",
    bullets: [
      "Joined mid-development and helped hit the milestones that launched the LMS within two months",
      "Built the multi-tenant backend for 100k+ monthly users, plus customer and operations platforms",
      "Worked with operations and support to fix bugs, speed up queries, and refocus the UI",
    ],
    tags: ["LMS", "Postgres", "Multi-tenant"],
  },
  {
    company: "3xBuilds",
    role: "Co-Founder",
    type: "",
    url: "https://www.3xbuilds.com",
    start: "Jan '24",
    end: "Present",
    bullets: [
      "Working as a Full Stack Web developer",
      "Developing Smart Contracts",
      "Acquiring clients via social media",
    ],
    tags: ["Web3", "Smart Contracts", "Freelance"],
  },
  {
    company: "Beast Verse",
    role: "Founder",
    type: "",
    start: "Dec '22",
    end: "Dec '23",
    bullets: [
      "Acted as a Community Collaborator",
      "Developed Smart Contracts",
      "Worked as a Full Stack Web Developer",
    ],
    tags: ["NFT", "Solidity", "Community"],
    dim: true,
  },
  {
    company: "IEM IEDC",
    role: "3D Design and Video Editing",
    type: "",
    start: "Feb '22",
    end: "Oct '22",
    bullets: [
      "Designed VFX videos for all events organised by IEM IEDC",
      "Created 3D representations of IoT & Hardware projects produced",
    ],
    tags: ["Blender", "VFX", "3D"],
    dim: true,
  },
]

const accents = [
  { dot: 'bg-cyan-400',    dotRing: 'border-cyan-400',    cardBorder: 'border-l-cyan-400/70',    roleText: 'text-cyan-400' },
  { dot: 'bg-blue-400',    dotRing: 'border-blue-400',    cardBorder: 'border-l-blue-500/50',    roleText: 'text-blue-400' },
  { dot: 'bg-indigo-400',  dotRing: 'border-indigo-400',  cardBorder: 'border-l-indigo-500/50',  roleText: 'text-indigo-400' },
  { dot: 'bg-blue-300',    dotRing: 'border-blue-300/50', cardBorder: 'border-l-blue-400/30',    roleText: 'text-blue-300/70' },
  { dot: 'bg-slate-400',   dotRing: 'border-slate-400/50',cardBorder: 'border-l-slate-500/25',   roleText: 'text-slate-400/60' },
  { dot: 'bg-slate-500',   dotRing: 'border-slate-500/40',cardBorder: 'border-l-slate-500/20',   roleText: 'text-slate-400/50' },
]

function TimelineEntry({ exp, index, lineInView }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const a = accents[index] ?? accents[accents.length - 1]
  const isActive = exp.end === "Present"

  return (
    <motion.div
      ref={ref}
      className="flex gap-0 pb-8 last:pb-0"
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: exp.dim ? 0.45 : 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
    >
      {/* Timeline node column */}
      <div className="relative shrink-0 flex flex-col items-center w-9">
        {/* Dot */}
        <motion.div
          className={`relative z-10 mt-[1.35rem] w-3 h-3 rounded-full border-2 ${a.dotRing} bg-[#020817] shrink-0`}
          initial={{ scale: 0 }}
          animate={lineInView ? { scale: 1 } : {}}
          transition={{ delay: 0.3 + index * 0.15, type: "spring", stiffness: 300 }}
        >
          {isActive && (
            <motion.div
              className={`absolute inset-[-3px] rounded-full ${a.dot} opacity-30`}
              animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </motion.div>
      </div>

      {/* Card */}
      <div
        className={`flex-1 ml-3 rounded-r-xl border-l-2 ${a.cardBorder} border-t border-r border-b border-blue-500/10 bg-[#040c1b]/50 hover:bg-[#040c1b]/70 hover:border-blue-500/20 transition-all duration-300 p-5 group`}
      >
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-white font-bold text-lg leading-tight">{exp.company}</h3>
              {exp.url && (
                <a href={exp.url} target="_blank" className="text-blue-400/40 hover:text-blue-400 transition-colors">
                  <IoMdGlobe size={14} />
                </a>
              )}
            </div>
            <span className={`text-sm font-semibold ${a.roleText}`}>{exp.role}</span>
          </div>

          {/* Date badge */}
          <div className="shrink-0 flex flex-col items-end gap-0.5 font-mono text-[11px]">
            <span className="text-white/55">{exp.start}</span>
            <span className="text-blue-500/30">│</span>
            <span className={isActive ? "text-cyan-400 font-bold" : "text-blue-400/50"}>{exp.end}</span>
          </div>
        </div>

        {/* Tags row */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {exp.type && <Badge variant="secondary">{exp.type}</Badge>}
          {exp.tags.map(t => <Badge key={t} variant="outline">{t}</Badge>)}
        </div>

        {/* Bullets */}
        <ul className="space-y-1">
          {exp.bullets.map(b => (
            <li key={b} className="flex items-start gap-2 text-xs text-blue-100/50 group-hover:text-blue-100/60 transition-colors">
              <span className="text-blue-500/70 mt-0.5 shrink-0">›</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export const Experience = () => {
  const containerRef = useRef(null)
  const inView = useInView(containerRef, { once: true, margin: "-60px" })

  return (
    <div className='w-screen flex flex-col items-center text-center -translate-x-4 md:-translate-x-16 mt-24'>
      <Heading>Experience</Heading>
      <div className='w-[90%] max-w-3xl' ref={containerRef}>
        <div className="relative">
          {/* Animated vertical timeline line */}
          <motion.div
            className="absolute left-[17px] top-5 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/25 to-transparent origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          />

          {experiences.map((exp, i) => (
            <TimelineEntry key={`${exp.company}-${exp.start}`} exp={exp} index={i} lineInView={inView} />
          ))}
        </div>
      </div>
    </div>
  )
}
