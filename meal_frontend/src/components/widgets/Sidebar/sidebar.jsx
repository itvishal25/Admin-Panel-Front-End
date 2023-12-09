// Sidebar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUsers, faPeopleCarry, faChartLine, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Badge } from 'react-bootstrap';
import './sidebar.css'; // Create a separate CSS file for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="rounded-section">
        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
        <span>Bookings</span>
        <Badge bg="info" className="number-badge">
          5
        </Badge>
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
      </div>

      <div className="rounded-section">
        <FontAwesomeIcon icon={faUsers} className="icon" />
        <span>Employees</span>
        <Badge bg="success" className="number-badge">
          10
        </Badge>
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
      </div>

      <div className="rounded-section">
        <FontAwesomeIcon icon={faPeopleCarry} className="icon" />
        <span>Non-Employees</span>
        <Badge bg="warning" className="number-badge">
          7
        </Badge>
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
      </div>

      <div className="rounded-section">
        <FontAwesomeIcon icon={faChartLine} className="icon" />
        <span>Buffer</span>
        <Badge bg="danger" className="number-badge">
          3
        </Badge>
        <FontAwesomeIcon icon={faPlus} className="plus-icon" />
      </div>
    </div>
  );
};

export default Sidebar;
