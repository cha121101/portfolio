"use client";
import dynamic from 'next/dynamic';
import React from 'react'
import Image from 'next/image';
import Typewriter from 'typewriter-effect'; 
import Link from 'next/link';
import gradpic from '../../public/assets/img/gradpic2 .svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';



const About = () => {
    const Sidebar = dynamic(( ) => import('@/components/Sidebar'));
  return (
    <div className='grid max-sm:grid-cols-1 sm:grid-cols-2 max-md:grid-cols-1  gap-1'>
    <div className='h-max  dark:bg-zinc-800  max-md:py-28 md:py-28 lg:py-44 xl:py-32 px-12 animate-fade-up animate-once max-sm:hidden max-md:hidden max-lg:block'>
       <Image alt='Grad pic' className='rounded-lg' src={gradpic} height={500} width={700} />
    </div>
    <div className='h-max  max-sm:pt-10 animate-fade-up max-md:pt-10 md:pt-10 lg:pt-52 '>
        <h5 className='fixed -z-10  text-7xl opacity-30 italic font-thin text-teal-300'>Charles Gamboa</h5>
        <div className='px-10 pt-10 animate-replace'>
            <h2 className='text-3xl font-semibold dark:text-gray-300'>Hello, I am</h2>
            <span className='font-bold text-4xl dark:text-gray-300 '> Charles Gamboa  </span> 
            <span className='font-bold text-teal-300 text-3xl block mb-2 font-sans'> A Web Developer </span> 
    </div>
    <div className='px-10'>
        <span className='font-medium text-1xl dark:text-gray-300 font-sans'>
                <Typewriter 
                    onInit={(typewriter) => { 
                    typewriter.typeString('I am a recent graduate with a Bachelor degree in Information Technology. Passionate about coding and solving logical problems, I am currently honing my skills in web development. My enthusiasm for technology drives me to continuously learn and grow in this ever-evolving field.') 
                        .callFunction(() => { 
                        console.log(''); 
                        }) 
                        .pauseFor(500) 
                        .callFunction(() => { 
                        console.log('All strings were deleted'); 
                        }) 
                        .start(); 
                    }} 
                /> 
        </span>
    </div>
        <div className='flex flex-row px-10 py-2'>
            <Link href="https://www.instagram.com/cgamboa422/"><InstagramIcon fontSize='large' className='dark:text-white mr-2'/></Link>
            <Link href="https://www.facebook.com/gamboa1101"><FacebookIcon fontSize='large' className='dark:text-white ml-2' /></Link>   
            
        </div>
    </div>
    </div>
  )
}

export default About
