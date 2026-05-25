"use client"
import React from 'react'
import { Heading } from './heading'
import medbase from "@/assets/projects/medbase.png"
import ed360 from "@/assets/projects/ed360.png"
import dataverse from "@/assets/projects/dataverse.png"
import jim from "@/assets/projects/jim.png"
import jlema from "@/assets/projects/jlema.png"
import jlemaRaffle from "@/assets/projects/jlemaRaffle.png"
import chum from "@/assets/projects/chumchum.png"
import tacotribe from "@/assets/projects/tacotribe.png"
import { ProjectBox } from './UI/projectBox'
import { motion } from 'framer-motion'

export const Projects = () => {
    const arr = [
        {
            name: "namdotxyz",
            img: null,
            xHandle: "namdotxyz",
            tags: ["Next", "TypeScript", "PostgreSQL", "Redis", "AWS"],
            desc: "Full stack platform for Sang W Nam — scalable infrastructure with AI-powered workflow automation.",
            link: "https://x.com/namdotxyz"
        },
        {
            name: "Fireside Base",
            img: null,
            xHandle: "firesidebase",
            tags: ["Web3", "Next", "TypeScript", "Base", "Solidity"],
            desc: "Community platform built on Base chain — social features, on-chain interactions and token mechanics.",
            link: "https://x.com/firesidebase"
        },
        {
            name: "House Protocol",
            img: null,
            xHandle: "houseproto",
            tags: ["Web3", "Next", "TypeScript", "Base", "Solidity"],
            desc: "Web3 protocol interface on Base — smart contract integration with a polished dApp frontend.",
            link: "https://x.com/houseproto"
        },
        {
            name: "MedBase",
            img: medbase,
            tags: ["Web3", "IPFS", "React", "Python"],
            desc: "Making medical documents unforgeable, non-duplicable and universally accessible.",
            link: "https://medbase-ii.firebaseapp.com/"
        },
        {
            name: "Ed360",
            img: ed360,
            tags: ["Next", "Node.js", "MongoDB"],
            desc: "All-in-one student academics management webapp with a reward system.",
            link: "https://ed360-teacher-frontend.vercel.app/dashboard"
        },
        {
            name: "DataVerse",
            img: dataverse,
            tags: ["Web3", "Next", "Solidity", "MongoDB"],
            desc: "An NFT Powered marketplace for buying and selling AI training data.",
            link: "https://statuscode0.vercel.app/"
        },
        {
            name: "Jlema Leaderboard",
            img: jlema,
            tags: ["Web3", "Next", "Solidity"],
            desc: "Leaderboard of Jlema NFT holders with a dynamic badge system based on wallet holdings.",
            link: "https://dapp.jlema.xyz/leaderboard"
        },
        {
            name: "Jlema Raffle",
            img: jlemaRaffle,
            tags: ["Web3", "Next", "Solidity"],
            desc: "Automatic NFT Raffle dApp supporting native token and MATIC with an admin dashboard.",
            link: "https://dapp.jlema.xyz/raffle"
        },
        {
            name: "JimsRPG",
            img: jim,
            tags: ["Web3", "Next", "Solana"],
            desc: "The complete ecosystem for JimsRPG Solana NFT Project.",
            link: "https://jimsrpg.xyz/"
        },
        {
            name: "Chum Chums",
            img: chum,
            tags: ["Web3", "Next", "TypeScript"],
            desc: "A homepage along with a sticker generator for Chumchum NFTs.",
            link: "https://chumchums.vercel.app"
        },
        {
            name: "Taco Tribe",
            img: tacotribe,
            tags: ["Web3", "Next", "Solidity"],
            desc: "Minting, staking, raffle dApps and a marketplace for Taco's native token.",
            link: "https://dapps.tacotribe.shop"
        },
    ]

    return (
        <div className='flex flex-col items-center justify-center w-screen my-24 md:-translate-x-16 -translate-x-4'>
            <Heading>Projects</Heading>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-blue-300/40 text-sm font-mono mb-8"
            >
                {arr.length} shipped products
            </motion.p>
            <div className='flex flex-wrap items-start justify-center gap-5 max-w-7xl px-4'>
                {arr.map((item) => (
                    <ProjectBox
                        key={item.name}
                        name={item.name}
                        img={item.img}
                        xHandle={item.xHandle}
                        desc={item.desc}
                        link={item.link}
                        tags={item.tags}
                    />
                ))}
            </div>
        </div>
    )
}
