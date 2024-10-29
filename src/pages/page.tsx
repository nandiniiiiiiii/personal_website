"use client";
import { ThreeDCardDemo } from '@/components/BlogComponents';
import React from 'react'

function page() {
  return (
    <div className='flex justify-center aligin-center flex-column m-20'>
      <ThreeDCardDemo/>
      <ThreeDCardDemo/>
    </div>
  )
}

export default page