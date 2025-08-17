"use client"
import { Login } from '@/app/components/auth/login'
import React from 'react'
import Image from 'next/image'
import { Icon } from "@iconify/react";
import Link from 'next/link';

const Account = () => {
  return (
    <div className="relative p-4 md:p-10 m-0 min-h-screen w-screen bg-[url('/assets/images/cryptxion-bg.jpg')] bg-cover bg-center absolute inset-0 bg-fixed">
     <div className="absolute inset-0 bg-blue-400 mix-blend-multiply"></div>
    <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-2 '>
    <div>
    <div className='text-center md:text-left '>
   <Image src="/assets/images/cryptxion_logo.png" width={160} height={160}  alt='Cryptxion'/>
     <h1 className='text-2xl md:text-4xl font-bold text-gray-200'>Login To cryptxion</h1>
     <p className="text-base text-gray-200 leading-10">Login to Cryptxion and access your secure dashboard.</p>
     <div className='flex gap-4 bg-orange-400 p-2 w-60 justify-center rounded-full mt-5 '>
    <Link href="https://github.com/nasirqureshi-github" target='_blank'><Icon icon="mdi:github" width="24" height="24"/></Link>   
     <Link href="https://www.linkedin.com/in/nasir-hussain-43188623b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><Icon icon="mdi:linkedin" width="24" height="24"/></Link>   
     <Link href="https://web.facebook.com/nasir.qureshi.752566?rdid=6O7zaJovz5ht481m&share_url=https%3A%2F%2Fweb.facebook.com%2Fshare%2F19QD7SrTVK%2F%3F_rdc%3D1%26_rdr#" target='_blank'><Icon icon="mdi:facebook" width="24" height="24"/></Link>   
     <Link href="https://www.instagram.com/nasirqureshi5279/?utm_source=qr&igsh=MTJybzVqZjlnZGlrNA%3D%3D#" target='_blank'><Icon icon="mdi:instagram" width="24" height="24"/></Link> 
  
     </div>
    </div>
    </div>
    <div>
  <Login/>
  </div>
  </div>
  </div>
  )
}

export default Account
