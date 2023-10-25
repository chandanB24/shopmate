import React from 'react'
import { Route, Routes } from "react-router-dom";
import LandingPage from './Components/Admin/LandingPage/LandingPage';
import Navbr from './Components/Admin/Navbar/Navbar';
import Auth from './Components/Admin/Auth/Auth';


export default function AllRoutes() {
  return (
    <>
    <Navbr/>
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/auth" element={<Auth/>}></Route>
    </Routes>
  </>
  )
}
