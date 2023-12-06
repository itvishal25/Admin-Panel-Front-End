// newEmployeeTable.jsx

import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import CustomNavbar from '../widgets/Navbar/navbar';
import '../styles/style.css';

const NewEmployeeTable = () => {
  const [newEmployeeData, setNewEmployeeData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API endpoint for new employees
    const fetchData = async () => {
      try {
        // Replace 'your-backend-api-endpoint' with the actual API endpoint
        const response = await fetch('your-backend-api-endpoint-for-new-employees');
        const data = await response.json();
        setNewEmployeeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="new-employee-table-container">
      {/* CustomNavbar outside the container */}
      <CustomNavbar />
      <div className="content-container">
        <h2>New Employee Table</h2>
        <Table striped bordered hover className="custom-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact Number</th>
              <th>Category</th>
              <th>Dates</th>
            </tr>
          </thead>
          <tbody>
            {newEmployeeData.map((newEmployee) => (
              <tr key={newEmployee.id}>
                <td>{newEmployee.name}</td>
                <td>{newEmployee.contactNumber}</td>
                <td>{newEmployee.category}</td>
                <td>{newEmployee.dates}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default NewEmployeeTable;
