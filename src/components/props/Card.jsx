import React from 'react';
import {MDBCard, MDBCardBody, MDBCardText, MDBCardImage, MDBCardTitle} from 'mdb-react-ui-kit';

export default function Card({src, content, name}) {
  return (
    <MDBCard>
      <MDBCardImage src={src}
        style={
          {
            maxHeight: "200px",
            objectFit: "cover"
          }
        }
        alt='...'
        position='top'/>
      <MDBCardBody> {
        name && <MDBCardTitle className='text-center'>{name}</MDBCardTitle>
      }
        <MDBCardText> {content} </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}
