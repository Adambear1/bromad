import React from 'react';
import {MDBContainer, MDBNavbar, MDBNavbarBrand} from 'mdb-react-ui-kit';

export default function TopNavbar() {
  return (
    <>
      <MDBNavbar light bgColor='light' center className='justify-content-center'>
        <MDBContainer fluid center
          fullWidth={false}
          className='justify-content-center'>
          <MDBNavbarBrand href='#' center
            fullWidth={false}
            className='justify-content-center'>
            🏄‍♂️ The Bromad 🏡
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
