import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import Home from "./pages/Home/home"
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage"
import Register from "./pages/signUp/signUp";
import LogIn from "./pages/signIn/signIn"
const App = () => {
  return (
    <Routes>
      <Route
       path='/'
       element={<Landing/>}
      />
      <Route
       path='/home'
       element={<Home/>}
      />
      <Route
       path='/new-register'
       element={<Register/>}
      />
      <Route
       path='/login'
       element={<LogIn/>}
      />
      <Route
       path='/checkout'
       element={<CheckOutPage/>}
      />
    </Routes>
  )
}

export default App