import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

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
    </main>
    </>
  )
}

export default App
