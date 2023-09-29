import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ProfileDropdown from '../profileDropdown/ProfileDropdown';
import './navigationBar.css'
import { Avatar } from '@mui/material';

export default function NavigationBar() {
  return (
    <>
      <Navbar expand="lg" style={{backgroundColor:'#FFA559'}}>
      <Container fluid>
        <Navbar.Brand href="#" >
          <Avatar src="https://i.postimg.cc/9QVHNRxB/motoverse-FINAL.png" style={{width:'6em', height:'4em'}} alt="logo" />
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
{/* <MDBNavbar className='mb-3' fixed='top' light bgColor='light'>
        <MDBContainer fluid>
          <MDBContainer className='d-flex  align-items-center'>
            <MDBNavbarBrand href='#'>
              <a href="https://ibb.co/z8TZH3s">
                <img className='logo-image' src="https://i.ibb.co/7gdKN3v/mtverse.jpg" alt="mtverse" border="0" />
              </a>
            </MDBNavbarBrand>
            <MDBNavbarLink className='ms-4 me-4'> chi siamo </MDBNavbarLink>
            <MDBNavbarLink className='me-4'> perchè motoverSe </MDBNavbarLink>
            <MDBNavbarLink> contattaci! </MDBNavbarLink>
          </MDBContainer>

          <ProfileDropdown />
        </MDBContainer>
      </MDBNavbar> */}