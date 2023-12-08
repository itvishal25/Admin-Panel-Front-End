
import React from 'react';
import '../styles/style.css'
import React from 'react'

import { Container, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';
import '../styles/style.css';
import withNavbar from '../HOC/withNavbar';
// import CustomNavbar from '../widgets/Navbar/navbar';


const BookingList = () => {
  return (
    <div>
      <h2>Title: Booking List</h2>

      <div>
        <button style={{ float: 'right', margin: '10px' }}>Add Booking</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Department</th>
            <th>Total Meals Booked</th>
            <th>Meal Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Placeholder data, replace with actual data */}
          <tr>
            <td>1</td>
            <td>Rishabh</td>
            <td>Employee</td>
            <td>3</td>
            <td>2023-12-08</td>
          </tr>
          <tr>
            <td>2</td>
            <td>John Doe</td>
            <td>Others</td>
            <td>2</td>
            <td>2023-12-09</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>

      <div>
        <p>Total Bookings: 2</p>
        <button>Share</button>
      </div>

      <div>
        <label>Show Entries:</label>
        <select>
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>

      <div>
        {/* Pagination component goes here */}
        {/* For simplicity, you can use a library like react-paginate */}
      </div>

      <div>
        <label>Months:</label>
        <select>
          <option>January</option>
          <option>February</option>
          {/* Add more months as needed */}
        </select>
      </div>
    </div>
  )
}

export default BookingList;

export default bookingList

