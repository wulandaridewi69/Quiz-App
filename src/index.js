import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import App from '../src/pages/App';

import Route from '../src/routes/Route'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>
);

