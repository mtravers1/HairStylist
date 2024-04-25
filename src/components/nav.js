import React from "react";
import { useState } from "react";
import './nav.css'
import { FaCartShopping } from "react-icons/fa6";

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
          <img src='' alt="logo"/>
        </span>
        <span>
          <h2>Hair Stylist Creations</h2>
        </span>
        <span>
            <button>Login</button>
            <button style={{background:"none", color:"pink"}}><FaCartShopping size={30} /></button>
            

        </span>
      </header>
        <div id="navhead">
            <ul id="nav">
            {/* <li>Products</li> */}
                <a href="/products">Products</a>
                {/* <li>Styles</li> */}
                <a href="/styles">Styles</a>

                {/* <li>Contacts</li> */}
                <a href="/about">About</a>




            </ul>
            

        </div>
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