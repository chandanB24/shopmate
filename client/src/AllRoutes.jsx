import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import LandingPage from './Components/Admin/LandingPage/LandingPage';
import Navbr from './Components/Admin/Navbar/Navbar';
import Auth from './Components/Admin/Auth/Auth';
import Dashboard from './Components/Admin/Dashboard/Dashboard';


export default function AllRoutes() {

  const location = window.location.pathname

  return (
    <>
   {location === '/'? <Navbr/>:null}
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/auth" element={<Auth/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
  </>
  )
}
