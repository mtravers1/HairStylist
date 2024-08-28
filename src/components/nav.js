import React from "react";
import { useState } from "react";
import './nav.css'
import { FaCartShopping } from "react-icons/fa6";
import logo from '../pics/logo.jpg'

const Nav = ()=>{
    const [nav, setNav]=useState('')
    const [toggle, setToggle]=useState()

    const tog = ()=>{
        setToggle(!toggle)
    }
    return(
        <div>
                 <header id="header">
        <span>
        <a href='/'><img width={100} src={logo} alt="logo" id="logo"/></a> 
        </span>
        <span>
          <a style={{textDecoration:'none', color:'white'}} href='/'><h2>Hair Stylist Creations</h2></a>
        </span>
        <div id="navhead">
            <div id="nav">
            {/* <li>Products</li> */}
                <a href="/products">Products</a>
                {/* <li>Styles</li> */}
                <a href="/styles">Styles</a>

                {/* <li>Contacts</li> */}
                <a href="/about">About</a>




            </div>
            

        </div>
        <span id='l'>
          <span >
          <button id="login">Login</button>

          </span>
            <button style={{background:"none", color:"pink", border:'none', cursor:'pointer'}}><FaCartShopping size={30} /><a href='./home'></a></button>
            

        </span>
      </header>
    
        <div id="mobilenav">
           <button onClick={tog}>menu</button>
           {toggle && (
            <div id="mob" >
                <ul>
                  <a href="/products">Products</a>
                {/* <li>Styles</li> */}
                <a href="/styles">Styles</a>

                {/* <li>Contacts</li> */}
                <a href="/about">About</a>
                </ul>
            </div>
           )}
            

        </div>
        </div>
    )
}

export default Nav;