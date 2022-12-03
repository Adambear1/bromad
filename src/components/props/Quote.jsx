import React from 'react';
import { MDBTypography } from 'mdb-react-ui-kit';

export default function Quote({quote, author}) {
  return (
    <figure className='text-center my-0'>
      <MDBTypography blockquote>
        <p>{quote}</p>
      </MDBTypography>
      <figcaption className='blockquote-footer'>
        <cite title='Source Title'>{author}</cite>
      </figcaption>
    </figure>
  );
}