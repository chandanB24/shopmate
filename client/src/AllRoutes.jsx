import React from 'react'
import { Route, Routes } from "react-router-dom";
import LandingPage from './Components/Admin/LandingPage/LandingPage';
import Navbr from './Components/Admin/Navbar/Navbar';
import Auth from './Components/Admin/Auth/Auth';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import Create from './Components/Admin/CreateStore/Create';
import Demo from './Components/Admin/Demo';
import Cards from './Components/User/Cards';


export default function AllRoutes() {

  const location = window.location.pathname

  return (
    <>
   {location === '/'? <Navbr/>:null}
    <Routes>
      <Route path="/" element={<LandingPage/>}></Route>
      <Route path="/auth" element={<Auth/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/demo" element={<Demo/>}></Route>
      <Route path="/stores" element={<Cards/>}></Route>
    </Routes>
  </>
  )
}
