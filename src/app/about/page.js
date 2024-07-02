"use client";
import Sidebar from '@/components/Sidebar';
import Image from 'next/image';
import Typewriter from 'typewriter-effect'; 
import { useEffect, useState } from 'react';
import Link from 'next/link';
import gradpic from '../../../public/assets/img/gradpic2 .svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import About from '@/components/About';



export default function page() {
 
  return (
    <>
      <Sidebar  />
      <About />
    </>
  );
}
