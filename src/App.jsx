import React from 'react';
import './App.scss';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
