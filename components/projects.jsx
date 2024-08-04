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

export const Projects = () => {

    const arr = [
        
        {
            name: "MedBase",
            img: medbase,
            tags: ["Web3", "IPFS", "React", "Js", "Python"],
            desc: "Making medical documents unforgeable, non-duplicable and universally accessible.",
            link: "https://medbase-ii.firebaseapp.com/"
        },
        {
            name: "Ed360",
            img: ed360,
            tags: ["Web2", "Next", "Js", "NodeJs", "MongoDB"],
            desc: "All-in-one student academics management webapp with a reward system.",
            link: "https://ed360-teacher-frontend.vercel.app/dashboard"
        },
        {
            name: "DataVerse",
            img: dataverse,
            tags: ["Web3", "Next", "Js", "Solidity", "MongoDB"],
            desc: "An NFT Powered marketplace for buying and selling AI training data.",
            link: "https://statuscode0.vercel.app/"
        },
        {
            name: "Jlema Leaderboard",
            img: jlema,
            tags: ["Web3", "Next", "Js", "Solidity"],
            desc: "A leaderboard of Jlema NFT Holders along with a dynamic badges allocating system based on wallet holdings.",
            link: "https://dapp.jlema.xyz/leaderboard"
        },
        {
            name: "Jlema Raffle",
            img: jlemaRaffle,
            tags: ["Web3", "Next", "Js", "Solidity"],
            desc: "An automatic NFT Raffle dApp supporting native token and MATIC with an admin dashboard to manage.",
            link: "https://dapp.jlema.xyz/raffle"
        },
        {
            name: "JimsRPG",
            img: jim,
            tags: ["Web3", "Next", "Js"],
            desc: "The whole ecosystem for JimsRPG Solana NFT Project",
            link: "https://jimsrpg.xyz/"
        },
        {
            name: "Chum Chums",
            img: chum,
            tags: ["Web3", "Next", "Ts"],
            desc: "A homepage along with a sticker generator for Chumchum NFTs",
            link: "https://chumchums.vercel.app"
        },
        {
            name: "Taco Tribe",
            img: tacotribe,
            tags: ["Web3", "Next", "Js", "Solidity"],
            desc: "Minting dApps, staking dApp, Raffle dApp and a marketplace for Taco's native token",
            link: "https://dapps.tacotribe.shop"
        },
    ]

  return (
    <div className='flex flex-col items-center justify-center w-screen my-10 md:-translate-x-16 -translate-x-4'>
        <Heading>Projects</Heading>
    <div className='flex flex-wrap items-center justify-center gap-5'>
        {arr.map((item)=>(
            <ProjectBox name={item.name} img={item.img} desc={item.desc} link={item.link} tags={item.tags} />
        ))}
    </div>
    </div>
  )
}
