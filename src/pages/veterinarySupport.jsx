import React from 'react';
import '../Css/VetrinaryPage.css';
import logo from "../assets/Images/Logo.jpg";
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'; // Use NavLink instead of Link
import VideoConsult from '../Components/VideoConsult';

const VeterinaryPage = () => {
  return (
    <div className="vetrinary-container">
      <nav className='flex justify-center '>
        <div className=' flex justify-between nav-container bg-amber-50 p-3'>
          {/* Use NavLink instead of Link */}
          <NavLink 
            to="/veterinary-support/find-doctor" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            <div className=''>
              Find Doctors
            </div>
          </NavLink>
          <NavLink 
            to="/veterinary-support/video-consult" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            <div>
              Video Consult
            </div>
          </NavLink>
          <NavLink 
            to="/veterinary-support/surgeries" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            <div>
              Surgeries
            </div>
          </NavLink>
        </div>
      </nav>
      <div className="vet-hero-s">
        
      </div>

      {/* Nested Routes */}
      <Routes>
        <Route path="find-doctor" element={<div>Find Doctor</div>} />
        <Route path="video-consult" element={<VideoConsult/>} />
        <Route path="surgeries" element={<div>Surgeries</div>} />
      </Routes>
      <Outlet/>
    </div>
  );
};

export default VeterinaryPage;