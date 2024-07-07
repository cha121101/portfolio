import { Facebook } from '@mui/icons-material'
import Instagram from '@mui/icons-material/Instagram'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="max-sm:relative sm:relative md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 md:bottom-0 md:left-0 md:right-0 bg-white rounded-lg shadow m-4 dark:border-gray-700 dark:bg-gray-700 animate-fade-up">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-300">Created This by Charles Gamboa
        </span>
        <ul className="flex flex-wrap gap-4 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <Link href="https://www.instagram.com/cgamboa422/"><Instagram fontSize='medium' className='dark:text-white mr-2'/></Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/gamboa1101"><Facebook fontSize='medium' className='dark:text-white ml-2' /></Link>   
            </li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer