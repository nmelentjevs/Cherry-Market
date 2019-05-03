import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <section className="footer">
      <Container className="text-center">
        <Row>
          <Col className="col-md-3">
            <h1>Useful Links</h1>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>Return Policy</p>
            <p>Discount Coupons</p>
          </Col>

          <Col className="col-md-3">
            <h1>Company</h1>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Career</p>
            <p>Affiliate</p>
          </Col>
          <Col className="col-md-3">
            <h1>Follow Us On</h1>
            <p>
              <i className="fa fa-facebook-official" /> Facebook
            </p>
            <p>
              <i className="fa fa-youtube-play" /> YouTube
            </p>
            <p>
              <i className="fa fa-linkedin" /> Linkedin
            </p>
            <p>
              <i className="fa fa-twitter" /> Twitter
            </p>
          </Col>
          <Col className="col-md-3 footer-image">
            <h1>Download App</h1>
          </Col>
        </Row>
        <hr />
        <p className="copyright">
          Made with <i className="fa fa-heart-o" /> by Easy Tutorials
        </p>
      </Container>
    </section>
  );
}
