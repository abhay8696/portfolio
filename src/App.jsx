import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <Navbar />
      <Hero/>
      <Skills />
      {/* <Projects /> */}
    </main>
    </>
  )
}

export default App
