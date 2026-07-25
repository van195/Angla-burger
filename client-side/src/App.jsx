import { Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing/Landing"
import Home from "./pages/Home/home"
import CheckOutPage from "./pages/CheckOutPage/CheckOutPage"
import Register from "./pages/signUp/signUp";
import LogIn from "./pages/signIn/signIn"
import { useUser } from "@clerk/react";
import AuthSync from "./util/AuthSynch";
const App = () => {
  //if(email) return <Home/>;
      const {user,isLoaded} = useUser();
      const email = user?.emailAddresses[0].emailAddress;
  return (
    <>
    <AuthSync/>
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
        path='/new-register/*'
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
    </>
  )
}

export default App