import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'
import Card from '../Card/Card'
import BlackCard from '../BlackCard/BlackCard'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
        <h1>AI-POWERED <br />
RENEWABLE ENERGY <br />
FORECASTING</h1> <br />
<button className="btn">VIEW FORECASTS <img src={arrow} alt="" /></button> <br />
        <div className="card-row">
            <Card/>
            <Card/>
            <Card/>
        </div> <br />
        <div className="card-row">
            <Card/>
            <Card/>
            <BlackCard/>
        </div>
        </div>   
      
    </div>
  )
}

export default Hero
