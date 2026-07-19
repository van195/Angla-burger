import { createContext, useContext, useState, useMemo } from "react";

// BONUS FIX: Use PascalCase for context (React convention)
export const FoodContext = createContext();

// BONUS FIX: Add a guard to prevent errors if used outside the Provider
export const useFoodContext = () => {
  const context = useContext(FoodContext);
  if (!context) {
    throw new Error("useFoodContext must be used within a FoodProvider");
  }
  return context;
};
const FoodProvider = ({ children }) => {
  const [FoodLists, setFoodList] = useState([]);
  const [total , setTotal] = useState(0)

  // The fix: Memoize the value. It only changes when FoodLists changes.
  const value = useMemo(() => ({ FoodLists, setFoodList,total , setTotal }), [FoodLists]);

  return (
    <FoodContext.Provider value={value}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;