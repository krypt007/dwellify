import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Features = () => {
  return (
    <div className='flex flex-col md:flex-row bg-purple-100 w-screen justify-center p-3'>
        <div className='flex w-screen md:w-[40%]'>
            <Image
                src="/images/features.jpg"
                height={1000}
                width={1000}
                alt="patient"
                className="mb-2 h-50 w-fit"
            />
        </div>

        <div className='flex w-screen flex-col md:w-[40%] items-start justify-start p-2 gap-3 overflow-x-clip'>
            <div className='flex flex-col items-start justify-start p-5'>
                <p className='text-[#9003fc]  text-2xl text-left'>Core Features</p>
                <p className='text-black font-bold  text-lg text-left'>What makes Dwelify different.</p>
            </div>
            {/** Card 1 */}
            <div className='flex'>
            <div>
                <div className='rounded-full p-6 w-[48px] h-[48px] bg-[#9003fc] justify-center items-center text-gray-600'><div className='rounded-full w-[24] h-[24px] border border-white object-fill'></div></div></div>
                <div className='px-5 m-2 gap-2'>
                    <div className='px-5 font-bold text-xl'>
                        Dwelify FlexRent

                    </div>
                    <div className='px-5 text-gray-600 text-sm'>
                        {`Rent Now, Pay Later. Are you a resident at a Dwelify-partnered property worried about this month's rent? 
                        Let those worries fade away. Dwelify offers an immediate rent payment solution, covering your rent upfront 
                        and giving you the breathing room you need. Repay by the end of the month with a minimal interest charge, 
                        with the option to pay in installments or settle in one go. Enjoy secure living with ease and convenience.`}
                    </div>
                </div>
            </div>

            {/** Card 2 */}
            <div className='flex'>
                <div>
                    <div className='rounded-full p-6 w-[48px] h-[48px] bg-[#9003fc] justify-center items-center'>
                        <div className='rounded-full w-[24] h-[24px] border border-white object-fill'></div>
                    </div>
                </div>
                <div className='px-5 text-gray-800'>
                    <div className='px-5 font-bold text-xl text-gray-600'>
                        Dwelify SafeLease
                    </div>
                    <div className='px-5'>
                    <div className='text-sm'>
                        Save big with our affordable deposit alternative.
                    </div>
                    <div className='text-sm'>
                        {`Every renter deserves options. Whether you choose to go deposit-free or pay a cash deposit. 
                        Personalize your experience with our flexible move-in options, including a monthly subscription 
                        or interest-free installment repayments.
                        Complete move-in and move-out seamlessly from your phone. instant and paperless. 
                        We'll manage your security deposit and protect you from potential disputes, making renting much easier.`}
                    </div>
                </div>
                </div>
                </div>
                

                <div><Button>Learn More</Button></div>

            </div>


    </div>
  )
}

export default Features