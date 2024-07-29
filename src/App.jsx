import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from "./components/Footer/Footer";
import LoginSignUp from "./components/LoginSignUp/LoginSignUp";

function App() {
  const [showLogIn, setShowLogIn] = useState(false);
  return (
    <>
      <div className='app'>
        {showLogIn ? <LoginSignUp setShowLogIn={setShowLogIn} /> : <></>}
        <Navbar setShowLogIn={setShowLogIn} />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route path='/cart' Component={Cart} />
          <Route path='/orders' Component={PlaceOrder} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
