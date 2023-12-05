// BookingSideBar.js

import React from 'react';
import { Form, Col, Row, Button, Table } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './bookingSidebar.css'

const BookingSideBar = () => {
  return (
    <div>
      <h2>Book a Meal</h2>
      <Form>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Category:
          </Form.Label>
          <Col sm={8}>
            <Form.Control as="select">
              <option>Employees</option>
              <option>Non-Employees</option>
              <option>Custom Booking</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Select Category:
          </Form.Label>
          <Col sm={8}>
            <Form.Check
              type="radio"
              label="Lunch"
              name="category"
              id="lunch"
            />
            <Form.Check
              type="radio"
              label="Dinner"
              name="category"
              id="dinner"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Weekend:
          </Form.Label>
          <Col sm={8}>
            <Form.Check type="checkbox" label="Weekend" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Select Dates:
          </Form.Label>
          <Col sm={8}>
            <DatePicker
              selected={null} // Provide the selected date here
              onChange={(date) => console.log(date)} // Handle date change
              placeholderText="Select Dates"
              className="form-control"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Select Account:
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Select Account" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Notes:
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Notes" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Booking Count:
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Booking Count" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Select Employees:
          </Form.Label>
          <Col sm={8}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>
                    <Form.Check type="checkbox" label="Select All" />
                  </th>
                  <th>Employee ID</th>
                  <th>Employee Name</th>
                  <th>Department</th>
                </tr>
              </thead>
              <tbody>
                {/* Add table rows with employee data */}
              </tbody>
            </Table>
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookingSideBar;
