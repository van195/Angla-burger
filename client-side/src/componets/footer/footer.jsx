import './footer.scss';
import images from '../containers/container'
import { footerItem } from '../containers/functionContainer';
const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="theTop">
                <h1>Stay updated with our service</h1>
                <p>Sign up for exclusive promos, new menu drops, store openings, and more.</p>
                <div className="theTopContainer">
                    <input type="email"  placeholder='email'/>
                    <button className="subscribe">subscribe</button>
                </div>
            </div>
            <div className="theBottom">
                <div className="theLeft">
                    <div className="logoContainer">
                     <img src={images.logo} alt="" />
                    </div>
                    <div className="infoSection">
                        <h5 className='phone'>phone : </h5>
                        <h5 className='email'>email : </h5>
                    </div>
                   
                </div>
                <div className="theRight">
                    {footerItem && footerItem.map((item,i)=>(
                        <ul key={i}>
                            <h2>{item.title}</h2>
                            <li>{item.list1}</li>
                            <li>{item.list2}</li>
                            <li>{item.list3}</li>
                            <li>{item.list4}</li>
                        </ul>
                    ))} 
                </div>
            </div>
        </footer>
    )
}
export default Footer;