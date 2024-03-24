import React from "react";
import { useState } from "react";
import './nav.css'
const Nav = ()=>{
    const [nav, setNav]=useState('')
    return(
        <div id="navhead">
            <ul id="nav">
                <li>Home</li>
                <li>About</li>
                <li>Styles</li>
                <li>Prices</li>
                <li>Contacts</li>




            </ul>
            

        </div>
    )
}

export default Nav;