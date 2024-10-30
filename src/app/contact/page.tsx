"use client";
import ContactForm from '@/components/ContactForm';
import HeroContact from '@/components/HeroContact';
import { StickyScrollRevealDemo } from '@/components/SkillContact';
import React from 'react';

function contact() {
  const handleScrollDown = () => {
    // Adjust the scroll target as needed
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="items-center justify-center bg-black">
      <HeroContact />
      <StickyScrollRevealDemo />
      <ContactForm />
    </div>
  )
}

export default contact