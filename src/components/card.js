import React from 'react'
import oil from '../pics/oil.jpg'
import weave from '../pics/weave.jpg'
import "./card.css"
import { useState } from 'react'
const Card = (props)=>{
    const prod=props.products
    // console.log(prod)
    const [add, SetAdd]=useState({name:"name", price:0, description:"description"})

    const handleClick=(e)=>{    
        e.preventDefault()
        let data={name:prod.name, price:prod.price, description:prod.description}
        SetAdd(data)
      
    }
    console.log([add])

    return(
        <div>
            <div id="inven">

{prod.map((d)=>(
    <div id="prod">
      <form>
        <h3 value={d.name}>{d.name}</h3>
        <h4 value={d.price}>{d.price}</h4>
        <h4 value={d.description}>{d.ingredients}</h4>
        <img value={d.photo} src={d.photo}/>
        <input />
        <button onClick={handleClick} id="button">Add to cart</button>
    </form>
        </div>
))}
</div>


        </div>
    )
}

export default Card