import './DisplayMenu.scss';
import images from '../containers/container'
import {foodList} from '../containers/functionContainer'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useEffect, useState } from 'react';
import { useFoodContext } from '../../context/foodContext';
const DisplayMenu = ()=>{
      const [pop , setPop ] = useState(null);
      const {FoodLists,setFoodList} = useFoodContext()
      const addToCart = (item)=>{
        if(!item) return;
        setFoodList(prev => [...prev,
            {
                id:item.id,
                title:item.title,
                image:item.images,
                quantity:1,
                price:item.paragraph,
            }
        ]); 
               
      }
      useEffect(()=>{
        console.log(FoodLists);
      },[FoodLists])
      
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
                               {
                                foodList && foodList.map((item , i)=>(
                                <div className="DisplayingFoodContainer" key={item.id}>
                                    <img src={item.images} alt="" />
                                    <div className="theText">
                                        <h1>{item.title}</h1>
                                        <p>{item.paragraph} birr</p>
                                        <button className='addToCart' onClick={()=>addToCart(item)}>Order Now <ArrowForwardIosOutlinedIcon style={{fontSize:'16px',fontWeight:300}}/></button>
                                    </div>
                                    <div className="blackShadow"></div>
                                </div>
                                ))
                              }
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