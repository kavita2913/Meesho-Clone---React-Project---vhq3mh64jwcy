import React from 'react'
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';
import Home from './Home/Home.js'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Product from './Product/Product';
import Cart from './cart/Cart';
import Login from './Login/Login';
import Singnup from './SignUp/Singup';
import Payment from './Payment/Payment';

const App = () => {


  return (
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/Singnup' element={<Singnup />} />
          <Route path='/Payment' element={<Payment />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}


export default App;
