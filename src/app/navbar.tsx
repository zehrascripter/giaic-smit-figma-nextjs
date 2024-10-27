'use client'
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility when icon is clicked
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close dropdown on scroll
  useEffect(() => {
    const handleScroll = () => setIsDropdownOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full h-[68px] px-5 mb-5'>
      <div className='flex justify-between items-center h-full relative'>
        {/* Logo */}
        <div>
          <Image src="/images/logo.png" alt="logo" width={200} height={200} />
        </div>

        {/* Navigation items */}
        <div className='relative'>
          <ul className='flex space-x-6 items-center md:text-[20px] md:font-[500]'>
            {/* Hamburger icon for small screens */}
            <li className='md:hidden absolute top--0 right-0'>
              <AlignJustify 
                onClick={toggleDropdown} 
                className='cursor-pointer'
              />
            </li>

            {/* List items for medium screens and above */}
            <Link href="/"><li className='hidden md:flex'>About</li></Link>
            <Link href='/components/services'><li className='hidden md:flex'>Services</li></Link>
            <Link href='/components/progress'><li className='hidden md:flex'>Progress</li></Link>
            <Link href='/components/contact'><li className='hidden md:flex'>Contact</li></Link>
          </ul>

          {/* Dropdown menu for small screens */}
          {isDropdownOpen && (
            <ul className='absolute top-[20px] right-0 bg-white shadow-md p-4 rounded-md flex flex-col space-y-3 md:hidden'>
              <Link href="/"><li onClick={toggleDropdown}>About</li></Link>
              <Link href='/components/services'><li onClick={toggleDropdown}>Services</li></Link>
              <Link href='/components/progress'><li onClick={toggleDropdown}>Progress</li></Link>
              <Link href='/components/contact'><li onClick={toggleDropdown}>Contact</li></Link>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
