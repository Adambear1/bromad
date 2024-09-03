import React from 'react';
import {MDBCard, MDBCardBody, MDBCardText, MDBCardImage, MDBCardTitle} from 'mdb-react-ui-kit';

export default function Card({src, content, name, cta, pointer}) {
  return (
    <>
    <MDBCard onClick={() => cta && cta()} style={pointer && {cursor : "pointer"}}>
      {src && <MDBCardImage src={src}
        style={
          {
            maxHeight: "129px",
            minWidth: "172px",
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
