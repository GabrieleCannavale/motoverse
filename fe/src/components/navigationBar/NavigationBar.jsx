import React from 'react';
import {
   MDBNavbarLink,
} from 'mdb-react-ui-kit';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ProfileDropdown from '../profileDropdown/ProfileDropdown';
import './navigationBar.css'
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <>
      <Navbar className='fixed-top' expand="lg" style={{backgroundColor:'#FFA559'}}>
      <Container fluid>
        <Navbar.Brand href="#" >
          <Link to={'/homepage'}> 
            <Avatar src="https://i.postimg.cc/9QVHNRxB/motoverse-FINAL.png" style={{width:'6em', height:'4em'}} alt="logo" />
          </Link>
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <MDBNavbarLink className='ms-4 me-4'> chi siamo </MDBNavbarLink>
            <MDBNavbarLink className='me-4'> perchè motoverSe </MDBNavbarLink>
            <MDBNavbarLink> contattaci! </MDBNavbarLink>
            
          </Nav>
          <ProfileDropdown />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
