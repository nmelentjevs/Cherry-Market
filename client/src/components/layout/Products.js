import React from 'react';

import { graphql, compose } from 'react-apollo';
import { GET_ITEMS_QUERY } from '../../queries/queries';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem } from '../../actions/cartActions';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Products(props) {
  const displayItems = () => {
    const data = props.GET_ITEMS_QUERY;
    if (data.loading) return <div>Loading Items..</div>;
    if (data.error) console.log(data.error);
    const { items } = data;

    return items.map(item => {
      return (
        <Col className="col-md-3" key={item.id}>
          <div className="product-top">
            <img src={item.imageURL} alt="Product" />
            <div className="overlay-right">
              <button type="button" variant="secondary" title="Quick Shop">
                <i className="fa fa-eye" />
              </button>
              <button type="button" variant="secondary" title="Add to Wishlist">
                <i className="fa fa-heart-o" />
              </button>
              <button
                type="button"
                variant="secondary"
                title="Add to Cart"
                onClick={() => props.addItem(item)}
              >
                <i className="fa fa-shopping-cart" />
              </button>
            </div>
          </div>
          <div className="product-bottom text-center">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star-half-o" />
            <h3>{item.name}</h3>
            <h5>${item.price}</h5>
          </div>
        </Col>
      );
    });
  };

  return (
    <section className="new-products">
      <Container className="container">
        <div className="title-box">
          <h2>New Arrivals</h2>
        </div>
        <Row className="row">{displayItems()}</Row>
      </Container>
    </section>
  );
}

Products.propTypes = {
  errors: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  addItem: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  items: state.items,
  cart: state.cart
});

export default compose(
  graphql(GET_ITEMS_QUERY, { name: 'GET_ITEMS_QUERY' }),
  connect(
    mapStateToProps,
    { addItem }
  )
)(Products);
