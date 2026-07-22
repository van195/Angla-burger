import './searchBar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useSearchContext } from '../../context/searchContext';
import { AnimatePresence,motion } from "motion/react"
const SearchBar =()=>{
    const {searchButtonClicked,setSearchButtonClicked} = useSearchContext();
    return(
     
            <motion.div className="searchBar">
                <motion.div className="searchBarContainer"
                 initial={{opacity:0,y:-50}}
                 animate={{opacity:1,scale:1,y:0,delay:1}}
                 exit={{opacity:0,y:-50}}>
                    <button className="cancelBar" onClick={()=>setSearchButtonClicked(false)}>
                    <CloseOutlinedIcon className='cancelButton'/>
                    </button>
                    <div className="searchInputSection">
                        <input type="text" placeholder='Search..' />
                        <button className="searchFood">
                        <SearchOutlinedIcon/>
                        </button>
                    </div>
                    <div className="displayResultSection">

                    </div>
                </motion.div>
            </motion.div>
    )
}
export default SearchBar;