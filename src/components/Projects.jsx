"use client"

import Image from 'next/image';
import myrnas from '../../public/assets/img/Dashbaord.svg';
import PortfolioDarkmode from '../../public/assets/img/portfolio.svg'
import PortfolioLight from '../../public/assets/img/postfoliolight.svg'
import dynamic from 'next/dynamic';

export default function Projects() {

    const Footer = dynamic(() => import('@/components/Footer'),{ssr :true});
    const theme = localStorage.getItem('dark')

    console.log(localStorage.getItem('dark'))

  return (
    <>

        <h2 className='text-center max-sm:mt-10 sm:10 md:mt-28 font-bold text-3xl dark:text-teal-300 text-gray-600 mb-10 '>Projects</h2>
        <div className="flex flex-wrap justify-center max-sm:pb-20 sm:pb-20 md:pb-20 lg:pb-32">
            <div className="p-4 max-w-sm animate-fade-up ">
                <div className="flex rounded-lg h-full dark:bg-gray-600  bg-white border py-10 dark:border-gray-700 px-2 flex-col">
                    <Image alt='myrnascuisines' src={myrnas} height={500} width={480} />
                    <div className='px-3 pb-10 pt-8'>
                        <h2 className='text-2xl font-semibold italic text-gray-600 dark:text-teal-300 py-2'> Myrnas Cuisine&apos;s web</h2>
                        <span className='text-base font-normal text-gray-600 dark:text-white '> This website is created from laravel that can select dates for reservation, can manage all the reservation in the system, can send email to the potential customer </span>
                    </div>
                </div>
            </div>
            <div className="p-4 max-w-sm animate-fade-up">
                <div className="flex rounded-lg h-full dark:bg-gray-600  bg-white border pt-10 dark:border-gray-700 px-2 sm:pb-10  flex-col">
                      {theme == "dark" ?  <Image alt='portfolio' src={PortfolioDarkmode} className='px-2' height={500} width={480} /> :  <Image alt='portfolio' src={PortfolioLight} className='px-2' height={500} width={480} />}
                        <div className='px-3 pb-10 pt-7'>
                            <h2 className='text-2xl font-semibold italic text-gray-600 dark:text-teal-300 py-2'> My portfolio</h2>
                            <span className='text-base font-normal text-gray-600 dark:text-white '> This website is a online collection showcases my work, skills, and experiences, providing a visual and interactive way to present my projects and professional accomplishments.  </span>
                        </div>
                    </div>
                </div>
            <div className="p-4 max-w-sm animate-fade-up">
                <div className="flex rounded-lg h-full dark:bg-gray-600 bg-white border py-36 px-32 dark:border-gray-700 p-8 flex-col">
                
                <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 text-center justify-center px-6 py-24'>Soon</h2>
                
                </div>
            </div>
        </div>
        <Footer />
        
    </>
  );
}
