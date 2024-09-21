import React from "react";
import banner from "../pics/banner.jpg"
import head1 from '../pics/banner.jpg'
import braids from '../pics/braids.jpg'
import dreads from '../pics/dreads.jpg'
import weave from '../pics/weave.jpg'
import Slider from "./imageSlider";
const Header = ()=>{
    let i=0
    var images = [];	// Images Array
    var time = 2000;	// Time Between Switch
         
    // Image List
    images[0] = braids;
    images[1] = head1;
    images[2] = braids;
    images[3] = dreads;
    
    // Change Image

    function changeImg(){
            console.log(images.length)

        // images.forEach((i)=>{

            if(i<=images.length){

                i++
                console.log(i)
            }else{
                i=0
            }
        // })
       
        // for(let i=0; i<images.length;){
            // setTimeout(()=>{

            // }, 3000)
            // console.log(i)
             // Check If Index Is Under Max
        // if(i < images.length-1 ){
           
            // document.slide.src = images[i];

            // Add 1 to Index
        //     i++; 
           
        // }
        //  
        //   else { 
              // Reset Back To O
            //   i = 0;
        //   }
        // }
       
        // Run function every x seconds

    }
    setTimeout(changeImg, 2000);

    return(
        // <div id="headerbanner" style={{height:"200px", display:"flex"}}>
        //     <img name="slide" height={200} width={200}/>
        //     {/* <img style={{}} widths={300} src={banner}/> */}
        //     {/* <img style={{}} src={banner}/>
        //     <img style={{}} src={banner}/> */}

        // </div>
        <div>
            <Slider/>
        </div>
    )
}

export default Header