import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartCountReducer from './slices/cartCountSlice.js';
import loggedInReducer from './slices/loggedInSlice.js';

const store = configureStore({
  reducer: {
    cartCount: cartCountReducer,
    loggedIn: loggedInReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
