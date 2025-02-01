import React from 'react'
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Navbar from './Components/Navbar.jsx';
import AnimalProduct from './pages/AnimalProduct.jsx';
function App() {
  return (
    <>
    {/* <AnimalProduct/> */}
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
