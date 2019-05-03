import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function OnSale() {
  return (
    <section className="on-sale">
      <Container className="container">
        <div className="title-box">
          <h2>On Sale</h2>
        </div>
        <Row className="row">
          <Col className="col-md-3">
            <div className="product-top">
              <div className="overlay-right">
                <Button type="button" variant="secondary" title="Quick Shop">
                  <i className="fa fa-eye" />
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  title="Add to Wishlist"
                >
                  <i className="fa fa-heart-o" />
                </Button>
                <Button type="button" variant="secondary" title="Add to Cart">
                  <i className="fa fa-shopping-cart" />
                </Button>
              </div>
            </div>
            <div className="product-bottom text-center">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
              <h3>Fitness Watch</h3>
              <h5>$40.00</h5>
            </div>
          </Col>

          <Col className="col-md-3">
            <div className="product-top">
              <div className="overlay-right">
                <Button type="button" variant="secondary" title="Quick Shop">
                  <i className="fa fa-eye" />
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  title="Add to Wishlist"
                >
                  <i className="fa fa-heart-o" />
                </Button>
                <Button type="button" variant="secondary" title="Add to Cart">
                  <i className="fa fa-shopping-cart" />
                </Button>
              </div>
            </div>
            <div className="product-bottom text-center">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <h3>Smart Watch</h3>
              <h5>$50.00</h5>
            </div>
          </Col>

          <Col className="col-md-3">
            <div className="product-top">
              <div className="overlay-right">
                <button type="button" variant="secondary" title="Quick Shop">
                  <i className="fa fa-eye" />
                </button>
                <button
                  type="button"
                  variant="secondary"
                  title="Add to Wishlist"
                >
                  <i className="fa fa-heart-o" />
                </button>
                <button type="button" variant="secondary" title="Add to Cart">
                  <i className="fa fa-shopping-cart" />
                </button>
              </div>
            </div>
            <div className="product-bottom text-center">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <h3>Formarl Shoes</h3>
              <h5>$500.00</h5>
            </div>
          </Col>

          <Col className="col-md-3">
            <div className="product-top">
              <div className="overlay-right">
                <button type="button" variant="secondary" title="Quick Shop">
                  <i className="fa fa-eye" />
                </button>
                <button
                  type="button"
                  variant="secondary"
                  title="Add to Wishlist"
                >
                  <i className="fa fa-heart-o" />
                </button>
                <button type="button" variant="secondary" title="Add to Cart">
                  <i className="fa fa-shopping-cart" />
                </button>
              </div>
            </div>
            <div className="product-bottom text-center">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star-half-o" />
              <i className="fa fa-star-o" />
              <h3>Leather Watch</h3>
              <h5>$300.00</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
