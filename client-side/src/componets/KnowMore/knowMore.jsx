import { useEffect, useState } from 'react';
import './KnowMore.scss';

const KnowMore = ()=>{
    const [open , setOpen] = useState(false);
    const [active , setActive] = useState(null);
    useEffect(()=>{
        if(open){
          return setActive('active')
        }else{
          return setActive(null)

        }
    },[])
    console.log(active);
    console.log(open);
    
    return(
        <div className="knowMore">
            <div className="knowMoreContainer">
              <div className="theTop">
                <h2>Know more about us</h2>
                <div className="FAQandHelp">
                    <h3>FAQ</h3>
                    <h3>Help & Support</h3>
                </div>
              </div>
               <div className="theBottom">
                 <div className="theFAQ">
                   <ul>
                     <button className={`${active}`} onClick={()=>{setOpen(true)}}>How does angla work ?</button>
                     <button> What payment method are we accepted ?</button>
                     <button> Are their any special discount or production available ?</button>
                     <button>Is angla available in my area ?</button>
                   </ul>
                 </div>
                 <div className="theAnswer">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63054.71853137561!2d38.790758952151684!3d8.979517488299823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9b33a3569139%3A0xb505349b8c87fdd2!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1783869280081!5m2!1sen!2set" width="300" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>                 </div>
               </div>
            </div>
        </div>
    )
}
export default KnowMore