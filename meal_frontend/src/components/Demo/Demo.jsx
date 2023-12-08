// Home.jsx
import React from 'react';
// import withNavbar from '../HOC/withNavbar';
import { Container, Row, Col } from 'react-bootstrap';
import './Demo'; // Import your custom styles

const Home = () => {

  

  return (
    <Container className="main-container">
      <Row>
        {/* Container A */}
        <Col sm={12} md={8} className="container-a">
          <h2>Container A</h2>
          {/* Add your content here */}
        </Col>

        {/* Container B */}
        <Col sm={12} md={4} className="container-b">
          <h2>Container B</h2>
          {/* Add your content here */}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
