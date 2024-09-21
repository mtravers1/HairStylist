import React from "react";
import braids from '../pics/braids.jpg'
import dreads from '../pics/dreads.jpg'
import weave from '../pics/weave.jpg'
import head1 from '../pics/banner.jpg'

const HeadBanner = ()=>{
    let header=[
        head1,
        head1,
        head1,
        head1,
        head1,
    ]

    let lastIndex = cars.length-1;
    let currentIndex =0;

    showImage()
    const showImage=()=>{
        header.src=header[currentIndex]
    }

    setInterval(slide, 1000)
    const slide=()=>{
            let index=getNextImageIndex();
            showImage(index)
    }
    const getNextImageIndex=()=>{
        currentIndex=currentIndex==lastIndex ? 0:currentIndex+1
        return currentIndex;
    }

    document.querySelector('#he')
    return(
        <div>
            <img id='he'/> 
            {showImage()}
        </div>
    )
}