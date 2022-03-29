import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Form, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Backdrop, Button, CircularProgress, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, OutlinedInput, Snackbar, Alert } from '@mui/material';
import { useHistory } from 'react-router-dom';
import http from '../../Services/getData';
import './AddAdver.css';


function AddAdver() {
   const [cities, setCities] = useState([]);
   const [categories, setCategories] = useState([]);
   const [phone, setPhone] = useState('');
   const [price, setPrice] = useState('');
   const [cityId, setCityId] = useState('');
   const [categoryId, setCategoryId] = useState('');
   const [title, setTitle] = useState('');
   const [disc, setDisc] = useState('');
   const [img1, setImg1] = useState(null);
   const [img2, setImg2] = useState(null);
   const [img3, setImg3] = useState(null);
   const [open, setOpen] = React.useState(false);
   const [notific, setNotific] = useState(false);
   const history = useHistory();


   const handleClose = (reason) => {
      if (reason === 'clickaway') {
         return;
      }
      setNotific(false)
      setOpen(false);
   };

   // Alert Messege ---->
   let [classes, setClasses] = useState('messege-alert-box')
   const showAlert = () => {
      if (classes === 'messege-alert-box') {
         setClasses('messege-alert-box active')
      } else {
         setClasses('messege-alert-box')
      }
   }

   // GET Categories
   useEffect(() => {
      const fetchPosts = async () => {
         try {
            const response = await http.get('/category');
            setCategories(response.data.data);
         } catch (err) {
            if (err.response) {
               console.log(err.response.data);
            } else {
               console.log(`Error: ${err.message}`);
            }
         }
      }

      fetchPosts();
   }, [])


   // GET Cities
   useEffect(() => {
      const fetchPosts = async () => {
         try {
            const response = await http.get('/city');
            setCities(response.data.data);
         } catch (err) {
            if (err.response) {
               console.log(err.response.data);
            } else {
               console.log(`Error: ${err.message}`);
            }
         }
      }

      fetchPosts();
   }, [])

   // Reklama qo'shish ----->
   const addAdver = (e) => {
      setOpen(true)
      const userId = window.localStorage.getItem('user_id');
      if (userId) {
         if (
            phone &&
            title &&
            disc &&
            price &&
            cityId &&
            categoryId
         ) {
            e.preventDefault();
            let formdata = new FormData();
            formdata.append('title', title)
            formdata.append('description', disc);
            formdata.append('price', price);
            formdata.append('phone', phone);
            formdata.append('category_id', categoryId);
            formdata.append('city_id', cityId);
            formdata.append('user_id', userId);
            formdata.append('from', 'web');
            if (img1 && img2 && img3) {
               formdata.append('img1', img1);
               formdata.append('img2', img2);
               formdata.append('img3', img3);
            }
            http.post('/animal', formdata)
               .then(res => {
                  setOpen(false)
                  history.push('/');
                  console.log(res.data.payload);
               })
               .catch((err) => {
                  setOpen(false)
                  console.log(err)
               })
            showAlert()
         } else if (!userId) {
            alert("Reklama berishdan oldin ro'yhatdan o'ting")
         } else {
            alert("Formalarni to'liq to'ldiring !!!")
         }
      } else {
         alert("Reklama berishdan oldin ro'yhatdan o'ting")
         history.push('/registration')
      }
   }
   return (
      <>
         <div className="content">
            <div className={classes}>
               <Alert className="messege-alert" color="warning">
                  Подождите! Регистрация клиента...
               </Alert>
            </div>
            <Container>
               <Row>
                  <Form onSubmit={addAdver} autoComplete="off">
                     <Card className='reklama_card'>
                        <Card.Header className='d-flex align-items-center'>
                           <h5 className='h-100 d-flex align-items-center m-0 py-2'> Дағаза бериў </h5>
                        </Card.Header>
                        <Row>
                           <FormHelperText>* - belgi bilan berilganlar kiritilishi shart</FormHelperText>
                           <Col xs="6" className='my-3'>
                              <FormControl className='w-100 for-label' variant='outlined' size="small">
                                 <InputLabel id="bolim">Бѳлимти сайлаң *</InputLabel>
                                 <Select
                                    className="w-100"
                                    size='small'
                                    labelId="bolim"
                                    id="bolimId"
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    input={<OutlinedInput label="Бѳлимти сайлаң *" />}
                                    required
                                    >
                                    {
                                       categories.map(item => {
                                          return (
                                             <MenuItem value={item.id} key={item.name}>{item.name}</MenuItem>
                                          )
                                       })
                                    }
                                 </Select>
                              </FormControl>
                           </Col>
                           <Col xs="6" className='my-3'>
                              <FormControl className='w-100 for-label' variant='outlined' size='small'>
                                 <InputLabel id="city">Аймақти сайлаң *</InputLabel>
                                 <Select
                                    className="w-100"
                                    size='small'
                                    labelId="city"
                                    id="cityId"
                                    value={cityId}
                                    onChange={(e) => setCityId(e.target.value)}
                                    input={<OutlinedInput label="Аймақти сайлаң *" />}
                                    required >
                                    {
                                       cities.map(item => {
                                          return (
                                             <MenuItem value={item.id} key={item.id}>{item.name}</MenuItem>
                                          )
                                       })
                                    }
                                 </Select>
                              </FormControl>
                           </Col>
                           <Col xs="6" className='my-3'>
                              <TextField
                                 size="small"
                                 className="w-100 for-label mb-3"
                                 type="number"
                                 variant="outlined"
                                 label="Телефон"
                                 value={phone}
                                 onChange={(e) => { setPhone(e.target.value) }}
                                 placeholder="998905551245"
                                 required
                              />
                           </Col>
                           <Col xs="6" className='my-3'>
                              <TextField
                                 size="small"
                                 className="w-100 for-label mb-3"
                                 type="text"
                                 variant="outlined"
                                 label="Бахасы"
                                 value={price}
                                 onChange={(e) => { setPrice(e.target.value) }}
                                 placeholder="10 000 000"
                                 required
                              />
                           </Col>
                           <Col xs="12" className='my-2'>
                              <TextField
                                 size="small"
                                 className="w-100 for-label"
                                 type="text"
                                 variant="outlined"
                                 value={title}
                                 label="Кискаша маглыумат жазыӊ"
                                 onChange={(e) => { setTitle(e.target.value) }}
                                 placeholder="Сауын Сийр"
                                 required
                              />
                           </Col>
                           <Col xs="12" md="4" className='my-3 my-sm-3'>
                              <Form.Group className="mb-3">
                                 <Form.Label htmlFor="photo1">Суўрет 1</Form.Label>
                                 <Form.Control type="file" id="photo1" onChange={(e) => { setImg1(e.target.files[0]) }} placeholder="Телефон" />
                              </Form.Group>
                           </Col>
                           <Col xs="12" md="4" className='my-3 my-sm-3'>
                              <Form.Group className="mb-3">
                                 <Form.Label htmlFor="photo2">Суўрет 2</Form.Label>
                                 <Form.Control type="file" id="photo2" onChange={(e) => { setImg2(e.target.files[0]) }} placeholder="Телефон" />
                              </Form.Group>
                           </Col>
                           <Col xs="12" md="4" className='my-3 my-sm-3'>
                              <Form.Group className="mb-3">
                                 <Form.Label htmlFor="photo3">Суўрет 3</Form.Label>
                                 <Form.Control type="file" id="photo3" onChange={(e) => { setImg3(e.target.files[0]) }} placeholder="Телефон" />
                              </Form.Group>
                           </Col>
                           <Col xs="12">
                              <FloatingLabel controlId="floatingTextarea2" label="Толыграк маглыумат">
                                 <Form.Control
                                    as="textarea"
                                    placeholder="Толыграк маглыумат"
                                    style={{ height: '100px' }}
                                    onChange={(e) => { setDisc(e.target.value) }}
                                 />
                              </FloatingLabel>
                           </Col>
                        </Row>
                        <Row className='justify-content-end'>
                           <Col xs="8" sm="6" md="4">
                              <Button type='submit' variant='contained' size='large' className='di-inline mt-3 w-100'>
                                 Дағазаны жəриялаў
                              </Button>
                           </Col>
                        </Row>
                     </Card>
                  </Form>
               </Row>
            </Container>
            <div>
               <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={open}
               >
                  <CircularProgress color="inherit" />
               </Backdrop>
            </div>
         </div>
         <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
         >
            <CircularProgress color="inherit" />
         </Backdrop>
         <Snackbar
            open={notific}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{
               vertical: 'bottom',
               horizontal: 'right'
            }}>
            <Alert onClose={handleClose} variant="filled" autoHideDuration={6000} severity="error">
               Категория не добавлена
            </Alert>
         </Snackbar>
      </>
   )
}

export default AddAdver
