import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SearchProvider from './context/searchContext.jsx'
import FoodProvider from './context/foodContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <FoodProvider>
      <SearchProvider>
        <App />
      </SearchProvider>  
     </FoodProvider>
    </BrowserRouter>
  </StrictMode>,
)
