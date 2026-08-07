import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FoodProvider from './context/foodListContext.jsx'
import { AuthContextProvider } from './context/authContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <FoodProvider>
        <App />
      </FoodProvider>
    </AuthContextProvider>
  </StrictMode>,
)
