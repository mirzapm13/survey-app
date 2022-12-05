import React from 'react';

import Typography from './components/Typography';

import Button from './components/Button';
import Logos from './components/Logos';

export default function App() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="main">
      <Logos />
      <div className="content">
        <Typography style={{ marginBottom: '16rem' }}>Boilerplate React Webpack 5</Typography>
        <p>
          Webpack 5 boilerplate for react using babel, sass, with a hot dev server and an optimized production
          build.Configured with eslint rules.
          <small>
            Its posted on
            {new Date().toDateString()}
          </small>
        </p>
        <Button onClick={() => openInNewTab('https://github.com/tpnovaldev/boilerplate-react-webpack-5')}>
          Get started it
        </Button>
      </div>
    </div>
  );
}
