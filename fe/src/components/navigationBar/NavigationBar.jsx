import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import ProfileDropdown from '../profileDropdown/ProfileDropdown';
import './navigationBar.css'

export default function NavigationBar() {
  return (
    <>
      <MDBNavbar className='mb-3' fixed='top' light bgColor='light'>
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
      </MDBNavbar>
    </>
  );
}