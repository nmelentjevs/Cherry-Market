import React from 'react';

function Navbar() {
  return (
    <div className="top-nav-bar">
      <div className="search-box">
        <i className="fa fa-bars" id="menu-btn" />
        <i className="fa fa-times" id="close-btn" />
        Melon Shop
        <input type="text" className="form-control" />
        <span className="input-group-text">
          <i className="fa fa-search" />
        </span>
      </div>
      <div className="menu-bar">
        <ul>
          <li>
            <a href="/">
              <i className="fa fa-shopping-basket" />
              cart
            </a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
          <li>
            <a href="/">Log In</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
