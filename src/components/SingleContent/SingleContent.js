import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import http from '../../Services/getData';
import Carousel from '../Carusel/Carusel';
import Loader from '../Loader/Loader';
import Rating from '@mui/material/Rating';
import { RiEyeFill } from "react-icons/ri";
import './SingleContent.css'
import Box from '../Box/Box';

function SingleContent({ match }) {
   console.log(match.params.id);
   const [test, setTest] = useState(false);
   const [data, setData] = useState([]);
   const [likes, setLikes] = useState([]);
   const getData = async () => {
      await http.get(`/animal/${match.params.id}`)
         .then((res) => {
            setData(res.data.data.animal[0]);
            setLikes(res.data.data.likes);
            console.log(res.data.data.animal.description);
            console.log(res.data.data.animal.city_name);
            setTest(true)
         })
         .catch(err => console.log(err));

   }
   function addCommas(nStr) {
      nStr += '';
      let x = nStr.split('.');
      let x1 = x[0];
      let x2 = x.length > 1 ? '.' + x[1] : '';
      let rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
         x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      return x1 + x2;
   }
   // GET Data ->
   useEffect(() => {
      getData();
      window.scroll(0, 0)
   }, // eslint-disable-next-line
   [match]);
   return (
      <div className='content'>{
         test ?
            <div className='single-content'>
               <Container>
                  <Row className="justify-content-center">
                     <Col xs="12" md="6" className='single-col'>
                        <Carousel img1={data.img1} img2={data.img2} img3={data.img3} />
                     </Col>
                     <Col xs="12" md="6" className='single-colum'>
                        <div className='content-text'>
                           <h3>{data.title}</h3>
                           <p className='product-sum'>{addCommas(data.price)}</p>
                           <div className='rating-box'>
                              <Rating name="half-rating" defaultValue={0} precision={0.5} />
                              <div className='more__about-comment'>
                                 <RiEyeFill />
                                 <span>{data.view} ko'ruvchilar</span>
                              </div>
                           </div>
                           <div className='product-info'>
                              <p>ТЕЛЕФОН:</p>
                              <span>{data.phone}</span>
                           </div>
                           <div className='product-info'>
                              <p>МƏНЗИЛ:</p>
                              <span>{data.city_name}</span>
                           </div>
                           <p className='content-discription'>
                              <span>Толыг маглыумат:</span> <br/>
                              {data.description ? data.description : "to'liq ma'lumot yo'q"}
                           </p>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div> :
            <Loader></Loader>
      }
      <Container className='mt-5'>
         <Row>
            <h3>Тағи басқалар</h3>
            {
               likes.map((item, index) => {
                  return (
                     <Box
                        key={index}
                        item={item}
                     />
                  )
               })
            }
         </Row>
      </Container>
      </div>
   )
}

export default SingleContent;
