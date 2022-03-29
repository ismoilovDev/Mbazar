import React, { useEffect, useRef, useState } from 'react';
import AppBar from '@mui/material/AppBar/AppBar';
import Box from '@mui/material/Box/Box';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import IconButton from '@mui/material/IconButton/IconButton';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Menu from '@mui/material/Menu/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircle from '@mui/icons-material/AccountCircle';
import logo from '../../assets/malbazar-log.png';
import './Header.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { BsArrowRight, BsPatchQuestion, BsPlusCircle } from 'react-icons/bs';
import { IoMenuOutline } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { RiUserAddFill, RiUserShared2Fill } from "react-icons/ri";
import { FcAdvertising } from "react-icons/fc";
import { GiCamel, GiChicken, GiCow, GiGoat, GiGrain, GiHorseHead, GiSheep } from "react-icons/gi";
import { Link, useHistory } from 'react-router-dom';
import http from '../../Services/getData';
import { AiOutlineStop } from 'react-icons/ai';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)(({ theme }) => ({
   '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      color: "white",
   },
}));


export default function PrimarySearchAppBar({ setResult, userId }) {
   const [anchorEl, setAnchorEl] = useState(null);
   const [show, setShow] = useState(false);
   const [show2, setShow2] = useState(false);
   const [open, setOpen] = useState(false);
   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
   const [term, setTrem] = useState("");
   // const [termResult, setTremResult] = useState([]);
   const history = useHistory();
   const wrapperRef = useRef(null)

   const isMenuOpen = Boolean(anchorEl);
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

   function removeUserId() {
      window.localStorage.removeItem("user_id")
      window.localStorage.removeItem("token")
      window.location.reload(false);
      history.push("/")
   }
   const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
   };

   const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
   };

   const handleShow = () => {
      setShow(!show)
   }

   const handleShow2 = () => {
      setShow2(!show2)
   }

   const handleSearchOpen = () => {
      setOpen(!open)
   }

    // Display
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [])

   const handleClickOutside = (e) => {
      const { current: wrap } = wrapperRef;
      if( wrap && !wrap.contains(e.target)) {
         setShow2(false)
      }
   }
   const getSearchResult = (e) => {
      e.preventDefault()
      http.get(`/search?query=${term}&city_id=all&category_id=all`)
         .then((res) => {
            setResult(res.data.data.results);
            history.push('/search')
         })
         .catch(err => console.log(err));
   }
   const menuId = 'primary-search-account-menu';
   const renderMenu = (
      <Menu
         anchorEl={anchorEl}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         id={menuId}
         keepMounted
         transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         open={isMenuOpen}
         onClose={handleMenuClose}
      >
         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
   );

   const mobileMenuId = 'primary-search-account-menu-mobile';
   const renderMobileMenu = (
      <Menu
         anchorEl={mobileMoreAnchorEl}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         id={mobileMenuId}
         keepMounted
         transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         open={isMobileMenuOpen}
         onClose={handleMobileMenuClose}
      >
         <MenuItem>
            <IconButton size="large" color="inherit" >
               <AddCircleIcon />
            </IconButton>
            <p>Reklama berish</p>
         </MenuItem>
         <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
               size="large"
               aria-label="account of current user"
               aria-controls="primary-search-account-menu"
               aria-haspopup="true"
               color="inherit"
            >
               <AccountCircle />
            </IconButton>
            <p>Profile</p>
         </MenuItem>
      </Menu>
   );

   return (
      <div className='header-main' >
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
               <Toolbar>
                  <Container className='w-100'>
                     <div className='w-100 d-flex justify-content-between'>
                        <Link to="/">
                           <div className='logo-box'>
                              <img src={logo} className='logo' alt='logo' />
                           </div>
                        </Link>
                        <div>
                           <p className='text-white'>
                              Сораулар ушын? <br />
                              +33 447-00-69
                           </p>
                        </div>
                     </div>
                  </Container>
               </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
         </Box>

         <div className='navbar'>
            <Container className='w-100'>
               <Row className='py-md-2 h-100 w-100 align-items-center'>
                  <Col xs="6" md="3">
                     <div className='bolim' ref={wrapperRef}>
                        <div onClick={handleShow2} className='brand d-flex'>
                           <p>
                              <IoMenuOutline />
                           </p>
                           <p>
                              БѲЛИМЛЕР
                           </p>
                        </div>
                        <div className={show2 ? 'drop-down show' : "drop-down"}>
                           <ul>
                              <li>
                                 <Link to="/qaramol">
                                    <span>
                                       <GiCow />
                                       Ӄарамал
                                    </span>
                                    <BsArrowRight />
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/tuya">
                                    <span>
                                       <GiCamel />
                                       Түйе
                                    </span>
                                    <BsArrowRight />
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/ot">
                                    <span>
                                       <GiHorseHead />
                                       Жылӄы
                                    </span>
                                    <BsArrowRight />
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/echki">
                                    <span>
                                       <GiGoat />
                                       Ешки
                                    </span>
                                    <BsArrowRight />
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/qoy">
                                    <span>
                                       <GiSheep />
                                       Ӄой
                                    </span>
                                    <BsArrowRight />
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/tovuq">
                                    <span>
                                       <GiChicken />
                                       Таўиқ
                                    </span>
                                    <BsArrowRight />
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/mol-ozuqi">
                                    <span>
                                       <GiGrain />
                                       Мал азығы
                                    </span>
                                    <BsArrowRight />
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </Col>
                  <Col className='search-box' xs="0" md="6">
                     <div className="search-input">
                        <Form className='d-flex w-100' onSubmit={getSearchResult}>
                           <input
                              type="search"
                              onChange={e => setTrem(e.target.value)}
                              placeholder="Излеу..."
                              required
                              autoComplete='off'
                           />
                           <button type='submit'>
                              <span>
                                 <BiSearchAlt2 />
                              </span>
                           </button>
                        </Form>
                     </div>
                  </Col>
                  <Col xs="6" md="3">
                     <div className='d-flex w-100 justify-content-end align-items-center'>
                        <div onClick={handleSearchOpen} className='open-search'>
                           <BiSearchAlt2 />
                        </div>
                        <div className='profile-box'>
                           <div onClick={handleShow} className='profile mx-4'>
                              <VscAccount />
                           </div>{
                              !userId ? (
                                 <div className={show ? 'drop-down drop-down-mini show' : "drop-down drop-down-mini"}>
                                    <ul>
                                       <li>
                                          <Link to="/login">
                                             <RiUserShared2Fill />
                                             <span>
                                                Кириӯ
                                             </span>
                                          </Link>
                                       </li>
                                       <li>
                                          <Link to="/registration">
                                             <RiUserAddFill />
                                             <span>
                                                Дизимнен өтиу
                                             </span>
                                          </Link>
                                       </li>
                                    </ul>
                                 </div>)
                                 : (
                                    <div className={show ? 'drop-down drop-down-mini show' : "drop-down drop-down-mini"}>
                                       <ul>
                                          <li>
                                             <button className='logout' onClick={removeUserId}>
                                                Шыгыу
                                                <AiOutlineStop />
                                             </button>
                                             <Link to="/my-adds">
                                                <FcAdvertising />
                                                <span>Менин рекламаларым</span>
                                             </Link>
                                          </li>
                                          <li>
                                             <Link to="/">
                                                <BsPatchQuestion />
                                                <span>Жардем хам сораулар</span>
                                             </Link>
                                          </li>
                                       </ul>
                                    </div>
                                 )
                           }

                        </div>
                        <div className='add-rek'>
                           <Link to="/add-reklama">
                              <BsPlusCircle />
                           </Link>
                        </div>
                        <div className='add-card'>
                           <IconButton aria-label="cart">
                              <StyledBadge className='text-dark ' badgeContent={4} color="primary">
                                 <ShoppingCartIcon />
                              </StyledBadge>
                           </IconButton>
                        </div>
                     </div>
                  </Col>
               </Row>
               <div className={!open ? 'mobile-search w-100' : "mobile-search w-100 open"}>
                  <Col className='search-box'>
                     <div className="search-input">
                        <Form className='d-flex w-100' onSubmit={getSearchResult}>
                           <input
                              type="search"
                              onChange={e => setTrem(e.target.value)}
                              placeholder="Излеу..."
                              required
                              autoComplete='off'
                           />
                           <button type='submit'>
                              <span>
                                 <BiSearchAlt2 />
                              </span>
                           </button>
                        </Form>
                     </div>

                  </Col>
               </div>
            </Container>
         </div>
      </div>
   );
}
