import React, { Component } from 'react';

import StripeCheckout from 'react-stripe-checkout';

import { stripePublish } from '../../config/googleKeys';

import axios from 'axios';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../../actions/cartActions';

class Cart extends Component {
  onToken = token => {
    axios('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token)
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  render() {
    const { basket, total } = this.props.cart;
    parseFloat(total).toFixed(2);
    return (
      <div className="basket">
        {total !== 0 ? (
          <div>
            {basket.map(item => {
              return (
                <div key={item.id} className="basket-item">
                  <div>{item.name}</div>
                  <div>{item.price}£</div>
                  <div className="delete-button">
                    <button
                      className="dropicon"
                      href="#"
                      onClick={() => this.props.deleteItem(item.id, item.price)}
                    >
                      <i className="far fa-trash-alt" />
                    </button>
                  </div>
                </div>
              );
            })}
            <p> Total: {total}£</p>
            {false ? (
              <div> Loding.. </div>
            ) : (
              <StripeCheckout
                name="Cherry Market" // the pop-in header title
                description="A lot of items" // the pop-in header subtitle
                token={this.onToken}
                stripeKey={stripePublish}
                amount={total * 100} // cents
                currency="EUR"
                email="info@vidhub.co"
              />
            )}
          </div>
        ) : (
          <div className="basket">
            <p> No items </p>
            <p> Total: {total}</p>
          </div>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  errors: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  deleteItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  items: state.items,
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { deleteItem }
)(Cart);
