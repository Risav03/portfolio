"use client"
import React, { useRef, useState } from 'react'
import { Heading } from './heading'
import flask from "@/assets/icons/flask.svg"
import ipfs from "@/assets/icons/ipfs.svg"
import next from "@/assets/icons/nextjs.svg"
import rct from "@/assets/icons/react.svg"
import solidity from "@/assets/icons/solidity.svg";
import tailwind from "@/assets/icons/tailwind-css.svg";
import lighthouse from "@/assets/icons/lighthouse.png"
import mongodb from "@/assets/icons/mongodb.svg"
import node from "@/assets/icons/node-js.svg"
import storyblok from "@/assets/icons/storyblok.png"
import godaddy from "@/assets/icons/godaddy.png"
import postman from "@/assets/icons/postman.png"
import peerlist from "@/assets/icons/peerlist.svg"
import ts from "@/assets/icons/typescript.svg";
import ethglobal from "@/assets/icons/ethglobal.svg";
import Image from 'next/image'
import { IoMdGlobe } from 'react-icons/io'
import { FaEthereum, FaGithub } from 'react-icons/fa6'
import { SiCoinbase, SiPostgresql, SiRedis, SiSolidity } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { motion, useInView } from 'framer-motion'
import { Badge } from './UI/badge'

const arr = [
    {
        hackathon: "Coinbase Hackathon",
        description: "CashDrive: An agentic data marketplace leveraging x402 as the transaction layer, enabling pay-per-use data access with native Coinbase payment rails.",
        project: "CashDrive",
        tech: [<SiCoinbase key="cb" />, <FaNodeJs key="node" />, <SiPostgresql key="pg" />, <SiRedis key="redis" />],
        awards: [],
        link: "",
        github: "",
        date: "Jun '25 – Jul '25"
    },
    {
        hackathon: "ETHGlobal — Agentic Ethereum",
        description: "AgentNet: A smart contract registry for on-chain agents. Built a libp2p communication layer enabling agent-to-agent coordination on the Ethereum network.",
        project: "AgentNet",
        tech: [<FaEthereum key="eth" />, <SiSolidity key="sol" />, <FaNodeJs key="node" />],
        awards: [
            { img: ethglobal, link: "/ETHGlobal_AgenticETH.pdf" },
        ],
        link: "",
        github: "https://github.com/Risav03/AgentNet",
        date: "Jan '25 – Feb '25"
    },
    {
        hackathon: "ETHGlobal Bangkok",
        description: "Backpacker: A decentralized travel review platform leveraging Cartesi Rollups for on-chain federated ML model training, with NFT-based incentives for user-generated travel reviews.",
        project: "Backpacker",
        tech: [<FaEthereum key="eth" />, next, ts],
        awards: [
            { img: ethglobal, link: "/ETHGlobal_Bangkok.pdf" },
        ],
        link: "",
        github: "https://github.com/Risav03/backpacker",
        date: "Nov '24"
    },
    {
        hackathon: "HTM 3.0",
        description: "Medbase is a decentralized solution for storing and managing your medical documents making them universally accessible, unforgeable and impossible to duplicate.",
        project: "Medbase",
        tech: [rct, tailwind, ipfs, flask],
        awards: [{ img: lighthouse, link: "https://certificate.givemycertificate.com/c/f41d78be-0698-450f-be13-bfcb7842efe4" }],
        link: "https://medbase-ii.firebaseapp.com/",
        github: "",
        date: ""
    },
    {
        hackathon: "HTF 3.0",
        description: "Student Academics Management webApp. Attendance, notes, notices, assignment submissions, all under the same roof along with a reward mechanism.",
        project: "Ed360",
        tech: [next, tailwind, mongodb, node],
        awards: [
            { img: storyblok, link: "https://certificate.givemycertificate.com/c/1b7aa65c-ba03-4b7e-b549-d3a140cbb968" },
            { img: godaddy, link: "https://certificate.givemycertificate.com/c/6cc72a1c-8df9-4960-926d-164c5902484e" },
            { img: postman, link: "https://certificate.givemycertificate.com/c/df34dad0-39ae-4ec8-a4d0-de8292e4a074" },
            { img: peerlist, link: "https://certificate.givemycertificate.com/c/727f902b-b1dc-4b8f-9931-db3400f041c6" },
        ],
        link: "https://ed360-teacher-frontend.vercel.app/dashboard",
        github: "https://github.com/Risav03/Ed360-Student-Frontend",
        date: ""
    },
    {
        hackathon: "Status Code 0",
        description: "An online AI training data marketplace where people can sell their data and verify ownership as NFTs and companies can buy copies of this data.",
        project: "DataVerse",
        tech: [next, tailwind, mongodb, node, solidity, ipfs],
        awards: [],
        link: "https://statuscode0.vercel.app/",
        github: "https://github.com/Risav03/statuscode0",
        date: ""
    },
]

