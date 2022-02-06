import React from 'react';
import { Button, Col, Container, InputGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BsArrowRight, BsHeadset, BsEnvelope, BsFacebook, BsInstagram, BsTelegram, BsYoutube } from 'react-icons/bs';
import { AiOutlineHome } from "react-icons/ai";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { FaTiktok } from "react-icons/fa";
import './Footer.css'
import { Accordion } from 'react-bootstrap';

function Footer() {
   const text = 'Social tarmaqlar'
   return (
      <div className='footer'>
         <Container>
            <Row className='desktop-footer mb-4'>
               <Col sm="6" md="4">
                  <h6>БѲЛИМЛЕР</h6>
                  <ul>
                     <li>
                        <Link to="/qaramol">
                           Ӄарамал
                           <BsArrowRight />
                        </Link>
                     </li>
                     <li>
                        <Link to="/tuya">
                           Түйе
                           <BsArrowRight />
                        </Link>
                     </li>
                     <li>
                        <Link to="/ot">
                           Жылӄы
                           <BsArrowRight />
                        </Link>
                     </li>
                     <li>
                        <Link to="/echki">
                           Ешки
                           <BsArrowRight />
                        </Link>
                     </li>
                     <li>
                        <Link to="/qoy">
                           Ӄой
                           <BsArrowRight />
                        </Link>
                     </li>
                     <li>
                        <Link to="/mol-ozuqi">
                           Мал азығы
                           <BsArrowRight />
                        </Link>
                     </li>
                     <li>
                        <Link to="/tovuq">
                           Таўиқ
                           <BsArrowRight />
                        </Link>
                     </li>
                  </ul>
               </Col>
               <Col sm="6" md="4">
                  <h6>БАЙЛАНЫС</h6>
                  <ul>
                     <li className='foo-li my-2'>
                        <AiOutlineHome />
                        <p>Нукус</p>
                     </li>
                     <li className='foo-li my-2'>
                        <BsHeadset />
                        <p>+33 447-00-69</p>
                     </li>
                     <li className='foo-li'>
                        <BsEnvelope />
                        <p>info@malbazar.uz</p>
                     </li>
                  </ul>
               </Col>
               <Col sm="6" md="4">
                  <h6>{text.toUpperCase()}</h6>
                  <InputGroup>
                     <input type='email' className='foo-input' />
                     <Button>
                        <HiOutlineChevronDoubleRight />
                     </Button>
                  </InputGroup>
                  <div className='social'>
                     <h6>Ag`za Boliw</h6>
                     <div className='social-icons'>
                        <Link to="/">
                           <BsFacebook />
                        </Link>
                        <Link to="/">
                           <BsInstagram />
                        </Link>
                        <Link to="/">
                           <BsTelegram />
                        </Link>
                        <Link to="/">
                           <BsYoutube />
                        </Link>
                        <Link to="/">
                           <FaTiktok />
                        </Link>
                     </div>
                  </div>
               </Col>
            </Row>
            <div className='mobile-footer'>
               <Accordion>
                  <Accordion.Item eventKey="0">
                     <Accordion.Header>БѲЛИМЛЕР</Accordion.Header>
                     <Accordion.Body>
                        <ul>
                           <li>
                              <Link to="/qaramol">
                                 Ӄарамал
                                 <BsArrowRight />
                              </Link>
                           </li>
                           <li>
                              <Link to="/tuya">
                                 Түйе
                                 <BsArrowRight />
                              </Link>
                           </li>
                           <li>
                              <Link to="/ot">
                                 Жылӄы
                                 <BsArrowRight />
                              </Link>
                           </li>
                           <li>
                              <Link to="/echki">
                                 Ешки
                                 <BsArrowRight />
                              </Link>
                           </li>
                           <li>
                              <Link to="/qoy">
                                 Ӄой
                                 <BsArrowRight />
                              </Link>
                           </li>
                           <li>
                              <Link to="/mol-ozuqi">
                                 Мал азығы
                                 <BsArrowRight />
                              </Link>
                           </li>
                           <li>
                              <Link to="/tovuq">
                                 Таўиқ
                                 <BsArrowRight />
                              </Link>
                           </li>
                        </ul>
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                     <Accordion.Header>БАЙЛАНЫС</Accordion.Header>
                     <Accordion.Body>
                        <ul>
                           <li className='foo-li'>
                              <AiOutlineHome />
                              <p>Нукус</p>
                           </li>
                           <li className='foo-li'>
                              <BsHeadset />
                              <p>+33 447-00-69</p>
                           </li>
                           <li className='foo-li'>
                              <BsEnvelope />
                              <p>info@malbazar.uz</p>
                           </li>
                        </ul>
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                     <Accordion.Header>{text.toUpperCase()}</Accordion.Header>
                     <Accordion.Body>
                        <InputGroup>
                           <input type='email' className='foo-input' />
                           <Button>
                              <HiOutlineChevronDoubleRight />
                           </Button>
                        </InputGroup>
                        <div className='social'>
                           <h6>Ag`za Boliw</h6>
                           <div className='social-icons'>
                              <Link to="/">
                                 <BsFacebook />
                              </Link>
                              <Link to="/">
                                 <BsInstagram />
                              </Link>
                              <Link to="/">
                                 <BsTelegram />
                              </Link>
                              <Link to="/">
                                 <BsYoutube />
                              </Link>
                              <Link to="/">
                                 <FaTiktok />
                              </Link>
                           </div>
                        </div>
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
            </div>
            <hr />
            <Row>
               <p className='text-center'>Copyright © 2022 ELT Team</p>
            </Row>
         </Container>
      </div>
   )
}

export default Footer;