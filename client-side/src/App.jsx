import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import Home from "./pages/Home/home"
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage"

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
       path='/checkout'
       element={<CheckOutPage/>}
      />
    </Routes>
  )
}

export default App