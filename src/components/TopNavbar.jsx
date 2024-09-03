import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';

export default function TopNavbar({ cta }) {
  return (
    <>
      <MDBNavbar light bgColor='light' center="true" className='justify-content-center' onClick={cta}>
        <MDBContainer fluid center
          className='justify-content-center'>
          <MDBNavbarBrand center
            disabled={true}
            className='justify-content-center'>
            🏄‍♂️ The Bromad 🏡
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
