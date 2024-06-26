import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Contact from './components/contact/Contact'
import About from './components/About/About'

let lastScrollTop = 0;
let sectionList = ["hero", "skills", "projects"]


function App() {
  

  return (
    <>
    <main>
      <Navbar />
      <Hero/>
      <Projects />
      <About />
      <Contact />
    </main>
    </>
  )
}

export default App
