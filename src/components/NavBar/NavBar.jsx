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
            <NavLink to="/shop" activeClassName="active" className="nav-link">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dealers"
              activeClassName="active"
              className="nav-link"
            >
              Dealers
            </NavLink>
          </li>
          <li>
            <NavLink to="/videos" activeClassName="active" className="nav-link">
              Videos
            </NavLink>
          </li>
          <li>
            <NavLink to="/specs" activeClassName="active" className="nav-link">
              Specs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/support"
              activeClassName="active"
              className="nav-link"
            >
              Support
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="nav-link"
            >
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
