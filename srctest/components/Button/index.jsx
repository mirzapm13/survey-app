/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';

function Button({ children, ...rest }) {
  return (
    <button style={{ marginTop: '24rem' }} {...rest}>
      {children}
    </button>
  );
}

export default Button;
