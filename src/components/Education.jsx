"use client"

import ViewTimelineRoundedIcon from '@mui/icons-material/ViewTimelineRounded';
import dynamic from 'next/dynamic';
import Link from 'next/link'
import Footer from './Footer';

export default function page() {
    const Footer = dynamic(() => import('@/components/Footer'),{ssr :true});
  return (

    <>
            <div className='px-20 grid max-sm:grid-cols-1 md:grid-cols-2 gap-2 max-sm:py-10 sm:py-10 md:py-20 lg:py-44 overflow-x-hidden overflow-y-hidden'>
            <div className='px-4 animate-fade-up'>
                <h2 className='text-center py-4 font-bold text-3xl dark:text-teal-300 text-zinc-800'>School</h2>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ms-6">            
                        <span className="absolute flex items-center justify-center w-6 h-6  dark:text-white rounded-full -start-3 dark:ring-transparent  ">
                            <ViewTimelineRoundedIcon />
                        </span>
                        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                            <time className=" items-center justify-between mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2020-2024</time>
                            <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">College</span>
                            <div>
                                <div className="text-sm font-extrabold text-gray-500 dark:text-gray-300">Bachelor of Science in Information Technology (IT) </div>
                                <Link className="text-sm font-normal text-gray-500 dark:text-gray-300" href={'https://www.facebook.com/dominicancollegeoftarlacofficial'}>Dominican College of Tarlac</Link>
                        </div>
                            
                        </div>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6  dark:text-white rounded-full -start-3 dark:ring-transparent  ">
                            <ViewTimelineRoundedIcon />
                        </span>
                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                <time className=" items-center justify-between mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2018-2020</time>
                                <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Seniors</span>
                                <div>
                                    <div className="text-sm font-extrabold text-gray-500 dark:text-gray-300">Accountancy, Business, and Management (ABM) </div>
                                    <Link className="text-sm font-normal text-gray-500 dark:text-gray-300" href={'https://www.facebook.com/profile.php?id=100065342286711'}>Cristo Rey High School</Link>
                                </div>
                            </div>
                    </li>
                    <li className="mb-10 ms-6">
                        <span className="absolute flex items-center justify-center w-6 h-6  dark:text-white rounded-full -start-3 dark:ring-transparent  ">
                            <ViewTimelineRoundedIcon />
                        </span>
                            <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                <time className=" items-center justify-between mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2014-2018</time>
                                <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Juniors</span>
                                <div className='text-left'>
                                    
                                    <Link className="text-sm text-left font-normal text-gray-500 dark:text-gray-300" href={'https://www.facebook.com/profile.php?id=100065342286711'}>Cristo Rey High School</Link>
                                </div>
                            </div>
                    </li>
                </ol>
            </div>
            <div className='px-4 animate-fade-up'>
                <h2 className='text-center py-4 font-bold text-3xl dark:text-teal-300 text-zinc-800'>Certificates</h2>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ms-6">            
                        <span className="absolute flex items-center justify-center w-6 h-6  dark:text-white rounded-full -start-3 dark:ring-transparent  ">
                            <ViewTimelineRoundedIcon />
                        </span>
                        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                            <time className=" items-center justify-between mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Dec 13, 2023</time>
                            <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">NetAcad</span>
                            <div>
                                <div className="text-sm font-extrabold text-gray-500 dark:text-gray-300">CCNAv7: Enterprise Networking, Security, and Automation </div>
                            </div>
                            
                        </div>
                    </li>
                    <li className="mb-10 ms-6">            
                        <span className="absolute flex items-center justify-center w-6 h-6  dark:text-white rounded-full -start-3 dark:ring-transparent  ">
                            <ViewTimelineRoundedIcon />
                        </span>
                        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                            <time className=" items-center justify-between mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">March 28, 2023</time>
                            <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">NetAcad</span>
                            <div>
                                <div className="text-sm font-extrabold text-gray-500 dark:text-gray-300">Introduction to Cybersecurity </div>
                            </div>
                            
                        </div>
                    </li>
                    <li className="mb-10 ms-6">            
                        <span className="absolute flex items-center justify-center w-6 h-6  dark:text-white rounded-full -start-3 dark:ring-transparent  ">
                            <ViewTimelineRoundedIcon />
                        </span>
                        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                            <time className=" items-center justify-between mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">Jan 5, 2022</time>
                            <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">NetAcad</span>
                            <div>
                                <div className="text-sm font-extrabold text-gray-500 dark:text-gray-300">CCNAv7: Introduction to Networks</div>
                            </div>
                            
                        </div>
                    </li>
                    <li className="mb-10 ms-6">            
                        <span className="absolute flex items-center justify-center w-6 h-6  dark:text-white rounded-full -start-3 dark:ring-transparent  ">
                            <ViewTimelineRoundedIcon />
                        </span>
                        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                            <time className=" items-center justify-between mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">May 26, 2021</time>
                            <span className="bg-gray-100 text-gray-800 text-xs font-normal me-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">NetAcad</span>
                            <div>
                                <div className="text-sm font-extrabold text-gray-500 dark:text-gray-300">Partner: PCAP - Programming Essentials in Python </div>
                            </div>
                            
                        </div>
                    </li>
                    
                </ol>
            </div>
            </div>
            <Footer />
    </>
  );
}
