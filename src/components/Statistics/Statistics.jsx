import React from 'react'
import './Statistics.css'
import Footer from '../Footer/Footer'

const Statistics = () => {
  return (
    <div className='stats'>
        <h2>KEY STATISTICS</h2>
        <div className="stat-container">
      <div className="stat">
        <h3>ENERGY GENERATED</h3>
        <div className='circle'>
            <h4>32 KWH</h4>
            <h5>ESTIMATED ENERGY GENERATED</h5>
        </div>
      </div>
      <div className="stat">
        <h3>COST SAVINGS</h3>
        <div className='circle'>
            <h4>$3240</h4>
            <h5>ESTIMATED COST SAVINGS</h5>
        </div>
      </div>
      <div className="stat">
        <h3>PREDICTION ACCURACY</h3>
        <div className='circle'>
            <h4>95%</h4>
            <h5>ESTIMATED ACCURACY</h5>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Statistics
