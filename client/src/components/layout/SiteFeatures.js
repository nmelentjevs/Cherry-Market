import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SiteFeatures() {
  return (
    <section className="website-features">
      <Container>
        <Row>
          <Col className="col-md-3 feature-box">
            <div className="feature-text">
              <p>
                <b>100% Original items </b>are available at company
              </p>
            </div>
          </Col>
          <Col className="col-md-3 feature-box">
            <div className="feature-text">
              <p>
                <b>Return within 30 days </b>of receiving your order.
              </p>
            </div>
          </Col>
          <Col className="col-md-3 feature-box">
            <div className="feature-text">
              <p>
                <b>Get free delivery for every</b>order on more than price.
              </p>
            </div>
          </Col>
          <Col className="col-md-3 feature-box">
            <div className="feature-text">
              <p>
                <b>Pay Online through multiple </b>options (card/Net banking)
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
