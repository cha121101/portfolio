"use client";

import dynamic from 'next/dynamic';


export default function page() {
    const Main = dynamic(() => import('@/components/Main'),{ssr :false});
  return (
    <>
    
    <Main />
    </>
  );
}
