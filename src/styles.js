import React from 'react'
import Footer from './footer'
import Nav from './components/nav'
import { useState } from 'react'
const Styles = ()=>{
    const[hairstyles, setHairstyles]=useState([{
        id:1,
        name:"Braids",
        price:100.00,
        img:""
    },{
        id:2,
        name:"Corn-Rows",
        price:100.00,
        img:""
    },
    {
        id:3,
        name:"Twist",
        price:100.00,
        img:""
    }])

    return(
        <div>
        <Nav/>
            <h1>Styles</h1>
            <div>
            {hairstyles.map((d)=>(
                <div>
                    <h3>{d.name}</h3>
                    <h4>{d.price}</h4>
                    <img src={d.img}/>

                </div>
            ))}
            </div>
        <Footer/>
        </div>
    )
}

export default Styles