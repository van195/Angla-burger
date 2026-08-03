import './DisplayMenu.scss';
import images from '../containers/container'
import {foodCategory, foodList} from '../containers/functionContainer'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useEffect, useState } from 'react';
import { useFoodContext } from '../../context/foodContext';
import { useSearchContext } from '../../context/searchContext';
import axios from 'axios';
import useFetch from '../../util/useFetchHook';
import Loading from '../loading/loading';
const DisplayMenu = ()=>{
      const {searchButtonClicked,setSearchButtonClicked} = useSearchContext();
      const {FoodLists,setFoodList} = useFoodContext()
      const [activated , setActivated] = useState('Burger');
      const [activatedList,setActivatedList] = useState([]);
      const {loading, data,error} = useFetch('http://localhost:8080/api/category/list-category')    
      useEffect(() => {
        if (!data?.length) return;
        const burger = data.find(item => item.name === "Burger");
        if (burger) {
            setActivated("Burger");
            setActivatedList(burger.products);
            newList(activated)
        }
      }, [data]);
      console.log(data);
      
      const addToCart = (item)=>{
        if(!item) return;
        setFoodList(prev => [...prev,
            {
                id:item.id,
                title:item.name,
                image:item.image,
                quantity:1,
                price:item.price,
            }
        ]); 
      }      
     const newList = async(categoryName)=>{
        console.log('catagory name',categoryName);
        setActivated(categoryName);           
        const activatedList = data?.find((items)=>{
         return items.name === categoryName;
        });
        setActivatedList(activatedList?.products);
    }
    return(
        <div className="DisplayMenu">
            
            <div className="DisplayMenuContainer">
                <div className="searchContainer">
                 <h1>All offer from angla, addis abeba </h1>
                  <button onClick={()=>setSearchButtonClicked(true)} className="searchIdentifire">
                    <p>search...</p>
                  </button>
                </div>
               
                <div className="menuContainer">
                    <div className="menuOption">
                        <ul className='foodMenu'>
                            { foodCategory.map((item)=>(
                                <li 
                                    className={ activated === item ? 'activated' :''}
                                    onClick={()=>{newList(item)}}>
                                        {item}
                                </li>
                            ))
                            }
                        </ul>
                        <ul className='drinkMenu'>
                            <li className={'activated'} > soft drinks</li>
                        </ul>
                    </div>
                    <div className="menuDisplayed">
                       <div className="menuDisplayedContainer">
                            <div className="DisplayingFood">
                               { loading ? <Loading/>:
                                activatedList?.map((item , i)=>(
                                <div className="DisplayingFoodContainer" key={item.id}>
                                    <img src={`/${item.image}`} alt="" />
                                    <div className="theText">
                                        <h1>{item.name}</h1>
                                        <p>{item.price} birr</p>
                                        <button className='addToCart' onClick={()=>addToCart(item)}>Order Now <ArrowForwardIosOutlinedIcon style={{fontSize:'16px',fontWeight:300}}/></button>
                                    </div>
                                    <div className="blackShadow"></div>
                                </div>
                                ))
                              }
                            </div>
                            <div className="DisplayingDrinks">
                               { data 
                                  ?.find(category => category.name === "soft drink")
                                  ?.products?.map((item)=>(
                                  <>
                                    <div className="DisplayingFoodContainer">
                                            <img src={`/${item.image}`} alt="" />
                                            <div className="theText">
                                               <h1>{item.name}</h1>
                                               <p>{item.price} birr</p>
                                                <button className='addToCart' onClick={()=>addToCart(item)}>Order Now <ArrowForwardIosOutlinedIcon style={{fontSize:'16px',fontWeight:300}}/></button>
                                            </div>
                                            <div className="blackShadow"></div>
                                        </div>
                                 </>
                               ))
                               }
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DisplayMenu;