import React from 'react'
import './BlackCard.css'
import arrow from '../../assets/arrow.png'

const BlackCard = () => {
  return (
    <div className='blackcard'>
      <h3>VIEW MORE <br />METRICS</h3>
      <img src={arrow} alt="" />
    </div>
  )
}

export default BlackCard
