import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FoodProvider from './context/foodListContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FoodProvider>
      <App />
    </FoodProvider>
  </StrictMode>,
)
