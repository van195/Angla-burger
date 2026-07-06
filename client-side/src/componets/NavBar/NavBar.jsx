import './NavBar.scss';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
const NavBar =()=>{
    return(
        <div className="NavBar">
            <div className="NavBarContainer">
              <div className="logoSection">
                <img src="/images.jpg" alt="" />
              </div>
              <div className="NavigationSection">
                <ul>
                    <li>Menu</li>
                    <li>Price</li>
                    <li>Contact</li>
                </ul>
              </div>
              <div className="callOfActionSection">
                 <button className="cia">
                    <h1>Order Now</h1>
                    <span className="theArrow"><ArrowForwardOutlinedIcon/></span>
                 </button>
              </div>
            </div>
        </div>
    )
}
export default NavBar