import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoSearch, IoBagOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';

import './NavBar.css';

function NavBar() {
  return (
    <header className="nav-header">
      <div>
        <h1>
          <img
            className="nav-logo"
            src="src/assets/images/sirmix_logo1.svg"
            alt="logo"
          />
        </h1>
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
        <button className="nav-search-button">
          <IoSearch />
        </button>
        <button className="nav-bag-button">
          <IoBagOutline />
        </button>
        <button className="nav-account-button">
          <MdOutlineAccountCircle />
        </button>
      </div>
    </header>
  );
}

export default NavBar;
