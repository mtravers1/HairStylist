import React from "react";
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Products from "./products";
import Styles from "./styles";
import Home from "./home";
const App = ()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/products" element={<Products/>}/>
        <Route path="/styles" element={<Styles/>}/> */}
        <Route path="/products" element={<Products/>}/>
        <Route path="/styles" element={<Styles/>}/>



      </Routes>

    </div>
  )
}

export default App