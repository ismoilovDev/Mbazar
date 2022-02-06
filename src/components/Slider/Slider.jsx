
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "./Slider.css";
import horse from "../../assets/horse.jpg";
import camel from "../../assets/camel.jpg";
import buzoq from "../../assets/buzoq.jpg";
import cow from "../../assets/cow.jpg";
import sheep from "../../assets/sheep.jpg";

import SwiperCore, {
   Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


export default function App() {



   return (
      <>
         <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 3500,
            "disableOnInteraction": false
         }} pagination={{
            "clickable": true
         }} navigation={true} className="mySwiper">
            <SwiperSlide>
               <img src={buzoq} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={horse} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={cow} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={camel} alt="img" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={sheep} alt="img" />
            </SwiperSlide>
         </Swiper>
      </>
   )
}
