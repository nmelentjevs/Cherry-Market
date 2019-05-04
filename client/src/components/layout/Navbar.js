import React, { useState, Fragment } from 'react';

import { Link } from 'react-router-dom';
import Cart from '../common/Cart';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Navbar(props) {
  const [dropdown, setDropdown] = useState(false);
  const expand = () => {
    setDropdown(true);
    document.getElementById('myDropdown').classList.toggle('show');
  };
  const collapse = () => {
    setDropdown(false);
    document.getElementById('myDropdown').classList.remove('show');
  };
  return (
    <div className="top-nav-bar">
      <div className="search-box">
        <i className="fa fa-bars" id="menu-btn" />
        <i className="fa fa-times" id="close-btn" />
        <Link to="/">
          {' '}
          <div className="logo-text">
            {' '}
            <span className="words">Cherry </span>{' '}
            <span className="words">Market</span>
          </div>
        </Link>

        <input type="text" className="form-control" />
        <span className="input-group-text">
          <i className="fa fa-search" />
        </span>
      </div>
      <div className="menu-bar">
        <ul>
          <li>
            <div className="dropdown">
              <button onClick={expand} className="dropicon">
                <div id="cart">
                  <span
                    className="p1 fa-stack has-badge"
                    data-count={props.cart.basket.length}
                  >
                    <i
                      className="far fa-credit-card"
                      style={{ color: 'white', fontSize: '1.3rem' }}
                    />
                  </span>
                </div>
              </button>

              <div
                id="myDropdown"
                className="dropdown-content"
                onBlur={collapse}
                tabIndex="0"
              >
                <Cart />
              </div>
            </div>
          </li>
          {props.auth.isAuthenticated ? null : (
            <Fragment>
              {' '}
              <li>
                <Link to="/register">Sing up</Link>
              </li>
              <li>
                <Link to="/login">Log in</Link>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ auth: state.auth, cart: state.cart });

export default connect(
  mapStateToProps,
  {}
)(Navbar);
