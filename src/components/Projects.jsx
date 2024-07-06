"use client"
import dynamic from 'next/dynamic';

export default function page() {
  
  return (
    <>
        <h2 className='text-center py-4 font-bold text-3xl dark:text-teal-300 text-gray-600 mb-10'>Projects</h2>
        <div className="flex flex-wrap justify-center max-sm:pb-10 sm:pb-10 md:pb-20 lg:pb-32">
            <div className="p-4 max-w-sm animate-fade-up">
                <div className="flex rounded-lg h-full dark:bg-gray-600 bg-white border py-52 dark:border-gray-700 p-8 flex-col">
                <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 text-center'>Soon</h2>
                <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 opacity-0 '> Hopefully I will land a job</h2>
                </div>
            </div>
            <div className="p-4 max-w-sm animate-fade-up">
                <div className="flex rounded-lg h-full dark:bg-gray-600 bg-white border py-52 dark:border-gray-700 p-8 flex-col">
                <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 text-center'>Soon</h2>
                <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 opacity-0 '> Hopefully I will  land a job</h2>
                </div>
            </div>
            <div className="p-4 max-w-sm animate-fade-up">
                <div className="flex rounded-lg h-full dark:bg-gray-600 bg-white border py-52 dark:border-gray-700 p-8 flex-col">
                <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 text-center'>Soon</h2>
                <h2 className='text-2xl font-extrabold text-gray-600 dark:text-teal-300 opacity-0 '> Hopefully I will  land a job</h2>
                </div>
            </div>
        </div>
    </>
  );
}
