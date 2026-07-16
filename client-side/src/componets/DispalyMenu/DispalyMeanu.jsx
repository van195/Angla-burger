import './DisplayMenu.scss';
import images from '../containers/container'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useState } from 'react';
const DisplayMenu = ()=>{
      const [pop , setPop ] = useState(false)
      console.log(pop);
      
    return(
        <div className="DisplayMenu">
            
            <div className="DisplayMenuContainer">
                <div className="searchContainer">
                 <h1>All offer from angla, addis abeba </h1>
                  <button onClick={()=>setPop(true)} className="searchIdentifire">
                    <p>search...</p>
                  </button>
                </div>
               
                <div className="menuContainer">
                    <div className="menuOption">
                        <ul className='foodMenu'>
                            <li>Burger</li>
                            <li>Shawarma</li>
                            <li>Pizza</li>
                            <li>fries</li>
                        </ul>
                        <ul className='drinkMenu'>
                            <li>Ice Cream</li>
                            <li> coca</li>
                        </ul>
                    </div>
                    <div className="menuDisplayed">
                       <div className="menuDisplayedContainer">
                            <div className="DisplayingFood">
                                <div className="DisplayingFoodContainer">
                                    <img src={images.hamburger} alt="" />
                                    <div className="theText">
                                        <h1>hamburger</h1>
                                        <p>670 birr</p>
                                        <button className='addToCart'>Order Now <ArrowForwardIosOutlinedIcon style={{fontSize:'16px',fontWeight:300}}/></button>
                                    </div>
                                    <div className="blackShadow"></div>
                                </div>
                                <div className="DisplayingFoodContainer">
                                    <img src={images.hamburger} alt="" />
                                    <div className="theText">
                                        <h1>hamburger</h1>
                                        <p>670 birr</p>
                                        <button className='addToCart'>Order Now <ArrowForwardIosOutlinedIcon style={{fontSize:'16px',fontWeight:300}}/></button>          
                                    </div>
                                    <div className="blackShadow"></div>
                                </div>
                                <div className="DisplayingFoodContainer">
                                    <img src={images.hamburger} alt="" />
                                    <div className="theText">
                                        <h1>hamburger</h1>
                                        <p>670 birr</p>
                                        <button className='addToCart'>Order Now <ArrowForwardIosOutlinedIcon style={{fontSize:'16px',fontWeight:300}}/></button>
                                    </div>
                                </div>
                            </div>
                            <div className="DisplayingDrinks">
                                <div className="DisplayingFoodContainer">
                                    <img src={images.coffee} alt="" />
                                    <div className="theText">
                                        <h1>spris coffee</h1>
                                        <p>670 birr</p>
                                        <button className='addToCart'>Order Now <ArrowForwardIosOutlinedIcon style={{fontSize:'16px',fontWeight:300}}/></button>
                                    </div>
                                    <div className="blackShadow"></div>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DisplayMenu;