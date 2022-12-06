import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from "../assets/slides/slide-1.jpg";
import slide2 from "../assets/slides/slide-2.jpg";
import slide3 from "../assets/slides/slide-3.jpg";
import slide4 from "../assets/slides/slide-4.jpg";
import slide5 from "../assets/slides/slide-5.jpg";
import slide6 from "../assets/slides/slide-6.jpg";
import slide7 from "../assets/slides/slide-7.jpg";
import slide8 from "../assets/slides/slide-8.jpg";
import slide9 from "../assets/slides/slide-9.jpg";
import slide10 from "../assets/slides/slide-10.jpg";
import slide11 from "../assets/slides/slide-11.jpg";
import slide12 from "../assets/slides/slide-12.jpg";
import slide13 from "../assets/slides/slide-13.jpg";

const slideImages = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12,
    slide13,
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <img className="image-slide"
              src={slideImage} alt="logo" />
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;