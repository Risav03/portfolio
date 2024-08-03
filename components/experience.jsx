"use client"

import { useGlobalContext } from "../context/MainContext";
import { Heading } from "./heading";

export default function Experience(){

    const {setTheme} = useGlobalContext();

    return(
        <div id="experience" className="text-center py-20">
            <Heading>Experience</Heading>
            
            
        </div>
    )
}