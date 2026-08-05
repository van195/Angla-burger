import { useEffect, useState } from 'react';
import './trackingOrder.scss';
import takeAway from '../../assets/Take_Away-amico-removebg-preview.png'
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import RoomServiceRoundedIcon from '@mui/icons-material/RoomServiceRounded';
import { useParams } from 'react-router-dom';
import axios from 'axios'
const TrackingOrder = ()=>{
    const [showStatus,setShowStatus] = useState(null)
    const [error,setError] = useState(null)
    const { id } = useParams();
    useEffect(()=>{
        const fetch = async()=>{
            try {
                const  orderDetail = await axios.get(`http://localhost:8080/api/order/single-order/${id}`);
                setShowStatus(orderDetail.data);
            } catch (error) {
                setError(error)
            }
        } 
        fetch();
    },[id]) 
    const date = new Date(showStatus?.createdAt);   
    const formattedDate = date.toLocaleString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });
    return(
        <div className="trackingOrder">
            <div className="trackingOrderContainer">
                <h2>Tracking Your Order</h2>
                <div className="displayTheOrderContainer">
                    <div className="titles">
                      <h3>Order # 2043</h3>
                      <p>Placed on {formattedDate}</p>
                    </div>
                    <div className="trackingTheProcess">
                       <div className="signals">
                            <div className="signalsContainer">
                                <span className="notOnIt circle">
                                 <DoneOutlinedIcon style={{color:'#fff'}}/>
                                </span>
                                <span className="straightLine">
                                <svg width="198" height="4" viewBox="0 0 198 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.00761416" y1="2.49999" x2="197.008" y2="1.49999" stroke="#56B98E" stroke-width="3"/>
                                </svg>
                                </span>
                            </div>
                            <h3>Placed</h3>
                        </div>
                       <div className="signals">
                            <div className="signalsContainer">
                                <span className="notOnIt circle ">
                                 <DoneOutlinedIcon style={{color:'#fff'}}/>
                                </span>
                                <span className="straightLine">
                                <svg width="198" height="4" viewBox="0 0 198 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.00761416" y1="2.49999" x2="197.008" y2="1.49999" stroke="#56B98E" stroke-width="3"/>
                                </svg>
                                </span>
                            </div>
                            <h3>Accepted</h3>
                        </div>
                       <div className="signals">
                            <div className="signalsContainer">
                               <span className={`notOnIt ${showStatus?.showStatus === "pending" || showStatus?.showStatus === null  ? 'onIt' :'circle'}`}>
                                  {showStatus?.showStatus === 'complete' ? <DoneOutlinedIcon style={{color:'#fff',fontWeight:300}}/>:<Inventory2OutlinedIcon style={{fontWeight:50,color:"#7d7777"}}/>}
                                </span>
                                <span className="straightLine">
                                <svg width="198" height="4" viewBox="0 0 198 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.00761416" className={showStatus?.showStatus === 'complete' ? 'ready' :'notReady'} y1="2.49999" x2="197.008" y2="1.49999" stroke="#56B98E" stroke-width="3"/>
                                </svg>
                                </span>
                            </div>
                            <h3>Preparing</h3>
                        </div>
                       <div className="signals">
                            <div className="signalsContainer">
                                <span className={`notOnIt ${showStatus?.showStatus === 'complete' ? 'onIt':showStatus?.showStatus === 'pending' ? 'notOnIt':'circle'}`}>
                                  {showStatus?.showStatus === 'cancel' ? <DoneOutlinedIcon style={{color:'#fff'}}/>:<LocalShippingOutlinedIcon style={{fontWeight:50,color:"#7d7777"}}/>}
                                </span>
                                <span className="straightLine">
                                <svg width="198" className='theLine' height="4" viewBox="0 0 198 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="0.00761416"  className={showStatus?.showStatus === 'cancel' ? 'ready' :'notReady'}  y1="2.49999" x2="197.008" y2="1.49999" stroke="#56B98E" stroke-width="3"/>
                                </svg>
                                </span>
                            </div>
                            <h3>Out for delivery</h3>
                        </div>
                       <div className="signals">
                            <div className="signalsContainer">
                                <span className={showStatus?.showStatus === 'cancel' ? 'onIt':showStatus?.showStatus === 'complete'|| showStatus?.showStatus === 'pending'? 'notOnIt':'circle'}>
                                {showStatus?.showStatus === 'cancel' ? <DoneOutlinedIcon style={{color:'#fff'}}/>:<RoomServiceRoundedIcon style={{fontWeight:50,color:"#7d7777"}}/>}
                                </span>
                            </div>
                            <h4>Delivered</h4>
                        </div>
                    </div>
                    <div className="displayOrderDetail">
                        <h3>order details</h3>
                        {showStatus?.orderItems.map((items)=>(
                            <div className="items" key={items.id}>
                                <h3>{items.quantity} x {items.product.name}</h3>
                                <p>{items.priceAtPurchase} birr</p>
                            </div>
                        )) }
                    </div>
                </div>
                <div className="riderWomen">
                    <div className="riderWomenContainer">
                        <div className="theTextPart">
                            <h2>Estimated delivery time</h2>
                            <h1> 18 - 25 min</h1>
                        </div>
                        <div className="ridingWomenVideo">
                                <img src={takeAway} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TrackingOrder;