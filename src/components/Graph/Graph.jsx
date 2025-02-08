import React from 'react'
import './Graph.css'
import dlwd from '../../assets/dld.png'
import graphimg from '../../assets/graphhh.jpeg'
const Graph = () => {
    
  return (
    <div className='forecast'>
        <h2>RENEWABLE ENERGY FORECASTING DASHBOARD</h2>
        <div className="content">
            <div className="overview">
                <div className="type">
                    <ul>
                        <li>WIND</li>
                        <li>SOLAR</li>
                        <li>HYDRO</li>
                        <li>OVERVIEW</li>
                    </ul>
                </div>
                <div className="type">
                    <ul>
                        <li>LAST 7 DAYS</li>
                        <li>LAST MONTH</li>
                    </ul>
                </div>
                <div className="download">
                    <button className='dld'>DOWNLOAD REPORT <img src={dlwd} alt="" /></button>
                </div>
            </div>
            <div className="grph"><img src={graphimg} alt="" /></div>
        </div>
      
    </div>
  )
}

export default Graph
