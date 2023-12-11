import React from 'react';
import Badge from 'react-bootstrap/Badge';
import { AiOutlinePlus } from 'react-icons/ai';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/style.css'; // Create a separate CSS file for styling

const DataVisualize = () => {
  return (
    <Container fluid>
      <Row className="data-visualize-box-container">
        <Col xs={12} md={2} className="data-visualize-box">
          <Link to="/employees">
            <AiOutlinePlus className="icon" />
            Employees
            <Badge variant="primary">5</Badge>
            {/* Add icons or content here */}
          </Link>
        </Col>
        <Col xs={12} md={2} className="data-visualize-box">
          <Link to="/non-employees">
            <AiOutlinePlus className="icon" />
            Non Employees
            <Badge variant="success">8</Badge>
            {/* Add icons or content here */}
          </Link>
        </Col>
        <Col xs={12} md={2} className="data-visualize-box">
          <Link to="/add-employees">
            <AiOutlinePlus className="icon" />
            Add Employees
            <Badge variant="warning">2</Badge>
            {/* Add icons or content here */}
          </Link>
        </Col>
        <Col xs={12} md={2} className="data-visualize-box">
          <Link to="/buffer">
            <AiOutlinePlus className="icon" />
            Buffer
            <Badge variant="danger">3</Badge>
            {/* Add icons or content here */}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default DataVisualize;
