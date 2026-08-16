import './checkOutBoard.scss';
import images from '../containers/container'
import { useFoodContext } from '../../context/foodContext';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTotalBill } from '../containers/functionContainer';
import { AnimatePresence,motion } from 'motion/react';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Notification from '../notifications/notifications';
import useWindowSize from '../../util/useSizeHook';
const CheckOutBoard = ()=>{
        const navigate = useNavigate()
        const { width } = useWindowSize();
        const {FoodLists,setFoodList} = useFoodContext();
        const total = getTotalBill(FoodLists);
        const [revealCheckOut , setRevealCheckOut] = useState('browser');
        const [dropDown ,setDropDown] = useState(false)
        useEffect(()=>{
            if(width <= 500 ){
              setRevealCheckOut('Mobile')
            }
            if(width >= 500 ){
              setRevealCheckOut('Browser')
            }
        },[width])
    return(
        <>
       { revealCheckOut === 'Browser' && 
        <div className="checkOutBoard">
                <h2>Orders</h2>
            <div className="checkOutBoardContainer">
                <div className="theCarts">
                        { FoodLists.length >= 1 ?
                        ( FoodLists.map((item)=>(
                            <motion.div
                             className="theCartsContainer"
                              key={item.id}
                              initial={{opacity:0,y:50}}
                              animate={{opacity:1,y:0}}>
                                <div className="displayFoods">
                                    <img src={item.image} alt="" />
                                    <h4 className="title">{item.title}</h4>
                                </div>
                                <div className="ManagePieces">
                                    <button className="increase" onClick={() =>
                                            setFoodList(prev =>
                                            prev.map(food =>
                                                food.id === item.id
                                                ? { ...food, quantity: food.quantity + 1 }
                                                : food
                                            )
                                            )}>
                                                +
                                    </button>
                                    <p className="displayThePieces">{item.quantity}</p>
                                    <button className="decrease" onClick={() =>
                                            setFoodList(prev =>
                                            prev.map(food =>
                                                food.id === item.id && food.quantity >= 2
                                                ? { ...food, quantity: food.quantity - 1 }
                                                : food
                                            )
                                            )}>-</button>
                                </div>
                            </motion.div>
                        )))
                        :(   
                        <div className="haventOrderYet">
                            <video autoPlay loop muted playsInline>
                                <source src={images.ThinkingFace} type="video/mp4" />
                            </video>
                        </div>  
                        )}
                </div>

                <div className="theDescription">
                    <div className="theDescriptionList">
                        <h5>Product Fee : </h5>
                        <h5> {total}</h5>
                    </div>
                    <div className="theDescriptionList">
                        <h5>Delivery Fee : </h5>
                        <h5>100$</h5>
                    </div>
                    <div className="theDescriptionList">
                         <h5>Discount  : </h5>
                        <h5> 40$</h5>
                    </div>
                    <div className="theDescriptionList">
                       <h5 className='totalProduct'>total  : </h5>
                        <h5> {total + 60}$</h5>
                    </div>
                </div>
                {<Link to='/checkout'>
                 <button className="processToCheckOut" >Process to check out</button>
                </Link>
                }
            </div>
        </div>}
        { revealCheckOut === 'Mobile' &&
         <>
         {!dropDown ?
         <button className="DropListOfOrders" onClick={()=> setDropDown(true)}>
            <ShoppingCartCheckoutOutlinedIcon className='theCartIcon'/>
         </button>
         :
            <div className="checkOutBoard">
                <h2>Orders</h2>
             <button className="DropListOfOrdersCancel" onClick={()=> setDropDown(false)}>
              <CancelOutlinedIcon className='theCancelIcon'/>
            </button>
            <div className="checkOutBoardContainer">
                <div className="theCarts">
                        { FoodLists.length >= 1 ?
                        ( FoodLists.map((item)=>(
                            <motion.div
                             className="theCartsContainer"
                              key={item.id}
                              initial={{opacity:0,y:50}}
                              animate={{opacity:1,y:0}}>
                                <div className="displayFoods">
                                    <img src={item.image} alt="" />
                                    <h4 className="title">{item.title}</h4>
                                </div>
                                <div className="ManagePieces">
                                    <button className="increase" onClick={() =>
                                            setFoodList(prev =>
                                            prev.map(food =>
                                                food.id === item.id
                                                ? { ...food, quantity: food.quantity + 1 }
                                                : food
                                            )
                                            )}>
                                                +
                                    </button>
                                    <p className="displayThePieces">{item.quantity}</p>
                                    <button className="decrease" onClick={() =>
                                            setFoodList(prev =>
                                            prev.map(food =>
                                                food.id === item.id && food.quantity >= 2
                                                ? { ...food, quantity: food.quantity - 1 }
                                                : food
                                            )
                                            )}>-</button>
                                </div>
                            </motion.div>
                        )))
                        :(   
                        <div className="haventOrderYet">
                            <video autoPlay loop muted playsInline>
                                <source src={images.ThinkingFace} type="video/mp4" />
                            </video>
                        </div>  
                        )}
                </div>

                <div className="theDescription">
                    <div className="theDescriptionList">
                        <h5>Product Fee : </h5>
                        <h5> {total}</h5>
                    </div>
                    <div className="theDescriptionList">
                        <h5>Delivery Fee : </h5>
                        <h5>100$</h5>
                    </div>
                    <div className="theDescriptionList">
                         <h5>Discount  : </h5>
                        <h5> 40$</h5>
                    </div>
                    <div className="theDescriptionList">
                       <h5 className='totalProduct'>total  : </h5>
                        <h5> {total + 60}$</h5>
                    </div>
                </div>
                {<Link to='/checkout'>
                 <button className="processToCheckOut" >Process to check out</button>
                </Link>
                }
            </div>
        </div>}
        </>}
         </>
    )
}
export default CheckOutBoard;