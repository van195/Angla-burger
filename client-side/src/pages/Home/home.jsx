import CardBoard from '../../componets/cardBoard/cardBoard';
import CheckOutBoard from '../../componets/checkOutBoard/checkOutBoard';
import DisplayMenu from '../../componets/DispalyMenu/DispalyMeanu';
import NavBar from '../../componets/NavBar/NavBar';
import './home.scss';

const Home = () =>  {
    return(
        <div className="home">
            <NavBar
              buttonType='LogIn'
            />
            <div className="theMenu">
                <CardBoard/>
                <DisplayMenu/>
            </div>
            <div className="theCart">
                <CheckOutBoard/>
            </div>
        </div>
    )
}
export default Home