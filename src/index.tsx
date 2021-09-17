import React from 'react';
import ReactDOM from 'react-dom';
// React router
import { BrowserRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { store } from 'store';
// Global styles
import 'styles/index.css';
// Main component
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
