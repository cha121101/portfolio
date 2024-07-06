"use client"
import React, {useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import LightModeIcon from '@mui/icons-material/LightMode';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import me from '../../public/assets/img/me.jpg'


const Main = () => {
    const About = dynamic(() => import('@/components/About'),{ssr :true});
    const Education = dynamic(() => import('@/components/Education'),{ssr :true});
    const Projects = dynamic(() => import('@/components/Projects'),{ssr :true});
    const Services = dynamic(() => import('@/components/Services'),{ssr :true});
    const Footer = dynamic(() => import('@/components/Footer'),{ssr :true});
    const [darkMode, setDarkMode] = useState(true);
    const [componentName, setComponentName] = useState('About');

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const theme = localStorage.getItem("theme");
            theme === "dark" ? setDarkMode(true) : setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            localStorage.setItem("theme", darkMode ? "dark" : "light");
            document.documentElement.classList.toggle("dark", darkMode);
        }
    }, [darkMode]);
  

    const [isOpen, setIsOpen] = useState(false);
    localStorage.setItem('stillopen' , true)
    const getOpen = localStorage.getItem('stillopen')

    const [component, SetComponent] = useState(<About />)

    const pdfFileURL = "https://chaportfolio.netlify.app/assets/files/cv.pdf"

  return (
    <>
        <div className=''>
            <div className="text-left flex">
            <button onMouseOver={() => setIsOpen(true)} className="text-white bg-white hover:bg-teal-300 focus:bg-teal-300 font-medium rounded text-sm px-3 py-2.5 dark:bg-zinc-800 dark:hover:bg-zinc-600 focus:outline-none dark:focus:ring-blue-800" type="button" >
                <svg className="w-5 h-5 text-black dark:dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            </div>
            <div id="drawer-navigation"  className={!isOpen ? "fixed top-0 animate-ease-in-out left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-zinc-800 -translate-x-full" : "fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform bg-white dark:bg-zinc-800 transform-none" } tabIndex="-1" aria-labelledby="drawer-navigation-label">
                <div className='flex mt-11 ml-4 justify-center items-center w-max h-52'>
                    <Image className='rounded-full' src={me} width={200}  height={200} alt='me' />
                </div>
                <button type="button" onClick={() => setIsOpen(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg aria-hidden={!isOpen ? "true" : "false"} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        <li onClick={() => {SetComponent(About); setComponentName('About')}}  className={ componentName === "About" ? "text-lg bg-teal-300 hover:text-white flex  items-center p-2 text-gray-900 rounded-lg dark:text-gray-900 hover:bg-teal-500 dark:hover:bg-teal-100 group" : "flex hover:underline hover:underline-offset-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" }>
                                <span className="ms-3">About me</span>
                        </li>
                        <li onClick={() => {SetComponent(Education); setComponentName('Education')} } className={ componentName === "Education" ? "text-lg bg-teal-300 hover:text-white flex  items-center p-2 text-gray-900 rounded-lg dark:text-gray-900 hover:bg-teal-500 dark:hover:bg-teal-100 group" : "flex hover:underline hover:underline-offset-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" }>
                                <span className="ms-3">Education</span>
                        </li>
                        <li onClick={() => {SetComponent(Services); setComponentName('Service')}}  className={ componentName === "Service" ? "text-lg bg-teal-300 hover:text-white flex  items-center p-2 text-gray-900 rounded-lg dark:text-gray-900 hover:bg-teal-500 dark:hover:bg-teal-100 group" : "flex hover:underline hover:underline-offset-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" }>
                                <span className="ms-3">Service</span>                        
                        </li>
                        <li onClick={() => {SetComponent(Projects); setComponentName('Projects')}} className={ componentName === "Projects" ? "text-lg bg-teal-300 hover:text-white flex  items-center p-2 text-gray-900 rounded-lg dark:text-gray-900 hover:bg-teal-500 dark:hover:bg-teal-100 group" : "flex hover:underline hover:underline-offset-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" }>  
                                <span className="ms-3">Projects</span>
                        </li>
                        <a href={pdfFileURL} download={'CV-Charles-Gamboa'} className="flex hover:underline hover:underline-offset-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <span className="ms-3">Download My CV</span>
                        </a>

                        <li>
                        <div className='px-2'>
                            <button type="button" onClick={() => setDarkMode(!darkMode)}
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" data-hs-theme-click-value="dark">
                                <span>{darkMode ? <BedtimeIcon /> : <LightModeIcon />}</span>
                            </button>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div onClick={() => setIsOpen(false)}>
            { component }
        </div>
        {componentName != "About" ?  <Footer /> : ""}
        
    </>
  )
}

export default Main