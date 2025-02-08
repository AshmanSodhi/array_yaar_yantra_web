import React, { useRef } from 'react'
import './Slides.css'
import next from '../../assets/next.png'
import prev from '../../assets/prev.png'
import arrow from '../../assets/arrow.png'


const Slides = () => {
    const slider=useRef();
    let tx=0;
    const slideForward=()=>{
        if(tx>-75){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
  return (
    <div className='slides'>
        <h1>INSIGHTS</h1>
        <img src={next} alt="" className="next-btn" onClick={slideForward}/>
        <img src={prev} alt="" className="prev-btn" onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <h3>PREDICTED SOLAR OUTPUT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nisi odio. Phasellus erat justo, facilisis at nibh id, venenatis accumsan eros. Phasellus iaculis, erat in sollicitudin tristique, tellus orci bibendum purus, at placerat nulla odio mattis tortor. </p>
                        <button className='btn1'>READ MORE <img src={arrow} alt="" /></button>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <h3>PREDICTED SOLAR OUTPUT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nisi odio. Phasellus erat justo, facilisis at nibh id, venenatis accumsan eros. Phasellus iaculis, erat in sollicitudin tristique, tellus orci bibendum purus, at placerat nulla odio mattis tortor. </p>
                        <button className='btn1'>READ MORE <img src={arrow} alt="" /></button>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <h3>PREDICTED SOLAR OUTPUT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nisi odio. Phasellus erat justo, facilisis at nibh id, venenatis accumsan eros. Phasellus iaculis, erat in sollicitudin tristique, tellus orci bibendum purus, at placerat nulla odio mattis tortor. </p>
                        <button className='btn1'>READ MORE <img src={arrow} alt="" /></button>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <h3>PREDICTED SOLAR OUTPUT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nisi odio. Phasellus erat justo, facilisis at nibh id, venenatis accumsan eros. Phasellus iaculis, erat in sollicitudin tristique, tellus orci bibendum purus, at placerat nulla odio mattis tortor. </p>
                        <button className='btn1'>READ MORE <img src={arrow} alt="" /></button>
                    </div>
                </li>
            </ul>
        </div>
      
      
    </div>
  )
}

export default Slides
