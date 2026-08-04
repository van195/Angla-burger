import { createContext, useContext, useState } from "react";

export const foodContext = createContext();
export const useFoodContext = ()=>useContext(foodContext);

export const FoodProvider = ({children})=>{
    const [activated, setActivated] = useState('Burger')
    return(
       <foodContext.Provider value={{activated, setActivated}}>
           {  children  }
       </foodContext.Provider>
    )
}
export default FoodProvider;