import React, { useState, useEffect } from 'react'
import { cn } from '@/utils/utils'

export const FloatingBoxes = ({children, className}) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpacity(1);
        }, 100); // Small delay to ensure component is mounted

        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            style={{
                opacity: opacity,
                // transition: 'opacity 300ms ease-in'
            }}
            className={cn(
                ` p-[1px] text-white bg-gradient-to-br from-green-500 hover:-translate-y-1 duration-300 min-w-40 to-emerald-500 rounded-xl `,
                className
            )}
        >
            <div className={cn(`bg-gradient-to-br py-2 px-6 w-full flex items-center justify-center rounded-xl from-[#0a0c0e] to-[#000000]`)}>
                {children}
            </div>
        </div>
    )
}