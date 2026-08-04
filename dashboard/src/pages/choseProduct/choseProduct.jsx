import Navbar from "../../componets/navbar/navbar";
import Sidebar from "../../componets/sidebar/sidebar";
import hotel from "../../assets/resort.jpg";
import cars from "../../assets/cars.jpg";
import { Link } from "react-router-dom";
import "./choseProduct.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { foodCategory } from "../../util/container";
import { useFoodContext } from "../../context/foodListContext";
const ChoseProduct = ()=>{
    const {activated, setActivated}=useFoodContext();
    const handleClick = (categoryName)=>{
        setActivated(categoryName)
    }
    console.log(activated);
    
    return(
        <div className="choseProduct">
                <div className="choseProductContainer">
                    <div className="itemschoseProduct">
                        <h1>Products category</h1>
                        <div className="itemsChoseProductContainer" >
                            { foodCategory.map((categoryName)=>(
                            <button className={`rightHotel ${activated === categoryName && 'activatedButton' }`}  onClick={()=> handleClick(categoryName)}>
                                {categoryName}
                            </button>
                            ))}
                        </div>
                       
                        {/**<Link to="/cars"style={{textDecoration:"none",color:"#000"}}>
                        <div className="leftCar">
                            <img src={cars} alt="" />
                             <h1 className="titles">Cars</h1>
                        </div>
                        </Link>*/}
                    </div>
                             
            
                </div>
        </div>
    )
}
export default ChoseProduct;