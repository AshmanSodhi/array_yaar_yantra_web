import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Slide from './components/Slides/Slides'
import Statistics from './components/Statistics/Statistics'
//import Efficiency from './components/Efficiency/Efficiency'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Slide/>
      <Statistics/>
    </div>
  )
}

export default App
