import React from 'react';

// bootstrap

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Featured() {
  return (
    <section className="featured-categories">
      <Container>
        <Row>
          <Col className="col-md-4">1 of 3</Col>
          <Col className="col-md-4">2 of 3</Col>
          <Col className="col-md-4">3 of 3</Col>
        </Row>
      </Container>
    </section>
  );
}
