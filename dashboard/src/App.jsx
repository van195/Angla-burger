import { useState } from 'react';
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

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/users" element={<UserList/>}/>
      <Route path="/users/new" element={<New inputs={userInput} title="Add New User" type='user'/>}/>
      <Route path="/users/:userId" element={<Single type={'user'}/>}/>
      <Route path="/products" element={<List/>}/>
      <Route path="/products/new" element={<New inputs={CarInput} title="Add New Car" type='product'/>}/>
      <Route path="/products/:productId" element={<Single type={'product'}/>}/>
      <Route path="/orders" element={<OrderList/>}/>
      <Route path="/orders/status" element={<OrderStatus/>}/>
    </Routes>
  </BrowserRouter>
   
  )
}

export default App
