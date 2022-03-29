import React, { useState } from 'react'
import { Alert, Button, Card, Col, Container, Form, Row} from 'react-bootstrap'
import http from '../../Services/getData';
import { Link, useHistory } from 'react-router-dom';
import './Login.css'
import { FormControl, TextField } from '@mui/material';


function Login() {
   const [hasError, setHasError] = useState(false);
   const [telValue, setTelValue] = useState('')
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
            window.location.reload(false);
            history.push('/');
         })
         .catch((err) => {
            console.log(err);
            setHasError(true)
         })
   }
   return (
      <div className='content login py-3 py-md-5'>
         <Container>
            <h3 className='my-2 text-center mb-md-3'>Кириӯ</h3>
            <Row>
               <Col md="6" className='mx-auto'>
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
