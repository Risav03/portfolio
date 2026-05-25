"use client"
import React, { useRef } from 'react'
import { FaXTwitter } from 'react-icons/fa6'
import { FaTelegramPlane } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { motion, useInView } from 'framer-motion'

export const Footer = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-50px" })

    return (
        <div ref={ref} className='w-screen flex flex-col items-center justify-center -translate-x-4 md:-translate-x-16 relative overflow-hidden'>
            {/* Top divider */}
            <div className='w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent' />

            <div className='relative w-full flex flex-col items-center gap-8 py-20 px-4'>
                {/* Background glow */}
                <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/8 blur-[80px] rounded-full pointer-events-none' />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className='text-center'
                >
                    <p className='text-xs font-mono tracking-[0.3em] uppercase text-blue-400/50 mb-3'>— Let&apos;s build something —</p>
                    <h3 className='text-4xl md:text-5xl font-black bg-gradient-to-br from-white via-blue-200 to-blue-400 bg-clip-text text-transparent'>
                        Get In Touch
                    </h3>
                    <p className='text-blue-300/50 mt-3 text-sm max-w-md'>
                        Open for freelance contracts, collaborations, and interesting Web3 / Full Stack projects.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className='flex flex-col sm:flex-row gap-4'
                >
                    <a
                        href='mailto:risavdeb03@gmail.com'
                        className='group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/50 hover:scale-[1.02]'
                    >
                        <MdEmail size={20} />
                        <div className='text-left'>
                            <div className='text-xs opacity-70'>Email</div>
                            <div>risavdeb03@gmail.com</div>
                        </div>
                        <span className='opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ml-1'>→</span>
                    </a>

                    <a
                        href='https://t.me/degeneer03'
                        target='_blank'
                        className='group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 font-bold text-sm transition-all duration-200 hover:border-cyan-400/60 hover:scale-[1.02]'
                    >
                        <FaTelegramPlane size={20} />
                        <div className='text-left'>
                            <div className='text-xs opacity-60'>Telegram</div>
                            <div>@degeneer03</div>
                        </div>
                        <span className='opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 ml-1'>→</span>
                    </a>

                    <a
                        href='https://x.com/Degeneer03'
                        target='_blank'
                        className='group flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border border-blue-500/25 bg-blue-500/5 hover:bg-blue-500/15 text-blue-300 font-bold text-sm transition-all duration-200 hover:scale-[1.02]'
                    >
                        <FaXTwitter size={18} />
                        <div className='text-left'>
                            <div className='text-xs opacity-60'>Twitter / X</div>
                            <div>@Degeneer03</div>
                        </div>
                    </a>
                </motion.div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='flex flex-col items-center gap-1 mt-4'
                >
                    <p className='text-xs font-mono text-blue-400/30'>
                        © 2025 Risavdeb Patra · Built with Next.js + Framer Motion
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
