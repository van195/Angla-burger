import { createContext, useContext, useState, useMemo, useEffect } from "react";

// BONUS FIX: Use PascalCase for context (React convention)
export const searchContext = createContext();

// BONUS FIX: Add a guard to prevent errors if used outside the Provider
export const useSearchContext = () => {
  const context = useContext(searchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a useSearchContext");
  }
  return context;
};
const SearchProvider = ({ children }) => {
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  // The fix: Memoize the value. It only changes when FoodLists changes.
  const value = useMemo(() => ({ searchButtonClicked, setSearchButtonClicked }), [searchButtonClicked]);

  return (
    <searchContext.Provider value={value}>
      {children}
    </searchContext.Provider>
  );
};

export default SearchProvider ;