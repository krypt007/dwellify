import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Features from './Features'

const HomePage = () => {
  return (
    <div className='flex flex-col w-screen mt-16 items-center justify-center overflow-scroll'>
        <div className='flex w-screen object-fill items-center bg-[#9003fc] p-5'>
            <div className='flex w-screen object-fill items-center justify-center'>
                <div className='flex flex-col w-[60vh] object-fill'>
                    <div className='text-white font-bold text-lg p-2'>
                    End-to-End Real Estate Platform
                    </div>
                    <div className='text-white text-sm p-2'>
                        {`Discover a comprehensive real estate experience tailored to your needs. 
                        Whether you're looking to rent, buy, sell, or invest, our platform offers 
                        everything you need to navigate the real estate market with confidence. 
                        From finding your dream home to exploring investment opportunities,
                        we provide a seamless journey from start to finish.`}
                    </div>
                </div>
            </div>
            <div className='flex w-[50vh] justify-start'>
                <Button>
                    Explore Properties
                </Button>
            </div>
        </div>
        <div>
            <Features />
        </div>
        <div className='flex w-screen object-fill items-center justify-center p-5'>
            <Link href='/dashboard'><div className='flex bg-[#9003fc] rounded-xl px-3 py-2 text-white'>Get Started Now!</div></Link>
        </div>

    </div>
  )
}

export default HomePage