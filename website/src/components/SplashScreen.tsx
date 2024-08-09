import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='animate-ping'>
        <Image
          src="/logo.png"
          height={1000}
          width={1000}
          alt="patient"
          className="mb-2 h-10 w-fit"
        />

    </div>
  )
}

export default Hero