import './CheckOutPage.scss';
import images from '../../componets/containers/container'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';
import Loading from '../../componets/loading/loading'
import { useFoodContext } from '../../context/foodContext';
import { getTotalBill } from '../../componets/containers/functionContainer';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '@clerk/react';
const CheckOutPage = ()=>{
        const { getToken } = useAuth();
        const {FoodLists,setFoodList } = useFoodContext();
        const total = getTotalBill(FoodLists);
        const [theId,setTheId] = useState(null);
        const [error,setError] = useState(null);
        const [loading,setLoading] = useState(null);
        const [formData, setFormData] = useState({
          name:'',
          phone:'',
          city:'',
          street:'',
        })
        console.log(formData);
        
        const handleClick=async ()=>{
          setLoading(true);
          try {
            const token = await getToken();
            const addressRes = await axios.post('http://localhost:8080/api/address/create-address',
              formData,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
            const addressId = addressRes.data;
            if(!addressId) return;
            const OrderRes = await  axios.post('http://localhost:8080/api/order/create-order',
              { 
                FoodList:FoodLists,
                addressId:addressId,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              console.log(OrderRes);
              setTheId(OrderRes)
          } catch (error) {
             setError(error);
          }finally{
            setLoading(false)
          }
      
        }
        console.log(error);
        console.log(theId);
        
    return(
      <div className="checkOutPage">
        { loading ? <Loading/> : <>
          <div className="theHeader">
              <img src={images.Spiral} className='Spiral' alt="" />
              <Link to='/home'>
              <ArrowForwardIosOutlinedIcon className='goBack'/>
              </Link>
              <div className="theHeaderContainer">
                  <div className="cart">
                    <img src={images.bag} className='containerLogo' alt="" />
                    <img src={images.Line1} className='lines1'  alt="" />
                    <div className="theName">
                      <p>cart</p>
                    </div>
                  </div>
                  <div className="cart">
                    <img src={images.group} className='containerLogo' alt="" />
                    <img src={images.Line1} className='lines' alt="" />
                    <div className="theName">
                      <p>shopping</p>
                    </div>
                  </div>
                  <div className="cart">
                    <img src={images.cards} className='containerLogo' alt="" />
                    <div className="theName">
                      <p>Payment</p>
                    </div>
                  </div>
              </div>
          </div>
          <div className="theMiddle">
              <div className="personalInfo">
                <h2>Payment Method</h2>
                <div className="paymentMethodCheck">
                  <input type="radio" />
                  <label> Pay with <img src={images.rawTellBirrLogo} alt="" /></label>
                </div>
                <div className="personalInfoContainer">
                  <input type="text" placeholder='full name ...'value={formData.name}  onChange={(e)=>setFormData({...formData,name:e.target.value})}/>
                  <input type="phone" placeholder='phone ...' value={formData.phone} onChange={(e)=>setFormData({...formData,phone:e.target.value})}/>
                  <input type="text" placeholder='city ...' value={formData.city} onChange={(e)=>setFormData({...formData,city:e.target.value})}/>
                  <input type="text" placeholder='street ...' value={formData.street} onChange={(e)=>setFormData({...formData,street:e.target.value})}/>
                  <button className="OrderTheMeal" onClick={ handleClick }>Order</button>
                </div>
              </div>
              <div className="recheckTheOrder">
                  <div className="recheckTheOrderContainer">
                    <div className="showTheMenu">
                      { FoodLists.map((item)=>(
                        <div className="orders" key={item.id}>
                          <img src={item.image} alt="" />
                          <h4>{item.title}</h4>
                      </div>
                      ))
                      }
                      {/*<div className="orders">
                          <img src={images.chicken} alt="" />
                          <h4>shawarma</h4>
                      </div>*/}
                    </div>
                    <div className="showTheBill">
                        <div className="listOfPrice">
                          <h1>Product : </h1>
                          <h1> {total} birr </h1>
                        </div>
                        <div className="listOfPrice">
                          <h1>Discount : </h1>
                          <h1> 0 birr </h1>
                        </div>
                        <div className="listOfPrice">
                          <h1>Delivery : </h1>
                          <h1> free </h1>
                        </div>
                        <div className="listOfPrice">
                          <h1 className='totalPrice'>total : </h1>
                          <h1 className='totalPrice'> {total} birr </h1>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
       </> }
      </div>
    )
}
export default CheckOutPage