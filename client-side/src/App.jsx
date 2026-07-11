import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import Home from "./pages/Home/home"

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
       path='/'
       element={<Landing/>}
      />
    </Routes>
  )
}

export default App