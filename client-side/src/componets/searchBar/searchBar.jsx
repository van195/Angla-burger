import './searchBar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useSearchContext } from '../../context/searchContext';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import {motion } from "motion/react"
import { useState } from 'react';
import { autoSearchLists } from '../containers/functionContainer';
const SearchBar =()=>{
    const {searchButtonClicked,setSearchButtonClicked} = useSearchContext();
    const [autoSearch , setAutoSearch] = useState('');
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
                        <input type="text" placeholder='Search..' value={autoSearch} />
                        <button className="searchFood">
                         <SearchOutlinedIcon/>
                        </button>
                    </div>
                    <div className="displayResultSection">
                        <div className="preSearchView">
                            <h2>Most People Search</h2>
                            <div className="theListPartOfRecommendation">
                                {
                                  autoSearchLists.map((item)=>(
                                   <button className="recommendationItem" onClick={()=> setAutoSearch(item.title)}><MovingOutlinedIcon/> {item.title}</button>
                                  ))  
                                }
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
    )
}
export default SearchBar;