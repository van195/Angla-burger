import React, { useRef } from 'react'
import './sideRotateMenu.scss';
import InfiniteSideScroll from '../infinitySideScroll/InfiniteSideScroll';
import images from '../../componets/containers/container'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MotionPathPlugin, ScrollTrigger } from 'gsap/all';
import { getClosestImage, headerFont, headerPharagraphFont, sideViewHeader, sideViewParagraph } from '../containers/functionContainer';
import { useInView, motion } from 'motion/react';
gsap.registerPlugin(ScrollTrigger , MotionPathPlugin) ;
const SideRotateMenu = () => {
    const ref = useRef();
    const IsInView = useInView(ref,{margin:'-200px'})    
    const carousel= document.querySelector(".carousel");
    const heroPoint = {
          x: window.innerWidth * 0.82,
          y: 170
        };
    let activeImage = null;
    useGSAP(()=>{
        const carousel= document.querySelector(".carousel");
        const images = gsap.utils.toArray(".carousel img");
        gsap.set(images,{
          transformOrigin:'50% 50%',
          motionPath:{
              path:document.querySelector("#circle"),
              align:document.querySelector("#circle"),
              alignOrigin:[0.5, 0.5],
              start:-0.25,
              end:(i)=> i / images.length - 0.25,
              autoRotate:true,
          }
        });
        gsap.to(carousel,
            {
                rotation:-360,
                ease:"none",
                scrollTrigger:{
                    trigger:".sideRotateMenu",
                    start:"top top",
                    end: "+=300",
                    pin:true,
                    scrub:1,
                    anticipatePin:1,
                    snap:1 / images.length, 
                     onUpdate: () => {
                        

                        const closest = getClosestImage(images, heroPoint);
                          
                        if (closest !== activeImage) {

                            if (activeImage) {
                                gsap.to(activeImage,{
                                    scale:0.8,
                                    opacity:0.5,
                                    duration:0.3
                                });
                            }

                            gsap.to(closest,{
                                scale:1.3,
                                opacity:1,
                                duration:0.3
                            });

                            activeImage = closest;
                        }
                    }
                }
            }
        )

    }, {
   scope: carousel
})
  return (
    <div className='sideRotateMenu'ref={ref}>
        <InfiniteSideScroll/>
        <div className="sideRotateMenuContainer" >
          <motion.div className="left">
            <motion.div className="leftContainer">
              <motion.h1 variants ={sideViewHeader} initial='initial' animate={IsInView ? 'animate':'initiate'} >Find your next craving</motion.h1>
                <p>
                    Explore handcrafted burgers, wraps, fried chicken, and more 
                    every spin reveals another irresistible favorite.
                    Every meal is thoughtfully crafted using fresh ingredients, 
                    premium cuts, and bold seasonings to deliver unforgettable
                    flavor in every bite. Explore our signature burgers, crispy chicken,
                    and handcrafted wraps each made fresh, served hot, and designed 
                    to satisfy every craving from the very first taste.
               </p>
               <button className="Explore">Explore</button>
            </motion.div>
          </motion.div>
          <div className="right">
             <div className="carouselContainer">
                <div className="carousel">
                    <svg 
                      className='ring'
                      width="900" 
                      height="900"
                      viewBox="0 0 900 900" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg">
                     <path id='circle' d="M441.258 59.6357C568.398 72.9729 642.773 101.594 694.809 151.472C747.688 202.158 785.987 282.696 821.467 420.385C811.489 549.386 770.704 643.981 709.79 708.434C648.43 773.358 561.459 813.204 449.493 822.838C332.791 814.815 236.815 774.637 170.013 708.798C103.778 643.518 61.3085 548.217 59.5469 419.877C78.6573 301.069 118.661 215.221 177.993 157.71C236.759 100.749 320.96 65.3223 441.258 59.6357Z" stroke="#e47d3944" strokeWidth="129"/>
                    </svg>
                    
                        <img src={images.theBurger} alt="" />
                        <img src={images.chicken} alt="" />
                        <img src={images.shawarma2} alt="" />
                
                </div>
             </div>
          </div>
        </div>
    </div>
  )
}

export default SideRotateMenu