import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function Navbar({ page, setPage }) {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBCollapse navbar={true} show={true} center className='justify-content-center'>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>

            {
              ["Home", "About", "Reviews", "Portfolio", "Locations", "Philosophy"].map(i =>
                <MDBNavbarItem>
                  <MDBNavbarLink active={page === i.toLowerCase()} aria-current='page' onClick={() => setPage(i.toLocaleLowerCase())} className="justify-content-center text-center">
                    {i}
                  </MDBNavbarLink>
                </MDBNavbarItem>)
            }

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}