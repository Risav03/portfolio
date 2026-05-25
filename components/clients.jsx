"use client"
import React, { useRef } from 'react'
import { Heading } from './heading'
import { FaXTwitter } from 'react-icons/fa6'
import { motion, useInView } from 'framer-motion'
import { Badge } from './ui/badge'

const clientArr = [
  {
    contact: "Sang W Nam",
    contactHandle: "sangwnam71",
    contactUrl: "https://x.com/sangwnam71",
    organization: "namdotxyz",
    orgHandle: "namdotxyz",
    orgUrl: "https://x.com/namdotxyz",
    role: "Full Stack Developer",
    type: "Contract",
    rate: "$2,500",
    rateSuffix: "/ month",
    duration: "2 months so far",
    start: "May '25",
    end: "Present",
    bullets: [
      "Building and maintaining the full stack infrastructure for namdotxyz",
      "Designing scalable backend systems with PostgreSQL and Redis",
      "Implementing AI-powered workflow automation features",
    ],
    tags: ["PostgreSQL", "Redis", "AI", "Next.js"],
    featured: true,
  },
  {
    contact: "BaseJunkie",
    contactHandle: "BaseJunkie_",
    contactUrl: "https://x.com/BaseJunkie_",
    organization: "Fireside Base",
    orgHandle: "firesidebase",
    orgUrl: "https://x.com/firesidebase",
    role: "Full Stack Developer",
    type: "6-Month Contract",
    rate: "$1,250",
    rateSuffix: "/ month",
    duration: "6 months",
    start: "Nov '24",
    end: "May '25",
    bullets: [
      "Built Fireside Base — a community platform built on Base chain",
      "Developed social features, on-chain interactions, and token mechanics",
      "Handled smart contract integration, frontend and backend development",
    ],
    tags: ["Base", "Solidity", "Web3", "Next.js"],
  },
  {
    contact: "latenightonbase",
    contactHandle: "latenightonbase",
    contactUrl: "https://x.com/latenightonbase",
    organization: "House Protocol",
    orgHandle: "houseproto",
    orgUrl: "https://x.com/houseproto",
    role: "Full Stack Developer",
    type: "6-Month Contract",
    rate: "$1,250",
    rateSuffix: "/ month",
    duration: "6 months",
    start: "Nov '24",
    end: "May '25",
    bullets: [
      "Built House Protocol — a Web3 protocol interface on Base",
      "Integrated smart contracts with a polished dApp frontend",
      "Delivered full backend infrastructure and API layer",
    ],
    tags: ["Base", "Solidity", "dApp", "Next.js"],
  },
]

