import './NavBar.scss';
import { useState } from 'react';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { Link } from 'react-router-dom';
import {useUser} from '@clerk/react';
import Profile from '../profile/profile';
const NavBar =({buttonType})=>{
   const [dropDown ,setDropDown] = useState(false);
   const {user} = useUser();   
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
                {user ? <Profile/>:
                <Link to={'/login'}>
                  <button className="cia">
                      <h1>{buttonType}</h1>
                      <span className="theArrow"><ArrowForwardOutlinedIcon/></span>
                  </button>
                </Link>}
              </div>
            </div>
            <button className="dispalyingIcon" onClick={()=> setDropDown(true)}>
              <ListOutlinedIcon className='listTheMenuIcon'/>
            </button>
            {dropDown &&
            <div className="NavBarContainerResponsive">
              <div className="cancelButton">
                <button className="cancel" onClick={()=> setDropDown(false)}><CloseOutlinedIcon/></button>
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
            }
          
        </div>
    )
}
export default NavBar