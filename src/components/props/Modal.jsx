import React from 'react';
import {MDBModal, MDBModalDialog, MDBModalHeader, MDBModalTitle, MDBBtn, MDBModalBody, MDBModalFooter, MDBModalContent} from 'mdb-react-ui-kit';

export default function Modal({title, info, show, setShow}) {
  return (
<MDBModal show={show} tabIndex='-1' closeOnEsc={true} backdrop={false} animationDirection={"top"} nonInvasive={true} size={"fullscreen-sm-down"}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{title}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={()=>setShow(false)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>{info}</MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={()=>setShow(false)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
  )}