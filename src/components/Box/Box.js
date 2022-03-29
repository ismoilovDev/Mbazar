import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { VscLocation } from "react-icons/vsc";
import './Box.css';

export default function Box({ item }) {

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

   return (
      <Col xs="6" md="4" lg="3" className='my-3'>
         <Link to={`/product/${item.id}`}>
            <Card className='box'>
               <Card.Img variant="top" src={item.img1} />
               <Card.Body>
                  <p className='card-title mb-0'>
                     {item.title.toString().length > 20 ? item.title.slice(0, 20) : item.title}
                  </p> <hr className='my-1' />
                  <p className='d-flex content-money justify-content-between'>
                     <RiMoneyDollarCircleLine />
                     <span className="text-right">{addCommas(item.price)}</span>
                  </p> <hr className='my-1' />
                  <p className='d-flex content-money'>
                     <VscLocation />
                     {item.city_name}
                  </p>
               </Card.Body>
            </Card>
         </Link>
      </Col>
   )
}
