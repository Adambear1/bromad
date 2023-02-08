import React from 'react';
import {MDBCard, MDBCardBody, MDBCardText, MDBCardImage, MDBCardTitle} from 'mdb-react-ui-kit';

export default function Card({src, content, name, cta}) {
  return (
    <>
    <MDBCard onClick={() => cta && cta()}>
      {src && <MDBCardImage src={src}
        style={
          {
            maxHeight: "200px",
            objectFit: "cover"
          }
        }
        position='top'/>}
      <MDBCardBody> 
      {name && <MDBCardTitle className='text-center'>{name}</MDBCardTitle>}
       {content && <MDBCardText  className="text-center text-lg-left"> {content} </MDBCardText>}
      </MDBCardBody>
    </MDBCard>
    </>
  );
}
