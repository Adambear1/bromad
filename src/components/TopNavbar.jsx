import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBBtnGroup, MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';

export default function TopNavbar() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand>🏄‍♂️ The Bromad 🌴</MDBNavbarBrand>
          <MDBInputGroup className='d-flex w-auto'>
            <MDBBtn className='' color='white' href='https://consult.thebromad.com'>Consulting</MDBBtn>
            <MDBBtn className='' color='primary' href='https://shop.thebromad.com'>Products</MDBBtn>
          </MDBInputGroup>
          <MDBInputGroup tag="form" className='d-flex w-auto'>
            <input className='form-control' placeholder="Newsletter" aria-label="Search" type='Search' />
            <MDBBtn outline>Subscribe</MDBBtn>
          </MDBInputGroup>
        </MDBContainer>

      </MDBNavbar>
    </>
  );
}
