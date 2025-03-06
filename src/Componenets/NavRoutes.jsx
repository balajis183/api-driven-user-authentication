import React from "react";
import Navbar from "./Navbar";
// import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import {  HashRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import MyEffect from "./MyEffect";
import Products from "../pages/Products";
import UserDetails from "../pages/UserDetails";
function NavRoutes() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyEffect />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<MyEffect />} />
        <Route path="/products" element={<Products />} />
        <Route path="/userdetails" element={<UserDetails />} />
      </Routes>
    </HashRouter>
  );
}

export default NavRoutes;
