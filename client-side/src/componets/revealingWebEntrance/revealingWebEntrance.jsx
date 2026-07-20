import './revealingWebEntrance.scss';
import images from '../containers/container'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
const RevealingWebEntrance = ()=>{
   useGSAP(()=>{
       const digit1 = document.querySelector(".digit-1");
       const digit2 = document.querySelector(".digit-2");
       const digit3 = document.querySelector(".digit-3");
       for(let i = 0 ; i < 2; i++){
            for(let j = 0 ; j < 10; j++){
                const div = document.createElement("div");
                div.className = "num";
                div.textContent = j;
                digit3.appendChild(div)
            }
       }
       const finalDigit = document.createElement("div");
                finalDigit.className = "num";
                finalDigit.textContent = 0;
                digit3.appendChild(finalDigit);

        function animation (digital , duration, delay = 0){
            const numHeight = digital.querySelector(".num").clientHeight;
            const totalDistance = (digital.querySelectorAll(".num").length - 1) * numHeight;
            gsap.to(digital,
                {
                    y:-totalDistance,
                    duration:duration,
                    delay:delay,
                    ease:"power2.inOut"
                }
            )
        }
        animation(digit3 ,3,1)
        animation(digit2 , 5)
        animation(digit1 ,2,3)
        gsap.to(".progress-bar",
            {
               width:"30%",
               duration:1.5,
               ease:"power4.inOut",
               delay:7,
            }
        );
        gsap.to(".progress-bar",
            {
               width:"100%",
               opacity:0,
               duration:2,
               delay:4.5,
               ease:"power3.inOut", 
               onComplete:()=>{
                gsap.set(".progress-bar",{
                    display:'none'
                })
               }
            }
        );

        const tl = gsap.timeline({ delay: 5.1 });

tl.to(".hero-imgs > img", {
    clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
    scale: 1.2,
    duration: 0.5,
    ease: "power4.inOut",
    stagger: 0.1,
})

.to(".hero-imgs", {
    scale: 1.2,
    duration: 1.5,
    ease: "power4.inOut",
}, "<") // starts at the same time

.to(".hero", {
    x: -1500,
    opacity: 0,
    duration: 0.5,
    ease: "power4.inOut",
});
        

   },[])
    
    return(
        <section className="hero">
                    <div className="pre-loader">
                        <p>loading</p>
                        <div className="counter">
                            <div className="digit-1">
                                <div className="num">0</div>
                                <div className="num offset">1</div>
                            </div>
                            <div className="digit-2">
                                <div className="num">0</div>
                                <div className="num offset">1</div>
                                <div className="num">2</div>
                                <div className="num">3</div>
                                <div className="num">4</div>
                                <div className="num">5</div>
                                <div className="num">6</div>
                                <div className="num">7</div>
                                <div className="num">8</div>
                                <div className="num">9</div>
                                <div className="num">0</div>
                            </div>
                            <div className="digit-3">
                                <div className="num">0</div>
                                <div className="num">1</div>
                                <div className="num">2</div>
                                <div className="num">3</div>
                                <div className="num">4</div>
                                <div className="num">5</div>
                                <div className="num">6</div>
                                <div className="num">7</div>
                                <div className="num">8</div>
                                <div className="num">9</div>
                            </div>
                            <div className="digit-4">%</div>
                        </div>
                        <div className="progress-bar"></div>
                    </div>
                    <div className="hero-imgs">
                        <img src={images.teenagers} alt="" />
                        <img src={images.teenagers1} alt="" />
                        <img src={images.teenagers} alt="" />
                        <img src={images.teenagers1} alt="" />
                        <img src={images.teenagers} alt="" />
                        <img src={images.teenagers1} alt="" />
                        <img src={images.teenagers} alt="" />

                    </div>
               </section>
    )
}
export default RevealingWebEntrance;