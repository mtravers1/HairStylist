import React from "react";
import dada from '../data/data.js'
import braids from '../pics/braids.jpg'
import dreads from '../pics/dreads.jpg'
import weave from '../pics/weave.jpg'
import { useState } from "react";
import './styles.css'
const Styles = ()=>{
    const [tog, setTog]=useState('')
    return(
        <div>
               <div id="styles">
      <button id="b" onClick={()=>setTog(!tog)}>View Styles</button>
      {tog &&(
        <div id='s'>
            {dada.map((val)=>(
      <div id='containers'>
        <div>
        <h4>{val.name}</h4>
        <p>{val.price}</p>
        <img id='pic' src={val.img}/>
        </div>
        <button id='b'>Add</button>

        </div>
    ))

    }

          </div>
      )}
  

     </div>

        </div>
    )
}
export default Styles