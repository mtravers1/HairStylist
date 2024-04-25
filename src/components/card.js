import React from 'react'
import oil from '../pics/oil.jpg'
import weave from '../pics/weave.jpg'
import "./card.css"
const Card = (props)=>{
    const prod=props.products
    console.log(prod)
    return(
        <div>
            <div id="inven">

{prod.map((d)=>(
    <div id="prod">
        <h3>{d.name}</h3>
        <h4>{d.price}</h4>
        <h4>{d.ingredients}</h4>
        <img src={d.photo}/>
        <button id="button">Add to cart</button>

        </div>
))}
</div>


        </div>
    )
}

export default Card