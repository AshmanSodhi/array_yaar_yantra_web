import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Slide from './components/Slides/Slides'
import Statistics from './components/Statistics/Statistics'
import Marquee from './components/Marquee/Marquee'
import Dashboard from './components/Dashboard/Dashboard'
import Graph from './components/Graph/Graph'
import Table from './components/Table/Table'
import Insights from './components/Insights/Insights'
import Trends from './components/Trends/Trends'
import Footer from './components/Footer/Footer'
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
      <Graph/>
      <Table/>
      <Marquee/>
      <Insights/>
      <Trends/>
      <Footer/>
    </div>
  )
}

export default App
