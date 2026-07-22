import './home.scss';
import CardBoard from '../../componets/cardBoard/cardBoard';
import CheckOutBoard from '../../componets/checkOutBoard/checkOutBoard';
import DisplayMenu from '../../componets/DispalyMenu/DispalyMeanu';
import KnowMore from '../../componets/KnowMore/knowMore';
import NavBar from '../../componets/NavBar/NavBar';
import { useFoodContext } from '../../context/foodContext';
import { useSearchContext } from '../../context/searchContext';
import SearchBar from '../../componets/searchBar/searchBar';
import { AnimatePresence,motion } from "motion/react"
const Home = () =>  {
    const {searchButtonClicked,setSearchButtonClicked} = useSearchContext();
    return(
        <div className="home">
            <NavBar
              buttonType='LogIn'
            />
              <AnimatePresence>
                
                    <motion.div
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    >
                       { searchButtonClicked ? <SearchBar/>: '' } 
                    </motion.div>
            
              </AnimatePresence>
               
            
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