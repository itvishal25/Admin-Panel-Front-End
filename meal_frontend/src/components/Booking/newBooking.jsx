import React, { useState } from 'react';
import { Form, Col, Row, Button, Table } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './newBooking.css';
import CustomNavbar from '../widgets/Navbar/navbar';

const NewBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div>
        <CustomNavbar/>
    <div className="sidebar-box">
      <h2>Book a Meal</h2>
      <Form onSubmit={handleSubmit}>
        {/* Category */}
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

        {/* Select Category */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Select Category:
          </Form.Label>
          <Col sm={8}>
            <Form.Check type="radio" label="Lunch" name="category" id="lunch" />
            <Form.Check type="radio" label="Dinner" name="category" id="dinner" />
          </Col>
        </Form.Group>

        {/* Weekend Checkbox */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Weekend:
          </Form.Label>
          <Col sm={8}>
            <Form.Check type="checkbox" label="Weekend" />
          </Col>
        </Form.Group>

        {/* Select Dates */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Select Dates:
          </Form.Label>
          <Col sm={8}>
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              placeholderText="Select Dates"
              className="form-control"
            />
          </Col>
        </Form.Group>

        {/* Select Account */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Select Account:
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Select Account" />
          </Col>
        </Form.Group>

        {/* Notes */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Notes:
          </Form.Label>
          <Col sm={8}>
            <Form.Control as="textarea" rows={3} placeholder="Notes" />
          </Col>
        </Form.Group>

        {/* Booking Count */}
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={4}>
            Booking Count:
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="Booking Count" />
          </Col>
        </Form.Group>

        {/* Table */}
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
                <tr>
                  <td>
                    <Form.Check type="checkbox" label="" />
                  </td>
                  <td>123</td>
                  <td>John Doe</td>
                  <td>IT</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </Table>
          </Col>
        </Form.Group>

        {/* Submit Button */}
        <div className="text-center">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
    </div>
  );
};

export default NewBooking;
