import './home.scss';
import CardBoard from '../../componets/cardBoard/cardBoard';
import CheckOutBoard from '../../componets/checkOutBoard/checkOutBoard';
import DisplayMenu from '../../componets/DispalyMenu/DispalyMeanu';
import KnowMore from '../../componets/KnowMore/knowMore';
import NavBar from '../../componets/NavBar/NavBar';
import { useFoodContext } from '../../context/foodContext';

const Home = () =>  {
    return(
        <div className="home">
            <NavBar
              buttonType='LogIn'
            />
            <div className="theMenu">
                <CardBoard/>
                <DisplayMenu/>
                <KnowMore/>
            </div>
            <div className="theCart">
                <CheckOutBoard/>
            </div>
        </div>
    )
}
export default Home