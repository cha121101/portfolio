"use client";
import dynamic from 'next/dynamic';



export default function page() {
  
  const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });
  const About = dynamic(() => import('@/components/About') , { ssr: false });
  return (
    <>
      
      <Sidebar  />
      <About />
    </>
  );
}
