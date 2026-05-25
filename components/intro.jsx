"use client"

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { MdPictureAsPdf, MdEmail } from "react-icons/md";
import { motion, useMotionValue, useSpring } from "framer-motion";

const roles = ["Full Stack Dev", "Web3 Engineer", "AI Developer", "3D Artist", "Graphic Designer", "Freelancer", "Video Editor"];

function TypingEffect() {
  const [displayed, setDisplayed] = useState("")
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx((i) => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <span className="text-blue-400 font-bold">
      {displayed}
      <span className="inline-block w-[2px] h-[0.9em] bg-cyan-400 ml-[2px] align-middle animate-pulse" />
    </span>
  )
}

function MagneticIcon({ children, href }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 300, damping: 20 })
  const sy = useSpring(y, { stiffness: 300, damping: 20 })

  return (
    <motion.a
      href={href}
      target="_blank"
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect()
        x.set((e.clientX - rect.left - rect.width / 2) * 0.35)
        y.set((e.clientY - rect.top - rect.height / 2) * 0.35)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      className="p-2 rounded-xl border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 hover:border-blue-400/60 text-blue-400 hover:text-blue-300 transition-colors duration-200 flex items-center justify-center"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  )
}

const socialLinks = [
  { href: "https://x.com/Degeneer03",      icon: <FaSquareXTwitter size={20} /> },
  { href: "https://www.linkedin.com/in/risavdeb-patra-703971227/", icon: <FaLinkedin size={20} /> },
  { href: "https://www.instagram.com/__.r.i.j.u.__/", icon: <AiFillInstagram size={20} /> },
  { href: "https://github.com/Risav03",    icon: <FaGithub size={20} /> },
  { href: "https://t.me/degeneer03",       icon: <FaTelegramPlane size={20} /> },
  { href: "https://drive.google.com/file/d/1epkUvvFBT3PB5haj46Zd_46VvsIGWSwT/view?usp=sharing", icon: <MdPictureAsPdf size={20} /> },
]

const tags = ["Freelancer", "Web Developer", "Web3 Developer", "3D Artist", "Video Editor", "AI Workflows", "Leadership", "Graphic Design"]

function seededRandom(seed) {
  const x = Math.sin(seed + 1) * 10000
  return x - Math.floor(x)
}

