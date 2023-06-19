
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function Toast({_c, text, populate, disabled, styles}) {
  const color = {
    green: "success",
    red: "danger",
    yellow: "warning",
    turquoise: "info",
    gray: "light",
    black: "dark",
    light: "link",
    blue: "primary",
    light_blue: "secondary"
  };
  return (
    <>
      <MDBBtn className={styles ? styles + " me-1": 'me-1'} color={color[_c]} onClick={()=>populate(text)} disabled={disabled}>
        {text.toUpperCase()}
      </MDBBtn>
    </>
  );
}