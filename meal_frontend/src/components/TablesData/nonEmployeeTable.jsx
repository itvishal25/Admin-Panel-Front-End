import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/style.css'
import withNavbar from '../HOC/withNavbar';


const NonEmployeeTable = () => {
  const [nonEmployeeData, setNonEmployeeData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API endpoint for non-employees
    const fetchData = async () => {
      try {
        // Replace 'your-backend-api-endpoint' with the actual API endpoint
        const response = await fetch('your-backend-api-endpoint-for-non-employees');
        const data = await response.json();
        setNonEmployeeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="non-employee-table-container">
      <h2>Non-Employee Table</h2>
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
          {nonEmployeeData.map((nonEmployee) => (
            <tr key={nonEmployee.id}>
              <td>{nonEmployee.name}</td>
              <td>{nonEmployee.contactNumber}</td>
              <td>{nonEmployee.category}</td>
              <td>{nonEmployee.dates}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default withNavbar(NonEmployeeTable);
