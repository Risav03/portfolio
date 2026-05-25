"use client"
import { useScroll, useSpring, motion } from 'framer-motion'

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className='fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600'
    />
  )
}
