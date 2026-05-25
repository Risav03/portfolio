"use client"
import React, { useEffect, useRef } from 'react'

export const Background = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Matrix rain effect - subtle blue chars
    const cols = Math.floor(window.innerWidth / 20)
    const charSets = [
      '0123456789abcdefghijklmnopqrstuvwxyz',
      'アイウエオカキクケコ',
      'あいうえおかきくけこ',
      'अआइईउएओकखगचजटतदनपबमयरलवसह',
      'অআইউএওকগচজটতদনপবমরলসহ',
    ]
    const randomChar = () => {
      const set = charSets[Math.floor(Math.random() * charSets.length)]
      return set[Math.floor(Math.random() * set.length)]
    }
    const drops = Array.from({ length: cols }, () => ({
      y: -Math.random() * 40,
      speed: 0.4 + Math.random() * 1.4,
      opacity: 0.08 + Math.random() * 0.22,
      size: 12 + Math.random() * 6,
      drift: (Math.random() - 0.5) * 6,
    }))
    let last = 0

    const draw = (ts) => {
      // throttle to ~20 fps so page can go idle for screenshots
      if (ts - last > 50) {
        last = ts
        ctx.fillStyle = 'rgba(2, 8, 23, 0.05)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        drops.forEach((drop, i) => {
          if (Math.random() > 0.92) return
          ctx.fillStyle = `rgba(59, 130, 246, ${drop.opacity * (0.9 + Math.random() * 0.6)})`
          ctx.font = `${drop.size}px var(--font-mono), "Nirmala UI", "Segoe UI", sans-serif`
          ctx.fillText(randomChar(), i * 20 + drop.drift, drop.y * 20)
          if (drop.y * 20 > canvas.height && Math.random() > 0.96) drop.y = -Math.random() * 20
          drop.y += drop.speed
        })
      }
      animId = requestAnimationFrame(draw)
    }

    draw(0)
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <div className='fixed h-screen w-screen top-0 left-0 z-[-2] bg-[#020817]' />
      <canvas
        ref={canvasRef}
        className='fixed top-0 left-0 z-[-1] opacity-30 pointer-events-none'
      />
      {/* Radial blue glow at center */}
      <div className='fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-blue-600/10 blur-[120px] rounded-full z-[-1] pointer-events-none' />
      <div className='fixed bottom-0 right-0 w-[40vw] h-[30vh] bg-cyan-500/5 blur-[100px] rounded-full z-[-1] pointer-events-none' />
    </>
  )
}
