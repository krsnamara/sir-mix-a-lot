import React from 'react';
import './EventBar.css';
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import { setFalse, setTrue } from '../../slices/loggedInSlice';

function EventBar() {
  const cartCount = useSelector((state) => state.cartCount.value);
  const loggedIn = useSelector((state) => state.loggedIn.value);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setFalse());
  };
  const handleLogin = () => {
    dispatch(setTrue());
  };

  return (
    <div>
      <h2>Number of items in cart: {cartCount}</h2>
      <h2>User is: {loggedIn ? 'Logged In' : 'Logged Out'}</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default EventBar;
