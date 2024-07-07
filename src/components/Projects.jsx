"use client"

import Image from 'next/image';
import myrnas from '../../public/assets/img/Dashbaord.svg';
import PortfolioDarkmode from '../../public/assets/img/portfolio.svg'
import dynamic from 'next/dynamic';

export default function page() {
    const Footer = dynamic(() => import('@/components/Footer'),{ssr :true});
    
  return (
    <>
        <h2 className='text-center py-4 font-bold text-3xl dark:text-teal-300 text-gray-600 mb-10'>Projects</h2>
        <div className="flex flex-wrap justify-center max-sm:pb-10 sm:pb-10 md:pb-20 lg:pb-32">
            <div className="p-4 max-w-sm animate-fade-up ">
                <div className="flex rounded-lg h-full dark:bg-gray-600  bg-white border py-10 dark:border-gray-700 px-2 flex-col">
                    <Image alt='myrnascuisines' src={myrnas} height={500} width={500} />
                    <div className='px-3 pt-8'>
                        <h2 className='text-2xl font-semibold italic text-gray-600 dark:text-teal-300 py-2'> Myrnas Cuisine&apos;s web</h2>
                        <span className='text-base font-normal text-gray-600 dark:text-white '> This website is created from laravel that can select dates for reservation, can manage all the reservation in the system, can send email to the potential customer </span>
                    </div>
                </div>
            </div>
            <div className="p-4 max-w-sm animate-fade-up">
                <div className="flex rounded-lg h-full dark:bg-gray-600  bg-white border pt-10 dark:border-gray-700 px-2 sm:pb-10 flex-col">
                        <Image alt='portfolio' src={PortfolioDarkmode} className='px-2' />
                        <div className='px-3 pt-7'>
                            <h2 className='text-2xl font-semibold italic text-gray-600 dark:text-teal-300 py-2'> My portfolio</h2>
                            <span className='text-base font-normal text-gray-600 dark:text-white '> This website is a online collection showcases my work, skills, and experiences, providing a visual and interactive way to present my projects and professional accomplishments.  </span>
                        </div>
                    </div>
                </div>
            <div className="p-4 max-w-sm animate-fade-up">
                <div className="flex rounded-lg h-full dark:bg-gray-600 bg-white border py-52 dark:border-gray-700 p-8 flex-col">
                <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 text-center'>Soon</h2>
                <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 opacity-0 '> Hopefully I will  land a job</h2>
                </div>
            </div>
        </div>
        <Footer />
        
    </>
  );
}
