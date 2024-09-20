import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtnGroup, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';

export default function TopNavbar() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand>🏄‍♂️ The Bromad 🌴</MDBNavbarBrand>
          <MDBInputGroup className='d-flex w-auto'>
            <MDBBtn className='mx-3' color='white'>Consulting</MDBBtn>
            <MDBBtn className='mx-3' color='primary'>Products</MDBBtn>
          </MDBInputGroup>
          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
            <input className='form-control' placeholder="Newsletter" aria-label="Search" type='Search' />
            <MDBBtn outline>Subscribe</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>

      </MDBNavbar>
    </>
  );
}
