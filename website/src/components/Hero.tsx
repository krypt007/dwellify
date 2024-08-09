import React from 'react'
import Image from 'next/image'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Hero = () => {
  return (
    <div className='flex flex-col h-full'>
        {/* <Header /> */}
        <div className='flex flex-col items-center'>
            <Image
            src="/logo.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-2 h-20 w-fit"
            />
        </div>
        <div className=''>
            <Image
            src="/images/bg.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-2 rounded-lg shadow-lg"
            />

        </div>
        
        {/** Bottom Text */}
        <div className='flex flex-col items-center'>
            <div className='rounded-sm bg-yellow-200/40 py-2 px-4 '>
                Get Started
            </div>
            <div className='flex text-sm gap-2'>
                Already have an account? <div className='text-yellow-800'>Login</div>
            </div>
        </div>

        {/* <Footer /> */}
    </div>
    
  )
}

export default Hero