import React from 'react'
import Image from 'next/image'
// import { useRouter } from 'next/router';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from './ui/button';
import Link from 'next/link';

const Hero = () => {
   // const router = useRouter();

  const handleSignupClick = () => {
    // router.push('/signup');
  };
  return (
    <div className="bg-[url('/images/hero_bg.jpeg')] bg-cover bg-center h-[100vh] w-screen flex flex-col items-center justify-center overflow-hidden">
        {/* <Header /> */}
        <div className='flex flex-col items-center bg-[#9003fc]'>
            <Image
            src="/logo.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-2 h-20 w-fit"
            />
        </div>
        <div className='w-[40vh] h-[40vh] md:w-full md:h-[40vh]'>
            

        </div>
        
        {/** Bottom Text */}
        <div className='flex flex-col items-center'>
            <div className='rounded-sm bg-yellow-200/40 py-2 px-4 '>
                <Link href={"/dashboard"}><Button>Get Started</Button></Link>
            </div>
            <div className='flex text-sm text-white gap-2'>
                Already have an account? 
                <Link href={"/dashboard"}><div className='text-yellow-800'>Login</div></Link>                
            </div>
        </div>

        {/* <Footer /> */}
    </div>
    
  )
}

export default Hero