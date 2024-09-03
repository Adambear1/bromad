import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-left mt-5' disabled={true}>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <b><a className='text-dark' aria-disabled={true}>
          Adam Birgenheier
        </a>
        </b>
      </div>
    </MDBFooter>
  );
}