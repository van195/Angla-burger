import './Landing.scss';
import NavBar from '../../componets/NavBar/NavBar';
import images from '../../componets/containers/container';
import SideRotateMenu from '../../componets/sideRotateMenu/sideRotateMenu.jsx'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import OurStory from '../../componets/ourStory/ourStory.jsx';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/all';
import WhyWeGetChosen from '../../componets/WhyWeGetChosed/WhyWeGetChosen.jsx';
import Footer from '../../componets/footer/footer.jsx';
import { Link } from 'react-router-dom';
const Landing =()=>{
    useGSAP(() => {
            gsap.registerPlugin(ScrollTrigger);
             const lenis = new Lenis();
                    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
                    lenis.on('scroll', ScrollTrigger.update);
            
                    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
                    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
                    gsap.ticker.add((time) => {
                    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
                    });
            
                    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
                    gsap.ticker.lagSmoothing(0);
                    const tl = gsap.timeline({
                        defaults: {
                        ease: "power2.out"
                        }
                    });

                    tl.from(".bun-bottom", {
                        y: -900,
                        x: -50,
                        rotation: -20,
                        opacity: 0,
                        duration: 0.8,
                        ease: "bounce.out"
                    })

                    .from(".lettuce", {
                        y: -850,
                        x: 40,
                        rotation: 15,
                        opacity: 0,
                        duration: 0.65,
                        ease: "bounce.out"
                    }, "-=0.45")

                    
                    .from(".meat", {
                        y: -830,
                        x: -35,
                        rotation: -10,
                        opacity: 0,
                        duration: 0.6,
                        ease: "bounce.out"
                        }, "-=0.4")
                        .from(".cheese", {
                        y: -820,
                        x: -30,
                        rotation: -15,
                        opacity: 0,
                        duration: 0.65,
                        ease: "bounce.out"
                        }, "-=0.42")
                    
                        .from(".patty", {
                        y: -950,
                        x: 20,
                        rotation: 8,
                        opacity: 0,
                        duration: 0.75,
                        ease: "bounce.out"
                        }, "-=0.4")
                    .from(".tomato", {
                        y: -830,
                        x: -35,
                        rotation: -10,
                        opacity: 0,
                        duration: 0.6,
                        ease: "bounce.out"
                    }, "-=0.4")
                    .from(".meat1", {
                        y: -830,
                        x: -35,
                        rotation: -10,
                        opacity: 0,
                        duration: 0.6,
                        ease: "bounce.out"
                        }, "-=0.4")
                        .from(".lettuce1", {
                        y: -850,
                        x: 40,
                        rotation: 15,
                        opacity: 0,
                        duration: 0.65,
                        ease: "bounce.out"
                    }, "-=0.45")
                    .from(".bun-top", {
                        y: -1000,
                        x: 30,
                        rotation: 12,
                        opacity: 0,
                        duration: 0.8,
                        ease: "bounce.out"
                    }, "-=0.1")

                    // Finished burger pop
                    .to(".burger", {
                        scale: 1.04,
                        duration: 0.12
                    })
                    .to(".burger", {
                        scale: 1,
                        duration: 0.25,
                        ease: "back.out(3)"
                    });

         return () => {
            gsap.ticker.remove(ScrollTrigger.update);
            lenis.destroy();
         };

        });
            return(
        <div className='Landing'>
            <NavBar
             buttonType='Order Now'
            />
            <div className="LandingContainer">
                <div className="theLeftSideOfTheBoard">
                    <div className="theLeftSideOfTheBoardContainer">
                        <h1>your Craving <strong>Just</strong> Found <strong>a</strong>t home</h1>
                        <p>Life is too short to miss out on double cheese burger.</p>
                        <Link to='/home'>
                            <button className="orderNowCfa">
                                <img src={images.mustard} alt="" />
                                <h5>Order Now!</h5>
                            </button>
                        </Link>
                        <div className="decoration">
                            <img src={images.curvedArrow} className='curvedArrow' alt="" />
                            <img src={images.bigStart} className='bigStart' alt="" />
                            <img src={images.singleCircleOnion} className='singleCircleOnion' alt="" />
                        </div>
                    </div>
                </div>
                
                <div className="theRightSideOfTheBoard">
                    <div className="burger">
                        <img className="ingredient bun-top" src={images.topBun} />
                        <img className="ingredient lettuce" src={images.letuce} />
                        <img className="ingredient lettuce1" src={images.letuce} />
                        <img className="ingredient cheese" src={images.cheese} />
                        <img className="ingredient patty" src={images.onions}/>
                        <img className="ingredient meat" src={images.meat}/>
                        <img className="ingredient meat1" src={images.meat}/>
                        <img className="ingredient tomato" src={images.tomato} />
                        <img className="ingredient bun-bottom" src={images.bottomBun} />
                    </div>
                        <div className="decoration2">
                            <img src={images.timo2} className='timo2' alt="" />
                            <img src={images.chips_0000_1} className='chips_0000_1' alt="" />
                            <img src={images.SingleOnion} className='SingleOnion' alt="" />
                        
                        </div>
                </div>

            </div>
            <SideRotateMenu/>
            <OurStory/>
            <WhyWeGetChosen/>
            <Footer/>
        </div>
    )
}
export default Landing;