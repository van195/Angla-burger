import './checkOutBoard.scss';
import images from '../containers/container'
import { useFoodContext } from '../../context/foodContext';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTotalBill } from '../containers/functionContainer';
import { AnimatePresence,motion } from 'motion/react';
const CheckOutBoard = ()=>{
        const {FoodLists,setFoodList} = useFoodContext();
        const total = getTotalBill(FoodLists)
    return(
        <div className="checkOutBoard">
            <div className="checkOutBoardContainer">
                <h2>Orders</h2>
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
                            <video autoPlay
                                        loop
                                        muted
                                        playsInline>
                                            <source src={images.ThinkingFace} type="video/mp4" />
                                        </video>
                        </div>  
                        )}
                            {/*<div className="theCartsContainer">
                                <div className="displayFoods">
                                    <img src={images.hamburger} alt="" />
                                    <h4 className="title">hamburger</h4>
                                </div>
                                <div className="ManagePieces">
                                    <button className="increase" onClick={()=> setPiecesCounter((item)=>item + 1)}>+</button>
                                    <p className="displayThePieces">{piecesCounter}</p>
                                    <button className="decrease" onClick={()=> setPiecesCounter((item)=>item <= 0 ?  item : item - 1)}>-</button>
                                </div>
                            </div>*/}
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
                <Link to='/checkout'>
                    <button className="processToCheckOut">Process to check out</button>
                </Link>
            </div>
        </div>
    )
}
export default CheckOutBoard;