import { useEffect, useRef } from 'react';
import './notifications.scss';
import gsap from 'gsap';

const Notification =({type,icon,title})=>{
    const content = useRef();
    useEffect(()=>{
        const tl = gsap.timeline();
        tl.fromTo(
            content.current,
            {
                y:-50,
                opacity:0,
            },
            {
                y:0,
                opacity:1,
                duration:0.4,
                ease:"power2.out",
            }
        )
        .to(
            content.current,
            {
                duration:3, // wait
            }
        )
        .to(
            content.current,
            {
                y:-50,
                opacity:0,
                duration:0.4,
                ease:"power2.in",
            }
        );
    },[])
    return(
        <div className={`notificATION ${type}`} ref={content} >
          <h2>{title}</h2>
          <h3>{icon}</h3>
        </div>
    )
}
export default Notification;