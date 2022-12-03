import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from 'mdb-react-ui-kit';

export default function Navbar({page, setPage}) {
  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBCollapse navbar={true} show={true} center className='justify-content-center'>
          <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active={page === "home"} aria-current='page' onClick={()=> setPage("home")} className="justify-content-center text-center">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active={page === "about"} aria-current='page' onClick={()=> setPage("about")} className="justify-content-center text-center">
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active={page === "portfolio"} aria-current='page' onClick={()=> setPage("portfolio")} className="justify-content-center text-center">
                Portfolio
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active={page === "locations"} aria-current='page' onClick={()=> setPage("locations")} className="justify-content-center text-center">
                Locations
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink active={page === "philosophy"} aria-current='page' onClick={()=> setPage("philosophy")} className="justify-content-center text-center">
                Philosophy
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}