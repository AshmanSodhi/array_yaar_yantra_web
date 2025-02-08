import React from 'react'
import './Trends.css'
import dlwd from '../../assets/dld.png'
import search from '../../assets/search.png'
import graphimg from '../../assets/graphhh.jpeg'

const Trends = () => {
  return (
    <div className='trends'>
      <div className="search-bar">
        <div className="icon"><img src={search} alt="" /></div>
        <div className="bar">
            <div className="input-field"><input type="text" className='search-input' placeholder='Search...'/></div>
            <div className="filters">FILTER</div>
            <div className="filters">YEAR</div>
            <div className="filters">MONTH</div>
        </div>
      </div>
      <div className="trends-graph"><img src={graphimg} alt="" /></div>
      <div className="download">
            <button className='dld'>DOWNLOAD REPORT <img src={dlwd} alt="" /></button>
        </div>
    </div>
  )
}

export default Trends
