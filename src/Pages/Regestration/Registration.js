import React, { useState } from 'react'
import { Button, Card, Alert, Col, Container, Form, Row } from 'react-bootstrap';
import http from '../../Services/getData';
import { FiUserPlus } from "react-icons/fi";
import { Link, useHistory } from 'react-router-dom';
import './Registration.css';


function Registation() {
   const [hasError, setHasError] = useState(false);
   const [telValue, setTelValue] = useState('');
   const [passValue, setPassValue] = useState('');
   const [name, setName] = useState('');
   const history = useHistory();

   // Login
   const onFormSubmit = (e) => {
      e.preventDefault();
      const data = {
         name: name,
         phone: telValue,
         password: passValue,
         from: 'web'
      }
      http.post('/register', data)
         .then((res) => {
            console.log(res.data);
            window.localStorage.setItem('token', res.data.data.token);
            window.localStorage.setItem('user_id', res.data.data.user_id);
            history.push('/');
            window.location.reload(false);
         })
         .catch((err) => {
            console.log(err);
            setHasError(true)
         })
   }
   return (
      <div className='content login'>
         <Container>
            <h3>Кириӯ</h3>
            <Row>
               <Col md="6" className='mx-auto'>
                  <div className='my-3 login-icon'>
                     <FiUserPlus />
                  </div>
                  <Card>
                  <Card.Body>
                        {
                           hasError ? (
                              <Alert className="text-center py-2" variant="danger">
                                 Malumotlar xato kiritildi!
                              </Alert>
                           ) : (
                              <></>
                           )
                        }
                        <Form onSubmit={onFormSubmit} method='post' action='http://Test.malbazar.uz/api/register'>
                           <Form.Group className="my-3 me-sm-2 mb-sm-0">
                              <Form.Label
                                 className="me-sm-2 w-100"
                                 for="telephone"
                              >
                                 Телефон
                                 <Form.Control
                                    className='w-100 mt-2'
                                    id="telephone"
                                    name="phone"
                                    placeholder="+998931234567"
                                    type="tel"
                                    onChange={(e) => setTelValue(e.target.value)}
                                 />
                              </Form.Label>
                           </Form.Group>
                           <Form.Group className="my-3 me-sm-2 mb-sm-0">
                              <Form.Label
                                 className="me-sm-2 w-100"
                                 for="parol"
                              >
                                 Парол
                                 <Form.Control
                                    className='w-100 mt-2'
                                    id="parol"
                                    name="parol"
                                    placeholder="qwerty123"
                                    type="password"
                                    onChange={(e) => setPassValue(e.target.value)}
                                 />
                              </Form.Label>
                           </Form.Group>
                           <Form.Group className="my-3 me-sm-2 mb-sm-0">
                              <Form.Label
                                 className="me-sm-2 w-100"
                                 for="name"
                              >
                                 Атиңиз
                                 <Form.Control
                                    className='w-100 mt-2'
                                    id="name"
                                    name="name"
                                    placeholder=""
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                 />
                              </Form.Label>
                           </Form.Group>
                           <Row className='justify-content-center'>
                              <Button type='submit' className='d-inline mt-3 w-50'>
                                 Дизимнен өтиу
                              </Button>
                           </Row>
                        </Form>
                        <p>
                           Сиз дизимнен ѳтген болсаӊиз <Link to="/login">усы силтеме</Link> арӄалы кириўиңиз мумкин
                        </p>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Registation
