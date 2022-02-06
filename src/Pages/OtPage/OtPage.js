import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Box from '../../components/Box/Box';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import { paginate } from '../../utils/paginate';

function MolPage({ data }) {
   const [test, setTest] = useState(false);
   const [pageSize] = useState(8);
   const [currentPage, setCurrentPage] = useState(1);
   let count = data.length;

   // GET Data ->
   useEffect(() => {
      setTest(true)
      window.scroll(0, 0);
   }, [])


   // Change Page
   const hendleChangePage = (page) => {
      window.scroll(0, 0);
      setCurrentPage(page)
   }
   // Paginate
   const paginated = paginate(data, currentPage, pageSize)
   return (
      <div className='content'>
         {test ?
            <>
               {
                  data.length !== 0 ? (<>
                     <Container>
                        <Row>
                           {
                              paginated.map((item, index) => {
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
   )
}

export default MolPage
