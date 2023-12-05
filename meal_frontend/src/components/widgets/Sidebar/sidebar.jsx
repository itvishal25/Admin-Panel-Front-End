// Sidebar.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);

  const numberOfEmployees = 42; // Replace with the actual number of employees
  const numberOfNonEmployees = 20; // Replace with the actual number of non-employees
  const numberOfAddEmployees = 15; // Replace with the actual number of added employees
  const numberOfBuffer = 8; // Replace with the actual number for buffer

  return (
    <div className="sidebar">
      <div className="date">
        <p>{formattedDate}</p>
      </div>
      <div className="horizontal-section" onClick={() => alert("Employees clicked!")}>
        <FontAwesomeIcon icon={faPlus} className="icon plus-icon" />
        <h5>Employees</h5>
        <div className="number">{numberOfEmployees}</div>
      </div>
      <div className="horizontal-section" onClick={() => alert("Non-Employees clicked!")}>
        <FontAwesomeIcon icon={faPlus} className="icon plus-icon" />
        <h5>Non-Employees</h5>
        <div className="number">{numberOfNonEmployees}</div>
      </div>
      <div className="horizontal-section" onClick={() => alert("Add Employees clicked!")}>
        <FontAwesomeIcon icon={faPlus} className="icon plus-icon" />
        <h5>Add Employees</h5>
        <div className="number">{numberOfAddEmployees}</div>
      </div>
      <div className="horizontal-section" onClick={() => alert("Buffer clicked!")}>
        <FontAwesomeIcon icon={faPlus} className="icon plus-icon" />
        <h5>Buffer</h5>
        <div className="number">{numberOfBuffer}</div>
      </div>
    </div>
  );
};

export default Sidebar;
