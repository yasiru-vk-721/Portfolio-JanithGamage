import React from 'react'
import logo from '../assets/JanithLiaya1.png';
import { FaFacebookF,FaLinkedin, FaTwitter  } from 'react-icons/fa';

function Navbar() {
  return (
    <>
        <div className='relative flex justify-center items-center'>
                <img src={logo} alt="logo" className='w-52' />
                <div className='absolute right-5 flex space-x-6 ml-auto'>
                    <FaFacebookF className='h-8 w-8'/>
                    <FaTwitter className='h-8 w-8' />
                    <FaLinkedin className='h-8 w-8' />
                </div>
        </div>
        <div className='flex justify-center items-center bg-[#1C1C1C] h-10'>
            <ul className='flex flex-row space-x-10 text-slate-50'>
                <li>Home</li>
                <li>Chemistry</li>
                <li>Business</li>
                <li>About me</li>
            </ul>
        </div>
    </>
  )
}

export default Navbar