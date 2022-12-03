import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCardFooter
} from 'mdb-react-ui-kit';

export default function InfoCard({name, src, location, year, link}) {
  return (
    <MDBCard alignment='center'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={src} fluid alt='...'/>
        <a>
          <div className='mask'
            style={
              {backgroundColor: 'rgba(251, 251, 251, 0.15)'}
          }></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{name}</MDBCardTitle>
        <MDBCardText>
          {location}
        </MDBCardText>
        {link && <MDBBtn href={link}>Visit!</MDBBtn>}
      </MDBCardBody>
      <MDBCardFooter className='text-muted'>{year}</MDBCardFooter>
    </MDBCard>
  );
}
