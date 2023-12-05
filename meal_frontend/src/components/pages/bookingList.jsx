// BookingList.js

import React from 'react';
import { Container, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';
import '../styles/style.css';

const BookingList = () => {
  return (
    <div>
      {/* Page Content */}
      <Container className="mt-4">
          {/* Button for Adding Booking */}
          <Row>
          <Col>
            <Button variant="primary" className="add-booking-button">
              Add Booking
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Booking List</h1>
            <hr className="full-line" />
          </Col>
        </Row>

        {/* Tabs */}
        <Row className="mt-4">
          <Col>
            <Tabs defaultActiveKey="rishabh" id="bookingListTabs">
              <Tab eventKey="rishabh" title="Rishabh Employees">
                {/* Content for Rishabh tab goes here */}
              </Tab>
              <Tab eventKey="others" title="Others">
                {/* Content for Others tab goes here */}
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookingList;
