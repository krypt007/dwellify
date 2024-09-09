'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {UserButton, useUser} from '@clerk/nextjs'
import { Button } from '@nextui-org/react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {user, isSignedIn} = useUser();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50); // Change the color if scrolled more than 50px
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /**
   * <div className='flex justify-between w-full p-2 bg-[#9003fc]'>
        <div className='text-white font-bold p-2'>Dwelify</div>        
        <div className='text-white font-bold p-2 rounded-md bg-[#9003fc] hover:bg-black'>Login</div>
    </div>
   */

  return (
    <header className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-purple-100' : 'bg-[#9003fc]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">
            <p className='text-xl font-serif font-bold'>Dwelify</p>
          </Link>
        </div>
        <nav className='hidden md:block'>
          <ul className="flex space-x-6 text-white">
            <li>
              <Link href="#">
                <p className="hover:text-gray-300">Rent</p>
              </Link>
            </li>
            <li>
              <Link href="/buy">
                <p className="hover:text-gray-300">Buy</p>
              </Link>
            </li>
            <li>
              <Link href="/user">
                <p className="hover:text-gray-300">Sell</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p className="hover:text-gray-300">Invest</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p className="hover:text-gray-300">Manage Rentals</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p className="hover:text-gray-300">Book Demo</p>
              </Link>
            </li>
            
            
          </ul>
        </nav>
        <div className='flex text-white gap-2'>
            {/* <Link href={"/dashboard"}><div  className='text-purple-950 font-normal px-2 py-1 rounded-lg bg-white hover:bg-black hover:text-white'>Login</div></Link>                 */}
            {isSignedIn? <UserButton /> : <div  className='text-purple-950 font-normal px-2 py-1 rounded-lg bg-white hover:bg-black hover:text-white'>Login</div>}
        </div>
      </div>
    </header>
  );
};

export default Header;
