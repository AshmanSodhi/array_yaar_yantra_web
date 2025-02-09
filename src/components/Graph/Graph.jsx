import React,{ useState } from 'react'
import './Graph.css'
import dlwd from '../../assets/dld.png'
import graphimg from '../../assets/graphhh.jpeg'
const Graph = () => {
    const [selectedContent, setSelectedContent] = useState("content1");
  return (
    <div className='forecast'>
        <h2>RENEWABLE ENERGY FORECASTING DASHBOARD</h2>
        <div className="content">
            <div className="overview">
                <div className="type">
                    <ul>
                        <li onClick={() => setSelectedContent("content1")} className={selectedContent === "content1" ? "active" : ""}>
                        WIND</li>
                        <li onClick={() => setSelectedContent("content2")} className={selectedContent === "content2" ? "active" : ""}>SOLAR</li>
                        <li onClick={() => setSelectedContent("content3")} className={selectedContent === "content3" ? "active" : ""}>HYDRO</li>
                        <li onClick={() => setSelectedContent("content4")} className={selectedContent === "content4" ? "active" : ""}>OVERVIEW</li>
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
            
            {selectedContent === "content1" && (
          <div className='grph'>
            <img src={graphimg} alt="" />
          </div>
        )}
        {selectedContent === "content2" && (
          <div className='solar-sheet'>
            <h3>ENTER FEATURES OF SOLAR PANEL</h3>
            <div className="incident">
                <h5>INCIDENT ANGLE</h5>
                <div className="input-field"><input type="text" /></div>
            </div>
            <div className="incident">
            <h5>ZENITH</h5>
            <div className="input-field"><input type="text" /></div>
            </div>
            <div className="incident">
            <h5>DATE</h5>
            <div className="input-field"><input type="text" /></div>
            </div>
            <button className='enter'>ENTER DETAILS</button>
            <hr className='divider'/>
            <div className="output"> 
                <h3>PREDICTED OUTPUT</h3>
            <div className="output-field"></div>
            </div>
          </div>
        )}
        </div>
      
    </div>
  )
}

export default Graph
