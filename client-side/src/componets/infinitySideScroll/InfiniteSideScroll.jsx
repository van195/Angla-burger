import './InfiniteSideScroll.scss'
import React, { useEffect, useRef } from 'react'

const InfiniteSideScroll = () => {
    useEffect(()=>{
        const scroller = document.querySelectorAll(".scroller");
        if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
            scroller.forEach((scroller)=>{
            scroller.setAttribute("data-animated",true)
        })        }
    },[])
  return (
    <div className='InfiniteSideScroll'>
      <div className="scroller" >
        <ul className="tag-list scroller_inner">
            <li>Juicy</li>
            <li>Fresh</li>
            <li>Melted Cheese</li>
            <li>Caramelized Onions</li>
            <li>Toasted Bun</li>
            <li>Layered Symmetry</li>
            <li>Warmth</li>
            <li>char grilled</li>
            <li>soft</li>
            <li>golden</li>
            <li>Juicy</li>
            <li>creamy</li>
            <li>Smoky</li>
            <li>Crisp</li>
            <li>crunchy</li>
            <li>Steam</li>
            <li>Zesty</li>
            <li>Tangy</li>
            <li>buttery</li>
            <li>premium</li>
        </ul>
      </div>
    </div>
  )
}

export default InfiniteSideScroll