import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearch, IoBagOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';

import './NavBar.css';

function NavBar() {
  return (
    <header className="nav-header">
      <div>
        <NavLink to="/home">
          <img
            className="nav-logo"
            src="src/assets/images/sirmix_logo1.svg"
            alt="logo"
          />
        </NavLink>
      </div>
      <nav>
        <ul className="nav-ul">
          <li>
            <NavLink to="/shop" activeClassName="active">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dealers" activeClassName="active">
              Dealers
            </NavLink>
          </li>
          <li>
            <NavLink to="/videos" activeClassName="active">
              Videos
            </NavLink>
          </li>
          <li>
            <NavLink to="/specs" activeClassName="active">
              Specs
            </NavLink>
          </li>
          <li>
            <NavLink to="/support" activeClassName="active">
              Support
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="nav-ul">
          <li>
            <button className="nav-search-button">
              <IoSearch />
            </button>
          </li>
          <li>
            <NavLink to="/cart" className="nav-bag-button">
              <IoBagOutline />
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="nav-account-button">
              <MdOutlineAccountCircle />
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
