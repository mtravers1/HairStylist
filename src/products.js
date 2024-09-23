import React from 'react'
import Nav from './components/nav'
import { useState, useEffect } from 'react'
import Footer from './footer'
import productdata from './data/productdata.json'
import oil from './pics/oil.jpg'
import weave from './pics/weave.jpg'
import './product.css';
import Card from './components/card'

const Products = ()=>{

    const [cart, SetCart]=useState({name:"", price:0, description:""})
    const [filter, SetFilter]=useState(false)
    const handleDelete=(e)=>{
        e.preventDefault()


    }

    const [products, setProducts]=useState([{
    name: "Large oil",
    price: 39.00,
    ingredients: "",
    photo:oil,
    description:"", 
    category:'oil'
    
},
{
    name: "Large oil",
    price: 39.00,
    ingredients: "",
    photo:oil,
    description:"",
    category:'oil'

    
},{
  
    name: "Weave",
    price: 200,
    ingredients: "",
    photo:weave,
    description:"",
    category:'hair'

    
},
{
    name: "Wig",
    price: 150.00,
    ingredients: "",
    photo:weave,
    description:"",
    category:'hair'

    
},
{
    name: "Wig",
    price: 150.00,
    ingredients: "",
    photo:weave,
    description:"",
    category:'hair'

    
},
{
    name: "Wig",
    price: 150.00,
    ingredients: "",
    photo:weave,
    description:"",
    category:'hair'

    
},
{
    name: "Wig",
    price: 150.00,
    ingredients: "",
    photo:weave,
    description:"",
    category:'hair'

    
}
])

let hair= products.filter((a)=>{
    return a.category='hair'
})
console.log('this is a oil',hair)
const toggle = ()=>{
    SetFilter(!filter)
    console.log(filter)
}
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
            <div style={{margin:'0', color:'white', background:'black', height:'100px', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <h1 >Products</h1>
            <button onClick={toggle}>filter</button>
            {filter &&(
                <div id='filter'>
                    <ul>
                        <li>
                            price
                        </li>
                        <li>
                            category
                        </li>
                        <li>
                            newest
                        </li>
                        <li>
                            popular
                        </li>
                    </ul>
                </div>
            )}
            </div>
            <Card products={products}/>
            {/* <div id="inven">

            {products.map((d)=>(
                <div>
                    <h3>{d.name}</h3>
                    <h4>{d.price}</h4>
                    <h4>{d.ingredients}</h4>
                    <img src={d.img}/>

                    </div>
            ))}
            </div> */}
            <h1>Deals</h1>

            
            {/* <div id="inven">
            {products.map((d)=>(
                <div>
                    <h3>{d.name}</h3>
                    <h4>{d.price}</h4>
                    <h4>{d.ingredients}</h4>
                    <img src={d.photo}/>

                    </div>
            ))}
            </div> */}
                    <Card products={products}/>

            
            <Footer/>
        </div>
    )
}
export default Products