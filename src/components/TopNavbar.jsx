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
            {/* <img src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp' height='30' alt='' loading='lazy'/> */}
            🏄‍♂️ The Bromad 💰
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
