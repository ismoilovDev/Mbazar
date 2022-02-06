import React, { useState } from 'react'
import { Alert, Button, Card, Col, Container, Form, Row} from 'react-bootstrap'
import http from '../../Services/getData';
import { FiUserCheck } from "react-icons/fi";
import { Link, useHistory } from 'react-router-dom';
import './Login.css'


function Login() {
   const [hasError, setHasError] = useState(false);
   const [telValue, setTelValue] = useState(0)
   const [passValue, setPassValue] = useState('')
   const history = useHistory();

   // Login
   const onFormSubmit = (e) => {
      e.preventDefault();
      const data = {
         phone: telValue,
         password: passValue
      }
      http.post(`/login`, data)
         .then((res) => {
            console.log(res.data.data.token);
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
                     <FiUserCheck />
                  </div>
                  <Card>
                     <Card.Body>
                        {
                           hasError ? (
                              <Alert className="text-center py-2" variant="danger">
                                 Login yoki parol xato!
                              </Alert>
                           ) : (
                              <></>
                           )
                        }
                        <Form onSubmit={onFormSubmit}>
                           <Form.Group className="my-3 me-sm-2 mb-sm-0">
                              <Form.Label
                                 className="me-sm-2 w-100"
                                 htmlFor="telephone"
                              >
                                 Телефон
                                 <Form.Control
                                    className='w-100 mt-2 mt-sm-3'
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
                                    className='w-100 mt-2 mt-sm-3'
                                    id="parol"
                                    name="parol"
                                    placeholder="*fewf*//"
                                    type="password"
                                    onChange={(e) => setPassValue(e.target.value)}
                                 />
                              </Form.Label>
                           </Form.Group>
                           <Row className='justify-content-center'>
                              <Button type='submit' className='d-inline mt-3 w-25'>
                                 Кириў
                              </Button>
                           </Row>
                        </Form>
                        <p>
                           Сиз дизимнен ѳтпеген болсаӊиз <Link to="/registration">усы силтеме</Link> арӄалы дизимнен ѳтиуиӊиз мумкин
                        </p>
                     </Card.Body>
                  </Card>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default Login
