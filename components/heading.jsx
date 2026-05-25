"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export const Heading = ({ children }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <div ref={ref} className="relative flex flex-col items-center gap-3 mb-10">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-xs font-mono tracking-[0.3em] uppercase text-blue-400/60"
      >
        — {String(children).toLowerCase()} —
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl font-black bg-gradient-to-br from-white via-blue-200 to-blue-400 text-transparent bg-clip-text"
      >
        {children}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-[2px] w-24 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
      />
    </div>
  )
}
