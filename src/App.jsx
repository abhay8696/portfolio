import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/Contact'

let lastScrollTop = 0;
let sectionList = ["hero", "skills", "projects"]


function App() {
  

  return (
    <>
    <main>
      <Navbar />
      <Hero/>
      <Skills />
      <Projects />
      <Contact />
    </main>
    </>
  )
}

export default App
