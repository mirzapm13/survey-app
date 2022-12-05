/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

function Typography({ children, ...rest }) {
  return <h1 {...rest}>{children}</h1>;
}
export default Typography;
