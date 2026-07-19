import './CheckOutPage.scss';
import images from '../../componets/containers/container'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { Link } from 'react-router-dom';
import { useFoodContext } from '../../context/foodContext';
import { getTotalBill } from '../../componets/containers/functionContainer';
const CheckOutPage = ()=>{
        const {FoodLists,setFoodList } = useFoodContext();
        const total = getTotalBill(FoodLists)
    return(
      <div className="checkOutPage">
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
                <input type="text" placeholder='full name ...' />
                <input type="text" placeholder='phone ...' />
                <input type="email" placeholder='email ...' />
                <input type="text" placeholder='address ...' />
                <button className="OrderTheMeal">Order</button>
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
      </div>
    )
}
export default CheckOutPage;