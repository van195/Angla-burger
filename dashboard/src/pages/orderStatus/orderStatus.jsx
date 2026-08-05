import { useEffect, useState } from 'react';
import Navbar from '../../componets/navbar/navbar';
import Sidebar from '../../componets/sidebar/sidebar';
import './orderStatus.scss';
import axios from 'axios';

const OrderStatus = ()=>{
    const [completed , setCompleted] = useState('pending');
    const [todayOrders , setTodayOrders] = useState([]);
    const [error , setError] = useState(null);
    const [data , setData] = useState(null);
    useEffect(()=>{
        const fetch = async()=>{
             try {
                const res = await axios.get('http://localhost:8080/api/order/today-orders');
                setTodayOrders(res.data);
        } catch (error) {
            setError(error)
        }
        }
        fetch()
    },[])
    const handleClick = async(orderId)=>{
        try {
            const res = await axios.put(`http://localhost:8080/api/order/change-status/${orderId}`);
            setData(res.data)
            setCompleted('complete')
        } catch (error) {
            setError(error)
        }
    }
    console.log(todayOrders);
    console.log(completed);
    console.log(data);
    console.log(error);
    
    return(
        <div className="orderStatus">
            <Sidebar/>
            <div className="orderStatusContainer">
               <Navbar/>
               <div className="listedCurrentlyOrderedItemsContainer">
                    {todayOrders.map((orders)=>(
                    <div className="listedCurrentlyOrderedItems" key={orders.id}>
                        <div className="pictureSection">
                            <img src={`/${orders.orderItems[0].product.image}`} alt="" />
                        </div>
                        <div className="orderDetailInfoContainers">
                             <div className="orderDetailInfos">
                               <h2>{orders.orderItems[0].product.name}</h2>
                             </div>
                             <div className="orderDetailInfos">
                              <p>quantity</p>
                              <p>{orders.orderItems[0].quantity}</p>
                             </div>
                             <div className="orderDetailInfos">
                              <p>status</p>
                              <p className='status'>{orders.paymentStatus}</p>
                             </div>
                             <div className="changeTheStatus">
                                <button className={`changStatusButton ${orders.showStatus}`} onClick={()=> handleClick(orders.id)} >
                                    {orders.showStatus === 'pending' ? 'Complete' : orders.showStatus === 'complete' ? 'Completed':''}
                                </button>
                             </div>
                        </div>
                    </div>
                    ))
                   }
               </div>
            </div>
        </div>
    )
}
export default OrderStatus;