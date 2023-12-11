// Sidebar.js
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faPeopleCarry, faChartLine, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';
import './sidebar.css'; // Create a separate CSS file for styling

const Sidebar = () => {
  const [bookingsCount, setBookingsCount] = useState(0);
  const [employeesCount, setEmployeesCount] = useState(0);
  const [nonEmployeesCount, setNonEmployeesCount] = useState(0);
  const [bufferCount, setBufferCount] = useState(0);

  const fetchData = async () => {
    // Simulating an API call to fetch data
    try {
      const response = await fetch('your_api_endpoint_here');
      const data = await response.json();

      setBookingsCount(data.bookingsCount);
      setEmployeesCount(data.employeesCount);
      setNonEmployeesCount(data.nonEmployeesCount);
      setBufferCount(data.bufferCount);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const handleCalendarClick = () => {
    // Fetch data when the calendar is clicked
    fetchData();
  };

  return (
    <div className="sidebar">
      <div className="rounded-section" onClick={handleCalendarClick}>
        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
        <span>Bookings</span>
        <Badge bg="info" className="number-badge">
          {bookingsCount}
        </Badge>
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
      </div>

      <div className="rounded-section" onClick={handleCalendarClick}>
        <FontAwesomeIcon icon={faUsers} className="icon" />
        <span>Employees</span>
        <Badge bg="success" className="number-badge">
          {employeesCount}
        </Badge>
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
      </div>

      <div className="rounded-section" onClick={handleCalendarClick}>
        <FontAwesomeIcon icon={faPeopleCarry} className="icon" />
        <span>Non-Employees</span>
        <Badge bg="warning" className="number-badge">
          {nonEmployeesCount}
        </Badge>
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
      </div>

      <div className="rounded-section" onClick={handleCalendarClick}>
        <FontAwesomeIcon icon={faChartLine} className="icon" />
        <span>Buffer</span>
        <Badge bg="danger" className="number-badge">
          {bufferCount}
        </Badge>
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
