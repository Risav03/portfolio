import React from 'react'

export const Heading = ({children}) => {
  return (
    <h2 className='text-5xl font-bold bg-gradient-to-b h-24 from-emerald-500 to-green-500 text-transparent bg-clip-text'>{children}</h2>
  )
}
