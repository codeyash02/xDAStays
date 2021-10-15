import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import one from '../../assets/Image.jpg'
import two from '../../assets/Image1.jpeg'
import three from '../../assets/Image2.jpg'
import '../../styles/components/Carousel.css'
function Carousl() {
    return (
        <div className='carousel'>
            <Carousel>
                <div className='carousel_content'>
                <img src={one} alt="" />
                </div>
                <div className='carousel_content'>
                <img src={two} alt="" />
                </div>
                <div className='carousel_content'>
                    <img src={three} alt="" />
                   
                </div>
            </Carousel>
            
        </div>
    )
}

export default Carousl
