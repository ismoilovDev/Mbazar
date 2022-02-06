import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Box from '../../components/Box/Box';
import Slider from '../../components/Slider/Slider'
import { GiCamel, GiChicken, GiCow, GiGoat, GiHorseHead, GiSheep } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import "./MainPage.css";

function MainPage({ lastes, views }) {


   // GET Data ->
   useEffect(() => {
      window.scroll(0, 0);
   }, [])


   return (
      <div className='content content_no-pad'>
         <Slider></Slider>
         <div className='main_page_menu'>
            <Container className='py-4 mt-4 mb-3'>
               <Carousel show={3.5} slide={1} swiping={true} className="py-2" autoplay={true} >
                  <div className='main_menu_box'>
                     <Link to="/tuya">
                        <div className='main_menu_box_icon'>
                           <GiCamel />
                        </div>
                        <div className='main_menu_box_text'>
                           Түйе
                        </div>
                     </Link>
                  </div>
                  <div className='main_menu_box'>
                     <Link to="/ot">
                        <div className='main_menu_box_icon'>
                           <GiHorseHead />
                        </div>
                        <div className='main_menu_box_text'>
                           Жылӄы
                        </div>
                     </Link>
                  </div>
                  <div className='main_menu_box'>
                     <Link to="/qoy">
                        <div className='main_menu_box_icon'>
                           <GiSheep />
                        </div>
                        <div className='main_menu_box_text'>
                           Ӄой
                        </div>
                     </Link>
                  </div>
                  <div className='main_menu_box'>
                     <Link to="/qaramol">
                        <div className='main_menu_box_icon'>
                           <GiCow />
                        </div>
                        <div className='main_menu_box_text'>
                           Ӄарамал
                        </div>
                     </Link>
                  </div>
                  <div className='main_menu_box'>
                     <Link to="/echki">
                        <div className='main_menu_box_icon'>
                           <GiGoat />
                        </div>
                        <div className='main_menu_box_text'>
                           Ешки
                        </div>
                     </Link>
                  </div>
                  <div className='main_menu_box'>
                     <Link to="/tovuq">
                        <div className='main_menu_box_icon'>
                           <GiChicken />
                        </div>
                        <div className='main_menu_box_text'>
                           Таўиқ
                        </div>
                     </Link>
                  </div>
               </Carousel>
            </Container>
         </div>
         <div>
            <Container>
               <h3>Соӊғы ӄосылғанлар</h3>
               <Row>
                  {
                     lastes.map((item, index) => {
                        return (
                           <Box
                              key={index}
                              item={item}
                              city={index}
                           />
                        )
                     })
                  }
                  <h3 className='my-3 mt-5'>Еӊ көп кѳрилгенлер</h3>
                  {
                     views.map((item, index) => {
                        return (
                           <Box
                              key={index}
                              item={item}
                              city={index}
                           />
                        )
                     })
                  }
               </Row>
            </Container>
         </div>
      </div>
   )
}

export default MainPage;
