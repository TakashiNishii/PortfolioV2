"use client"
import React, { useEffect } from 'react'
import { HomeSection } from '../home/HomeSection'
import { AboutMe } from '../about/AboutMe'
import { Skills } from '../skills/Skills'
import { MyProjects } from '../projects/MyProjects'
import { ContactSection } from './ContactSection'
import { Footer } from '../footer/Footer'
import { initScrollSmoother } from '../../../gsap'

const BodyContent = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      initScrollSmoother();
    }, 2400); // 2s preloader + 0.4s fade out

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      id="smooth-wrapper"
      className='flex flex-col w-full'
    >
      <div id="smooth-content" >
        <HomeSection />
        <AboutMe />
        <Skills />
        <MyProjects />

        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default BodyContent