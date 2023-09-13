import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import ProfileDropdown from '../profileDropdown/ProfileDropdown';

export default function NavigationBar() {
  return (
    <>
      <MDBNavbar fixed='top' light bgColor='light'>
        <MDBContainer fluid>
          <MDBContainer className='d-flex  align-items-center'>
            <MDBNavbarBrand href='#'>motoverSe.it</MDBNavbarBrand>
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