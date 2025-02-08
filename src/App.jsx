import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Slide from './components/Slides/Slides'
import Statistics from './components/Statistics/Statistics'
import Marquee from './components/Marquee/Marquee'
import Dashboard from './components/Dashboard/Dashboard'
//import Efficiency from './components/Efficiency/Efficiency'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Slide/>
      <Statistics/>
      <Marquee/>
      <Dashboard/>
    </div>
  )
}

export default App
