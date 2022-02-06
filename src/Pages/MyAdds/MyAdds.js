import React, { useEffect, useState } from 'react';
import { Button, Col, Container, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import AddBox from '../../components/AddBox/AddBox';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import { paginate } from '../../utils/paginate';
import http from '../../Services/getData';



function MolPage({ userId }) {
   const [test, setTest] = useState(false);
   const [adds, setAdds] = useState([]);
   const [phone, setPhone] = useState('');
   const [name, setName] = useState('');
   const [addCount, setAddCount] = useState(0);
   const [pageSize] = useState(8);
   const [currentPage, setCurrentPage] = useState(1);
   let count = adds.length;

   // GET Data ->
   useEffect(() => {
      setTest(true);
      getAdds();
      window.scroll(0, 0);
   },
      // eslint-disable-next-line
      []);

   // Get Adds
   const getAdds = async () => {
      await http.get(`/myads/${userId}`)
         .then((res) => {
            setAdds(res.data.data.ads);
            console.log(res.data.data.ads);
            setPhone(res.data.data.phone);
            setName(res.data.data.user_name);
            setAddCount(res.data.data.ads_count);
         })
         .catch(err => console.log(err));
   }

   // Change Page
   const hendleChangePage = (page) => {
      window.scroll(0, 0);
      setCurrentPage(page)
   }
   // Paginate
   const paginated = paginate(adds, currentPage, pageSize);

   const popover = (
      <Popover id="popover-basic">
         <Popover.Header as="h6">Информация</Popover.Header>
         <Popover.Body>
            <p className='text-dark'>Атиңиз : <strong>{name}</strong></p>
            <p className='text-dark'>Телефон : <strong>{phone}</strong></p>
            <p className='text-dark'>Дағаза cани : <strong>{addCount}</strong></p>
         </Popover.Body>
      </Popover>
   );
   return (
      <>
         <div className='content'>
            {test ?
               <>
                  <div>
                     <Container>
                        <Row>
                           <Col xs="4">
                              <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                 <Button variant="primary">Информация</Button>
                              </OverlayTrigger>
                           </Col>
                        </Row>
                     </Container>
                  </div>
                  {
                     adds.length !== 0 ? (<>
                        <Container>
                           <Row>
                              {
                                 paginated.map((item, index) => {
                                    return (
                                       <AddBox
                                          key={index}
                                          item={item}
                                          adds={adds}
                                          setAdds={setAdds}
                                          name={name}
                                       />
                                    )
                                 })
                              }
                           </Row>
                        </Container>
                        <Pagination
                           countItems={count}
                           pageSize={pageSize}
                           onPageChange={hendleChangePage}
                        />
                     </>) : (
                        <Container style={{ "height": "70vh" }}>
                           <Row>
                              <h1 className='text-center mt-5'>Дағаза таўилмади</h1>
                           </Row>
                        </Container>
                     )
                  }
               </> :
               <Loader></Loader>
            }
         </div>
      </>
   )
}

export default MolPage
