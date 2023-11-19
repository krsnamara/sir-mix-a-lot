import React from 'react';
import { useSelector } from 'react-redux';
import './Footer.css';

function Footer() {
  const cartCount = useSelector((state) => state.cartCount.value);

  return (
    <>
      <div className="footer-main-container">Footer Count {cartCount}</div>
    </>
  );
}

export default Footer;
