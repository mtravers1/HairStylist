import React from "react";
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Products from "./products";
import Styles from "./styles";
import Home from "./home";
import About from "./about";
import Login from "./login"
const App = ()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/products" element={<Products/>}/>
        <Route path="/styles" element={<Styles/>}/> */}
        <Route path="/products" element={<Products/>}/>
        <Route path="/styles" element={<Styles/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>





      </Routes>

    </div>
  )
}

export default App