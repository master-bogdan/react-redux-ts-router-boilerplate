import React from 'react';
import ReactDOM from 'react-dom';
// React router
import { BrowserRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { store } from 'store';
// Global styles
import './index.css';
// Main component
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
