// import react from 'react';
// import ReactDOM from 'react-dom'

// import App from './App';
// import './index.css';
// import {ContextProvider} from './contexts/ContextProvider'

// ReactDOM.render(
// <ContextProvider>
//     <App/>
// </ContextProvider>
// , document.getElementById('root')
// ); 


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </HashRouter>,
  document.getElementById('root')
);
