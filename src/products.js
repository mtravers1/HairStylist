import React from 'react'
import Nav from './components/nav'
import { useState, useEffect } from 'react'
import Footer from './footer'
import productdata from './data/productdata.json'
import oil from './pics/oil.jpg'
import weave from './pics/weave.jpg'
import './product.css';

const Products = ()=>{

    const [products, setProducts]=useState([{
    name: "Large oil",
    price: 39.00,
    ingredients: "",
    photo:oil
    
},{
  
    name: "Weave",
    price: 200,
    ingredients: "",
    photo:weave
    
},
{
    name: "Wig",
    price: 150.00,
    ingredients: "",
    photo:""
    
},
{
    name: "Large oil",
    price: 39.00,
    ingredients: "",
    photo:oil
    
},{
  
    name: "Weave",
    price: 200,
    ingredients: "",
    photo:weave
    
},
{
    name: "Wig",
    price: 150.00,
    ingredients: "",
    photo:""
    
}
])
    return(
        <div id="prod">
                  {/* <header id="header">
        <span>
          <img src='' alt="logo"/>
        </span>
        <span>
          <h2>Hair Stylist Creations</h2>
        </span>
        <span>
            <button>Login</button>
        </span>
      </header> */}
            <Nav/>
            <h1>Products</h1>
            <div id="inven">

            {products.map((d)=>(
                <div>
                    <h3>{d.name}</h3>
                    <h4>{d.price}</h4>
                    <h4>{d.ingredients}</h4>
                    <img src={d.img}/>

                    </div>
            ))}
            </div>
            <h1>Deals</h1>
            <div id="inven">
            {products.map((d)=>(
                <div>
                    <h3>{d.name}</h3>
                    <h4>{d.price}</h4>
                    <h4>{d.ingredients}</h4>
                    <img src={d.img}/>

                    </div>
            ))}
            </div>
        
            
            <Footer/>
        </div>
    )
}
export default Products