function Particles() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const count = 18
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: seededRandom(i * 3) * 3 + 1,
            height: seededRandom(i * 3) * 3 + 1,
            left: `${seededRandom(i * 7) * 100}%`,
            top: `${seededRandom(i * 11) * 100}%`,
            backgroundColor: i % 3 === 0 ? 'rgba(6,182,212,0.6)' : 'rgba(59,130,246,0.4)',
          }}
          animate={{
            y: [0, -(30 + seededRandom(i * 5) * 40), 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + seededRandom(i * 13) * 4,
            repeat: Infinity,
            delay: seededRandom(i * 17) * 4,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

function ScanLine() {
  return (
    <motion.div
      className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent pointer-events-none z-10"
      initial={{ top: '0%' }}
      animate={{ top: ['0%', '100%'] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
    />
  )
}

// ── Hero right panel ─────────────────────────────────────────
const terminalLines = [
  { type: 'prompt', text: 'status' },
  { type: 'out',    text: '● available for work', color: 'text-green-400' },
  { type: 'blank' },
  { type: 'prompt', text: 'whoami' },
  { type: 'out',    text: 'Risavdeb Patra  ·  @Degeneer03', color: 'text-cyan-300' },
  { type: 'out',    text: 'Full Stack  ·  Web3  ·  AI', color: 'text-blue-300/60' },
  { type: 'blank' },
  { type: 'prompt', text: 'cat stats.json' },
  { type: 'out',    text: '{', color: 'text-blue-200/50' },
  { type: 'out',    text: '  "experience":  "3+ years",', color: 'text-blue-200/50' },
  { type: 'out',    text: '  "shipped":     11,', color: 'text-blue-200/50' },
  { type: 'out',    text: '  "rate":        "$2,500 / month",', color: 'text-blue-200/50' },
  { type: 'out',    text: '  "timezone":    "IST +5:30"', color: 'text-blue-200/50' },
  { type: 'out',    text: '}', color: 'text-blue-200/50' },
]

const metrics = [
  { value: "4+",   label: "yrs exp",    cls: "top-[12%] left-[4%]",   border: "border-cyan-500/25",   val: "text-cyan-400",   floatY: [-7, 0], dur: 3.6, delay: 1.3 },
  { value: "11+",  label: "shipped",    cls: "top-[18%] right-[4%]",  border: "border-blue-500/25",   val: "text-blue-400",   floatY: [0, -9], dur: 4.1, delay: 1.6 },

  { value: "◉",   label: "open to hire", cls: "bottom-[14%] left-[6%]", border: "border-green-500/25",  val: "text-green-400",  floatY: [0, -6], dur: 3.9, delay: 2.2 },
]

function HeroVisual() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= terminalLines.length) return
    const delay = terminalLines[count]?.type === 'blank' ? 80 : count === 0 ? 900 : 280
    const t = setTimeout(() => setCount(c => c + 1), delay)
    return () => clearTimeout(t)
  }, [count])

  return (
    <div className="flex-1 relative hidden md:flex items-center justify-center overflow-visible">
      {/* Subtle right-panel bg tint */}
     

      {/* Floating metric chips */}
      {metrics.map((m, i) => (
        <motion.div
          key={i}
          className={`absolute z-20 px-3 py-2.5 rounded-xl bg-[#020817]/90 border backdrop-blur-sm ${m.cls} ${m.border}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: m.floatY }}
          transition={{
            opacity: { delay: m.delay, duration: 0.4 },
            scale:   { delay: m.delay, duration: 0.4, type: "spring" },
            y: { duration: m.dur, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: m.delay + 0.5 },
          }}
        >
          <div className={`text-xl font-black font-mono leading-none ${m.val}`}>{m.value}</div>
          <div className="text-blue-400/35 text-[10px] font-mono mt-0.5">{m.label}</div>
        </motion.div>
      ))}

      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.7, type: "spring", stiffness: 100 }}
        className="relative z-10 w-[300px] xl:w-[340px] rounded-2xl border border-blue-500/20 bg-[#030d1c]/96 backdrop-blur-2xl overflow-hidden shadow-[0_8px_60px_rgba(59,130,246,0.07)]"
      >
        {/* Titlebar */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-blue-500/10 bg-blue-950/25">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/55" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/55" />
          <span className="ml-auto text-[10px] text-blue-400/30 font-mono">risav@degeneer ~</span>
        </div>

        {/* Content */}
        <div className="p-4 xl:p-5 font-mono text-[11px] xl:text-[12px] min-h-[270px] space-y-[3px]">
          {terminalLines.slice(0, count).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.12 }}
            >
              {line.type === 'blank' ? (
                <div className="h-2" />
              ) : line.type === 'prompt' ? (
                <div className="flex gap-1.5 items-center">
                  <span className="text-cyan-400/75">~/degeneer</span>
                  <span className="text-blue-500/45">$</span>
                  <span className="text-white/65">{line.text}</span>
                </div>
              ) : (
                <div className={`pl-4 leading-relaxed ${line.color ?? 'text-blue-200/45'}`}>{line.text}</div>
              )}
            </motion.div>
          ))}

          {/* Blinking cursor */}
          <div className="flex gap-1.5 items-center pt-0.5">
            {count >= terminalLines.length && (
              <>
                <span className="text-cyan-400/75">~/degeneer</span>
                <span className="text-blue-500/45">$</span>
              </>
            )}
            <motion.span
              className="inline-block w-[6px] h-[12px] bg-cyan-400/65 rounded-[1px]"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
            />
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      </motion.div>

      {/* Glow behind terminal */}
      <div className="absolute z-0 w-72 h-72 rounded-full bg-blue-600/6 blur-[100px] pointer-events-none" />
    </div>
  )
}

// ── Main component ────────────────────────────────────────────
export default function Intro() {
  return (
    <>
      {/* ── Desktop ── */}
      <div className="w-screen min-h-screen max-md:hidden text-white relative md:-left-16 -left-4 flex overflow-hidden">
        <ScanLine />

        {/* LEFT column */}
        <div className="relative z-10 flex flex-col justify-center gap-7 pl-12 xl:pl-20 w-[50%] shrink-0 py-20">
          <Particles />
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[30vw] h-[50vh] bg-blue-600/8 blur-[80px] rounded-full pointer-events-none -z-10" />

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-xs text-blue-400 font-mono w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            available for work &nbsp;·&nbsp; &gt;_ open to new projects
          </motion.div>

          {/* Name + alias */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.6, type: "spring" }}
          >
            <p className="text-blue-400/40 text-xs font-mono tracking-[0.35em] uppercase mb-2">
              Full Stack + Web3 Developer
            </p>
            <h1 className="text-[4.2rem] xl:text-[5rem] font-black tracking-tight text-white leading-[1.0] drop-shadow-lg">
              Risavdeb Patra
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-white/15 text-xl font-extralight">/</span>
              <motion.span
                className="text-xl xl:text-2xl font-bold text-cyan-400 tracking-[0.2em]"
                style={{ fontFamily: 'var(--font-mono)' }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                DEGENEER
              </motion.span>
            </div>
          </motion.div>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-lg xl:text-xl font-semibold text-white/50 flex items-center gap-2 h-8"
          >
            <span className="text-white/25">I build</span>
            <TypingEffect />
          </motion.div>

          {/* Tag pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2 max-w-lg"
          >
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + i * 0.06 }}
                className="px-3 py-1 rounded-full text-xs font-semibold border border-blue-500/20 bg-blue-500/[0.07] text-blue-300/70 hover:border-blue-400/40 hover:text-blue-200 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="flex gap-2.5"
          >
            {socialLinks.map(({ href, icon }) => (
              <MagneticIcon key={href} href={href}>{icon}</MagneticIcon>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex gap-3"
          >
            <a
              href="mailto:risavdeb03@gmail.com"
              className="group relative overflow-hidden flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-blue-900/50 hover:shadow-blue-600/40"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <MdEmail size={17} />
              Email Me
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">→</span>
            </a>
            <a
              href="https://t.me/degeneer03"
              target="_blank"
              className="group relative overflow-hidden flex items-center gap-2 px-7 py-3 rounded-xl border border-cyan-500/50 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-bold text-sm transition-all duration-200 hover:border-cyan-400/70"
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
              <FaTelegramPlane size={17} />
              Telegram
              <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">→</span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT visual panel */}
        <HeroVisual />
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden min-h-screen flex flex-col items-center justify-center gap-6 py-16 px-4 relative overflow-hidden">
        <Particles />

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-xs text-blue-400 font-mono"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          available for work
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-blue-400/40 text-[10px] font-mono tracking-widest uppercase mb-2">Full Stack + Web3</p>
          <h1 className="text-4xl font-black text-white leading-tight">Risavdeb Patra</h1>
          <div className="flex items-center justify-center gap-2 mt-1.5">
            <span className="text-white/15 text-base font-light">/</span>
            <span className="text-base font-bold text-cyan-400 tracking-widest" style={{ fontFamily: 'var(--font-mono)' }}>
              DEGENEER
            </span>
          </div>
          <div className="text-base text-white/50 mt-3 flex items-center justify-center gap-1.5">
            I build <TypingEffect />
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-1.5 max-w-xs">
          {tags.slice(0, 6).map(tag => (
            <span key={tag} className="px-2.5 py-1 rounded-full text-[10px] font-semibold border border-blue-500/20 bg-blue-500/[0.07] text-blue-300/70">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap justify-center">
          {socialLinks.map(({ href, icon }) => (
            <a key={href} href={href} target="_blank"
              className="p-2.5 rounded-xl border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="flex gap-3">
          <a href="mailto:risavdeb03@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-900/40"
          >
            <MdEmail size={15} /> Email Me
          </a>
          <a href="https://t.me/degeneer03" target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 font-bold text-sm transition-all"
          >
            <FaTelegramPlane size={15} /> Telegram
          </a>
        </div>
      </div>

      {/* Section divider */}
      <div className="w-screen md:-translate-x-16 -translate-x-4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </>
  )
}
