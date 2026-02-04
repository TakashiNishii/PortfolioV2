"use client"
import React, { useRef } from 'react'
import { HomeSection } from '../home/HomeSection'
import { AboutMe } from '../about/AboutMe'
import { Skills } from '../skills/Skills'
import { MyProjects } from '../projects/MyProjects'
import { ContactSection } from './ContactSection'

const BodyContent = () => {
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
      </div>
    </div>
  )
}

export default BodyContent