
import React, { useState } from 'react'
import Image from 'next/image';
import me from '../../public/assets/img/me.jpg'
import '../app/page.js'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import ButtonThemeToggle from '@/util/ButtonThemeToggle';

const Sidebar = (props) => {
    
    const route = useRouter();
    const path = usePathname()
    const [isOpen, setIsOpen] = useState(false);
    localStorage.setItem('stillopen' , true)
    const getOpen = localStorage.getItem('stillopen')

    const pdfFileURL = "http://localhost:3000/assets/files/cv.pdf"

  return (
    <> 
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
                    <li  className={ path === "/about" ? "text-lg bg-teal-300 hover:text-white flex  items-center p-2 text-gray-900 rounded-lg dark:text-gray-900 hover:bg-teal-500 dark:hover:bg-teal-100 group" : "flex hover:underline hover:underline-offset-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" }>
                        <button  onClick={() => {  route.push('/about' ) }} >
                            <span className="ms-3">About me</span>
                        </button>
                    </li>
                    <li  className={ path === "/education" ? "text-lg bg-teal-300 hover:text-white flex  items-center p-2 text-gray-900 rounded-lg dark:text-gray-900 hover:bg-teal-500 dark:hover:bg-teal-100 group" : "flex hover:underline hover:underline-offset-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" }>
                        <button  onClick={() => {  route.push('/education' ) }} >
                            <span className="ms-3">Education</span>
                        </button>
                    </li>
                    <li  className={ path === "/service" ? "text-lg bg-teal-300 hover:text-white flex  items-center p-2 text-gray-900 rounded-lg dark:text-gray-900 hover:bg-teal-500 dark:hover:bg-teal-100 group" : "flex hover:underline hover:underline-offset-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" }>
                        <button  onClick={() => {  route.push('/service' ) }} >
                            <span className="ms-3">Service</span>
                        </button>
                    </li>
                    <li  className={ path === "/projects" ? "text-lg bg-teal-300 hover:text-white flex  items-center p-2 text-gray-900 rounded-lg dark:text-gray-900 hover:bg-teal-500 dark:hover:bg-teal-100 group" : "flex hover:underline hover:underline-offset-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" }>
                        <button  onClick={() => {  route.push('/projects' ) }} >
                            <span className="ms-3">Projects</span>
                        </button>
                    </li>



                    <a href={pdfFileURL} download={'CV-Charles-Gamboa'} className="flex hover:underline hover:underline-offset-1 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <span className="ms-3">Download My CV</span>
                    </a>

                    <li>
                        <ButtonThemeToggle />
                    </li>
                </ul>
            </div>
        </div>
    </>



  )
}

export default Sidebar
