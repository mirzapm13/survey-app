import React from 'react';

import WebpackLogo from '../../assets/images/webpack_logo.png';
import ReactLogo from '../../assets/images/react_logo.png';

function Logos() {
  return (
    <div className="logos">
      <img src={WebpackLogo} width={257} height={100} alt="webpack" />
      <img src={ReactLogo} width={75} height={65} alt="react" />
    </div>
  );
}

export default Logos;