function HackathonCard({ item, index }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-50px" })
    const [flipped, setFlipped] = useState(false)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
            className="w-[22rem] h-[26rem] cursor-pointer perspective-1000"
            onClick={() => setFlipped(f => !f)}
            style={{ perspective: '1000px' }}
        >
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <div className='absolute inset-0 rounded-2xl border border-blue-500/20 bg-white/[0.02] backdrop-blur-sm p-6 flex flex-col gap-4 overflow-hidden'
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className='absolute top-0 right-0 w-32 h-32 bg-blue-500/8 blur-3xl rounded-full pointer-events-none' />
                    <div className='absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent' />

                    <div className='flex flex-col items-center gap-1'>
                        <h3 className='text-xl font-black text-center bg-gradient-to-br from-white to-blue-300 bg-clip-text text-transparent'>{item.hackathon}</h3>
                        {item.date && <span className='text-xs text-blue-400/50 font-mono'>{item.date}</span>}
                    </div>

                    <div className='flex items-center justify-center gap-4 py-2 border-y border-blue-500/15'>
                        <div className='text-center'>
                            <p className='text-xs text-blue-300/40 mb-1'>PROJECT</p>
                            <p className='font-bold text-white text-sm'>{item.project}</p>
                        </div>
                        <div className='h-8 w-px bg-blue-500/20' />
                        <div className='text-center'>
                            <p className='text-xs text-blue-300/40 mb-1'>STACK</p>
                            <div className='flex gap-1 justify-center'>
                                {item.tech.map((t, i) => (
                                    React.isValidElement(t)
                                        ? <div key={i} className='w-6 h-6 bg-blue-500/15 border border-blue-500/20 p-1 rounded-lg flex items-center justify-center text-blue-400 text-xs'>{t}</div>
                                        : <Image key={i} src={t} alt="tech" className='w-6 h-6 bg-blue-500/15 border border-blue-500/20 p-[2px] rounded-lg' />
                                ))}
                            </div>
                        </div>
                    </div>

                    {item.awards.length > 0 && (
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-xs text-blue-300/40 font-mono uppercase tracking-wider'>Awards</p>
                            <div className='flex gap-2'>
                                {item.awards.map((p, i) => (
                                    <a key={i} href={p.link} target='_blank' onClick={e => e.stopPropagation()}>
                                        <Image src={p.img} alt="award" className='w-9 h-9 bg-white/10 p-1 hover:scale-125 duration-200 rounded-lg border border-white/10' />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    {(item.link || item.github) && (
                        <div className='flex gap-2 justify-center'>
                            {item.link && (
                                <a href={item.link} target='_blank' onClick={e => e.stopPropagation()}
                                    className='flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors'>
                                    <IoMdGlobe /> Live
                                </a>
                            )}
                            {item.github && (
                                <a href={item.github} target='_blank' onClick={e => e.stopPropagation()}
                                    className='flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors'>
                                    <FaGithub /> GitHub
                                </a>
                            )}
                        </div>
                    )}

                    <p className='text-[10px] text-center text-blue-400/20 font-mono'>click to flip</p>
                </div>

                {/* Back - quick facts */}
                <div className='absolute inset-0 rounded-2xl border border-cyan-500/20 bg-white/[0.02] backdrop-blur-sm p-6 flex flex-col items-center justify-center gap-4'
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent' />
                    <p className='text-xs font-mono text-cyan-400/60 uppercase tracking-wider'>Quick Brief</p>
                    <h3 className='text-2xl font-black text-center bg-gradient-to-br from-cyan-300 to-blue-400 bg-clip-text text-transparent'>{item.project}</h3>
                    <p className='text-sm text-center text-blue-100/60 leading-relaxed'>{item.description}</p>
                    <p className='text-[10px] text-center text-blue-400/20 font-mono mt-auto'>click to flip back</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export const Hackathon = () => {
    return (
        <div className='flex flex-col items-center justify-center w-screen my-24 md:-translate-x-16 max-md:-translate-x-4'>
            <Heading>Hackathons</Heading>
            <p className='text-xs font-mono text-blue-400/40 mb-8'>click cards to flip</p>
            <div className='w-[90%] justify-center items-start flex flex-wrap gap-5'>
                {arr.map((item, idx) => (
                    <HackathonCard key={idx} item={item} index={idx} />
                ))}
            </div>
        </div>
    )
}
