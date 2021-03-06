import React, { useState } from 'react'
import { Button, Card, Alert, Col, Container, Form, Row } from 'react-bootstrap';
import http from '../../Services/getData';
import { FiUserPlus } from "react-icons/fi";
import { Link, useHistory } from 'react-router-dom';
import './Registration.css';
import { FormControl, TextField } from '@mui/material';


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
            window.location.reload(false);
            history.push('/');
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
                           <Col xs="12" className='my-3 mr-sm-2 mb-sm-0 mb-md-4'>
                              <FormControl className='w-100'>
                                 <TextField
                                    size="small"
                                    className="w-100 for-label mb-3"
                                    type="text"
                                    variant="outlined"
                                    label="Телефон"
                                    value={telValue}
                                    onChange={(e) => { setTelValue(e.target.value) }}
                                    placeholder="+998931234567"
                                    required
                                 />
                              </FormControl>
                           </Col>
                           <Col xs="12" className='my-3 mr-sm-2 mb-sm-0'>
                              <FormControl className='w-100'>
                                 <TextField
                                    size="small"
                                    className="w-100 for-label mb-3"
                                    type="password"
                                    variant="outlined"
                                    label="Парол"
                                    value={passValue}
                                    onChange={(e) => { setPassValue(e.target.value) }}
                                    placeholder="qwerty123"
                                    required
                                 />
                              </FormControl>
                           </Col>
                           <Col xs="12" className='my-3 mr-sm-2 mb-sm-0'>
                              <FormControl className='w-100'>
                                 <TextField
                                    size="small"
                                    className="w-100 for-label mb-3"
                                    type="text"
                                    variant="outlined"
                                    label="Атиңиз"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    placeholder="qwerty123"
                                    required
                                 />
                              </FormControl>
                           </Col>
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
