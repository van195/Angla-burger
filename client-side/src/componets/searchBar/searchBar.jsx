import './searchBar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Loading from '../loading/loading'
import emptyIcon from '../../assets/empty.png'
import { useSearchContext } from '../../context/searchContext';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import {motion } from "motion/react"
import { useEffect, useState } from 'react';
import useFetch from '../../util/useFetchHook';
import { autoSearchLists } from '../containers/functionContainer';
import { useFoodContext } from '../../context/foodContext';
const SearchBar =()=>{
    const {searchButtonClicked,setSearchButtonClicked} = useSearchContext();
    const [autoSearch , setAutoSearch] = useState('');
    const {FoodLists,setFoodList} = useFoodContext()
    const [debouncedSearch, setDebouncedSearch] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearch(autoSearch);
        }, 400);

        return () => clearTimeout(timer);
    }, [autoSearch]);
    const { data, loading } = useFetch(
    debouncedSearch
        ? `http://localhost:8080/api/product/single-product?search=${debouncedSearch}`
        : null
    );      
    const addToCart = (item)=>{
        if(!item) return;
        setFoodList(prev => [...prev,
            {
                id:item.id,
                title:item.name,
                image:item.image,
                quantity:1,
                price:item.price,
            }
        ]); 
      }

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
                        <input type="text" placeholder='Search..' onChange={(e) => setAutoSearch(e.target.value)} value={autoSearch} />
                        <button className="searchFood">
                         <SearchOutlinedIcon/>
                        </button>
                    </div>
                    <div className="displayResultSection">
                        {loading ? (
                            <Loading />
                        ) : !autoSearch ? (
                            <div className="preSearchView">
                            <h2>Most People Search</h2>

                            <div className="theListPartOfRecommendation">
                                {autoSearchLists.map((item) => (
                                <button
                                    key={item.title}
                                    className="recommendationItem"
                                    onClick={() => setAutoSearch(item.title)}
                                >
                                    <MovingOutlinedIcon />
                                    {item.title}
                                </button>
                                ))}
                            </div>
                            </div>
                        ) : data?.length ? (
                            data.map((item) => (
                            <div className="searchedResult" key={item.id}>
                                <button className="searchedResultContainer" onClick={()=>addToCart(item)}>
                                    <div className="displayingImage">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="Description">
                                        <h2>{item.name}</h2>
                                        <p>{item.price} birr</p>
                                    </div>
                                </button>
                            </div>
                            ))
                        ) : (
                            <div className="notFoundHandling">
                            <img src={emptyIcon} alt="" />
                            <h2>Not Found</h2>
                            </div>
                        )}
                        </div>
                </motion.div>
            </motion.div>
    )
}
export default SearchBar;