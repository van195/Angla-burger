import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import SearchProvider from './context/searchContext.jsx'
import FoodProvider from './context/foodContext.jsx'
import {ClerkProvider} from '@clerk/react'
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <FoodProvider>
      <SearchProvider>
        <ClerkProvider publishableKey={clerkKey}>
         <App />
        </ClerkProvider>
      </SearchProvider>  
     </FoodProvider>
    </BrowserRouter>
  </StrictMode>,
)
