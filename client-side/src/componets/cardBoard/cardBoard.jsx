import './cardBoard.scss';
import images from '../containers/container'
const CardBoard = () =>  {
    return(
        <div className="CardBoard">
            <div className="CardBoardContainer">
              <img src={images.burgerWithWomenBlackAndWhite} className='joyfulWomen' alt="" />
              <img src={images.Frame} className='theFrame' alt="" />
              <h1>Hungry ? <br /> We've got you <br /> covered</h1>
            </div>
        </div>
    )
}
export default CardBoard