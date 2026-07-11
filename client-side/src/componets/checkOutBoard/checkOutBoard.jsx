import './checkOutBoard.scss';
import images from '../containers/container'
const CheckOutBoard = ()=>{
    return(
        <div className="checkOutBoard">
            <div className="checkOutBoardContainer">
                <h2>Orders</h2>
                <div className="theCarts">
                    <div className="theCartsContainer">
                        <img src={images.hamburger} alt="" />
                        <h4 className="title">hamburger</h4>
                    </div>
                </div>
                <div className="theDescription">
                    <div className="theDescriptionList">
                        <h5>Product Fee : </h5>
                        <h5> 143$</h5>
                    </div>
                    <div className="theDescriptionList">
                        <h5>Delivery Fee : </h5>
                        <h5> 143$</h5>
                    </div>
                    <div className="theDescriptionList">
                         <h5>Discount  : </h5>
                        <h5> 143$</h5>
                    </div>
                    <div className="theDescriptionList">
                       <h5 className='totalProduct'>total  : </h5>
                        <h5> 143$</h5>
                    </div>
                </div>
                    <button className="processToCheckOut">Process to check out</button>
            </div>
        </div>
    )
}
export default CheckOutBoard;