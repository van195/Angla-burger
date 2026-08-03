import { useState } from 'react';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import List from './pages/list/list.jsx';
import New from './pages/new/new.jsx';
import Single from './pages/single/single.jsx';
import HotelList from './pages/hotelLists/hotelList.jsx';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CarInput, userInput,hotelInput } from './fromSource.js';
import ChoseProduct from './pages/choseProduct/choseProduct.jsx';
import UserList from './pages/CarList/userList.jsx';

function App() {

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/users" element={<UserList/>}/>
      <Route path="/users/new" element={<New inputs={userInput} title="Add New User"/>}/>
      <Route path="/users/:userId" element={<Single/>}/>
      <Route path="/products" element={<List/>}/>
      <Route path="/cars/new" element={<New inputs={CarInput} title="Add New Car"/>}/>
      <Route path="/cars/:carId" element={<Single/>}/>
      <Route path="/hotels" element={<HotelList/>}/>
      <Route path="/hotels/new" element={<New inputs={hotelInput} title="Add New Hotel"/>}/>
      <Route path="/hotels/:hotelId" element={<Single/>}/>
    </Routes>
  </BrowserRouter>
   
  )
}

export default App
