import React from 'react';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function HorizontalCard({src, content, name}) {
  return (
    <MDBCard>
      <MDBRow className='g-0'>
        <MDBCol md="4">
          <MDBCardImage src={src} alt='...' fluid   style={{maxHeight: "200px", maxWidth: "200px", objectFit: "cover"}}/>
        </MDBCol>
        <MDBCol md="8">
          <MDBCardBody>
            <MDBCardTitle>{name}</MDBCardTitle>
            <MDBCardText>
              {content}
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}
