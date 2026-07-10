import './ourStory.scss';
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger , SplitText } from 'gsap/all';
import Lenis from 'lenis'
import image from '../containers/container'
gsap.registerPlugin(ScrollTrigger , SplitText);
const OurStory =()=>{
    useGSAP(()=>{
            const textElements = document.querySelectorAll(
            ".col3 .col-content .col-content-wrapper h1, .col3 .col-content .col-content-wrapper p"
            );       
            textElements.forEach((el)=>{
            const split = new SplitText(el,{
                type:'lines',
                linesClass:'line'
            });
            split.lines.forEach((line)=>{
                line.innerHTML = `<span>${line.textContent}</span>`;
            })
        })
        gsap.set(".col3 .col-content .col-content-wrapper .line span", {
        y: "100%",
        });
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'.stickyCols',
                start:'top top',
                end:'+=1400px',
                scrub:1,
                pin:true,
            }
        })        
        tl.to('.col1',{opacity:0,scale:0.75})
          .to('.col2',{x:"-5%"},"<")
          .to('.col3',{y:"0%"},"<")
          .to('.col-img1 img',{scale:1.25},"<")
          .to('.col-img2',
            {clipPath: "polygon(0% 0%,100% 0%,100% 100%,0% 100%)",},"<")
          .to('.col-img2 img',{scale:1},"<")
          .to('.col3 col-content col-content-wrapper .line span',{y:"-125%"},"<")


        //  /* -------- step 2 -------- */
        //tl.to('.col2',{opacity:0,scale:0.75})
        //  .to('.col3',{x:"0%"},"<")
        //  .to('.col4',{y:"0%"},"<")
    },[])
    return(
        <div className="ourStory">
            <section className="stickyCols">
                <div className="stickyColsContainer">
                    <div className="col col1">
                        <div className="col-content">
                            <div className="col-content-wrapper">
                                <h1>our story</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate officiis impedit unde eaque porro facere laborum numquam laboriosam atque! Est voluptates ipsum, earum quod quibusdam corrupti repudiandae deleniti quasi.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col col2">
                        <div className="col-img col-img1">
                            <div className="colImageWrapper">
                                <img src={image.FastFood} alt="" />
                            </div>               
                        </div>
                        <div className="col-img col-img2">
                            <div className="colImageWrapper">
                                <img src={image.ClassicCheeseburgerChasety} alt="" />
                            </div>               
                        </div>
                    </div>
                    <div className="col col3">
                        <div className="col-content">
                            <div className="col-content-wrapper">
                                <h1>All the ways we keep your workplace working</h1>
                                <div className="subtopics">
                                    <h2>Catering</h2>
                                    <p>For the little things and the big milestones alike, we’re here to bring the plant party</p>
                                </div>
                                <div className="subtopics">
                                    <h2>Outpost</h2>
                                    <p>A daily batch delivery right to your office to keep your team firing on all cylinders.</p>
                                </div>
                                <div className="subtopics">
                                    <h2>Still WFH</h2>
                                    <p>Learn about our angla credits program so your teams can fuel up with subsidized meals, wherever they are.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default OurStory;
