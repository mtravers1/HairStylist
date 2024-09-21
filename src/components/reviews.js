import React from "react";
import { useState } from "react";
import data from '../data/reviews.json'
import pic from '../pics/user.png'
import "./reviews.css"
const Reviews=()=>{
    const [dada, SetReviews]=([{
        name:"dameatis",
        img:pic,
        rating: 4,
        description:"Fast, Inexpesive, Impressed"
    },{
        name:"dameatis",
        img:pic,
        rating: 4,
        description:"Fast, Inexpesive, Impressed"
    },{
        name:"dameatis",
        img:pic,
        rating: 4,
        description:"Fast, Inexpesive, Impressed"
    },{
        name:"dameatis",
        img:pic,
        rating: 4,
        description:"Fast, Inexpesive, Impressed"
    },])
    return(
        <div>
            <h3 id='title'>Reviews</h3>
            <div id='r'>
                {
                    data.map((d)=>(
                        <div >
                            <div id="review">
                                    <span id="img">
                            {/* <img src={d.img}/> */}
                            <img src={pic}/>
                            <p id='de'>{d.name}</p>

                            </span>
                            
                            <span id="info">
                            <p id='de'>{d.description}</p>

                            </span>
                            <span id='info'>
                            <p id="de">{d.rating}/5</p>

                            </span>

                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Reviews;