// ── Featured card (active client) ────────────────────────────
function FeaturedCard({ client }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, type: "spring" }}
      className="relative w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-cyan-950/10 group"
      style={{ boxShadow: '0 0 40px rgba(6,182,212,0.04)' }}
    >
      {/* Animated top accent bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Corner glow */}
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/8 blur-3xl rounded-full pointer-events-none" />

      <div className="flex max-lg:flex-col gap-0 p-6 md:p-8">
        {/* Left: org + contact + bullets */}
        <div className="flex-1 min-w-0">
          {/* Org header */}
          <div className="flex items-center gap-3 mb-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-cyan-500/25 bg-cyan-500/10 shrink-0">
              <img
                src={`https://unavatar.io/x/${client.orgHandle}`}
                alt={client.organization}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-white font-black text-2xl">{client.organization}</h3>
                <a href={client.orgUrl} target="_blank"
                  className="flex items-center gap-1 text-xs text-cyan-400/50 hover:text-cyan-400 border border-cyan-500/20 rounded-md px-2 py-0.5 transition-colors">
                  <FaXTwitter size={10} />@{client.orgHandle}
                </a>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-blue-100/30 text-xs">via</span>
                <a href={client.contactUrl} target="_blank"
                  className="flex items-center gap-1 text-xs text-cyan-400/55 hover:text-cyan-400 transition-colors font-semibold">
                  <img
                    src={`https://unavatar.io/x/${client.contactHandle}`}
                    className="w-4 h-4 rounded-full object-cover"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                  @{client.contactHandle}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-cyan-400 font-semibold text-sm">{client.role}</span>
            <Badge variant="cyan">{client.type}</Badge>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {client.tags.map(t => <Badge key={t} variant="default">{t}</Badge>)}
          </div>

          <ul className="space-y-1.5">
            {client.bullets.map(b => (
              <li key={b} className="flex items-start gap-2 text-sm text-blue-100/55">
                <span className="text-cyan-500 mt-1 shrink-0">›</span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: rate + dates + LIVE badge */}
        <div className="flex lg:flex-col items-center justify-between lg:justify-center gap-4 lg:gap-6 lg:min-w-[140px] lg:pl-8 lg:border-l border-cyan-500/10 max-lg:mt-5 max-lg:pt-5 max-lg:border-t max-lg:border-cyan-500/10">
          {/* LIVE badge */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-mono font-bold text-green-400">
            <motion.span
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            ACTIVE
          </div>

          {/* Rate */}
          <div className="text-center">
            <div className="text-3xl font-black text-cyan-400 font-mono leading-none">{client.rate}</div>
            <div className="text-xs text-blue-400/40 font-mono mt-0.5">{client.rateSuffix}</div>
            <div className="text-xs text-blue-400/30 mt-1">{client.duration}</div>
          </div>

          {/* Date range */}
          <div className="flex lg:flex-col items-center gap-2 font-mono text-xs">
            <span className="text-white/60 font-semibold">{client.start}</span>
            <div className="lg:h-10 h-px lg:w-px w-6 bg-gradient-to-b from-cyan-500/50 to-blue-500/50" />
            <span className="text-cyan-400 font-bold">{client.end}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Compact card (past clients) ───────────────────────────────
function CompactCard({ client, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
      className="relative overflow-hidden rounded-2xl border border-blue-500/15 bg-white/[0.015] group hover:border-blue-500/25 transition-colors"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - r.left}px`)
        e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - r.top}px`)
      }}
    >
      {/* Faint spotlight */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(200px circle at var(--mouse-x,50%) var(--mouse-y,50%), rgba(59,130,246,0.04), transparent)' }} />

      <div className="p-5">
        {/* Org header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2.5">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-blue-500/20 bg-blue-500/10 shrink-0">
              <img
                src={`https://unavatar.io/x/${client.orgHandle}`}
                alt={client.organization}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="text-white font-bold text-base">{client.organization}</h3>
                <a href={client.orgUrl} target="_blank"
                  className="text-[10px] text-blue-400/40 hover:text-blue-400 transition-colors flex items-center gap-0.5">
                  <FaXTwitter size={9} />@{client.orgHandle}
                </a>
              </div>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-blue-100/25 text-[10px]">via</span>
                <a href={client.contactUrl} target="_blank"
                  className="text-[10px] text-blue-400/45 hover:text-blue-400 font-semibold flex items-center gap-0.5 transition-colors">
                  <img src={`https://unavatar.io/x/${client.contactHandle}`} className="w-3 h-3 rounded-full" onError={(e) => { e.target.style.display = 'none' }} />
                  @{client.contactHandle}
                </a>
              </div>
            </div>
          </div>

          {/* Status */}
          <span className="text-[10px] font-mono text-blue-400/30 border border-blue-500/15 rounded-full px-2 py-0.5 shrink-0">
            COMPLETED
          </span>
        </div>

        {/* Role + type */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className="text-blue-400/70 font-semibold text-xs">{client.role}</span>
          <Badge variant="secondary">{client.type}</Badge>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {client.tags.map(t => <Badge key={t} variant="outline">{t}</Badge>)}
        </div>

        {/* Rate + duration + dates */}
        <div className="flex items-center justify-between pt-3 border-t border-blue-500/10">
          <div>
            <span className="text-white/60 font-bold text-base font-mono">{client.rate}</span>
            <span className="text-blue-400/35 text-xs font-mono"> {client.rateSuffix}</span>
            <div className="text-blue-400/30 text-[10px] mt-0.5">{client.duration}</div>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <span className="text-white/45">{client.start}</span>
            <span className="text-blue-500/25">→</span>
            <span className="text-blue-400/50">{client.end}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const Clients = () => {
  return (
    <div className='w-screen flex flex-col items-center text-center -translate-x-4 md:-translate-x-16 mt-24'>
      <Heading>Clients</Heading>
      <div className='w-[90%] max-w-4xl flex flex-col gap-5'>
        {/* Featured active client */}
        <FeaturedCard client={clientArr[0]} />

        {/* Past clients grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clientArr.slice(1).map((client, idx) => (
            <CompactCard key={idx} client={client} index={idx} />
          ))}
        </div>
      </div>
    </div>
  )
}
