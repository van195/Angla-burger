import { useContext, useState } from 'react';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import List from './pages/list/list.jsx';
import New from './pages/new/new.jsx';
import Single from './pages/single/single.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CarInput, userInput,hotelInput } from './fromSource.js';
import ChoseProduct from './pages/choseProduct/choseProduct.jsx';
import UserList from './pages/CarList/userList.jsx';
import OrderList from './pages/hotelLists/orderList.jsx';
import OrderStatus from './pages/orderStatus/orderStatus.jsx';
import SignUp from './pages/SignUp/signUp.jsx';
import { AuthContext } from './context/authContext.jsx';
import { Navigate } from "react-router-dom";
import ProtectRoute from './util/protectRoute.jsx';

function App() {
  const{ token,user, dispatch, loading} = useContext(AuthContext);
  //if(token) return <Home/>;
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={
        <ProtectRoute>
          <Home/>
        </ProtectRoute> }/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/" element={token ? <Navigate to='/home' replace/>:<Login/>}/>
      <Route path="/users" element={
        <ProtectRoute>
          <UserList/>
        </ProtectRoute> }/>
      <Route path="/users/new" element={
        <ProtectRoute>
          <New inputs={userInput} title="Add New User" type='user'/>
        </ProtectRoute> }/>
      <Route path="/users/:userId" element={<Single type={'user'}/>}/>
      <Route path="/products" element={
        <ProtectRoute>
          <List/>
        </ProtectRoute> }/>
      <Route path="/products/new" element={
        <ProtectRoute>
           <New inputs={CarInput} title="Add New Car" type='product'/>
        </ProtectRoute>}/>
      <Route path="/products/:productId" element={<Single type={'product'}/>}/>
      <Route path="/orders" element={
        <ProtectRoute>
          <OrderList/>
        </ProtectRoute> }/>
      <Route path="/orders/status" element={
        <ProtectRoute>
          <OrderStatus/>
        </ProtectRoute> }/>
    </Routes>
  </BrowserRouter>
   
  )
}

export default App
