import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import "./Carusel.css"

const Gallery = ({ img1, img2, img3 }) => (
   <>
      {img2 && img2 !==null && img2.length !== 1 && img2 && img2 !==null && img3.length !== 1 ?
         <AliceCarousel>
            <img src={img2} className="slider-img" alt="img" />
            <img src={img1} className="slider-img" alt="img" />
            <img src={img3} className="slider-img" alt="img" />
         </AliceCarousel> :
         <AliceCarousel>
            <img src={img1} className="slider-img" alt="img" />
         </AliceCarousel>
      }
   </>
)

export default Gallery;