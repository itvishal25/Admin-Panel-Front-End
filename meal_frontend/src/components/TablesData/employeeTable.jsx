import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/style.css'
import withNavbar from '../HOC/withNavbar';

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('your-backend-api-endpoint');
        const data = await response.json();
        setEmployeeData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="employee-table-container">
      <h2>Employee Table</h2>
      <Table striped bordered hover className="custom-table">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Name</th>
            <th>Department Name</th>
            <th>Meal Type</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.employeeId}</td>
              <td>{employee.name}</td>
              <td>{employee.departmentName}</td>
              <td>{employee.mealType}</td>
              <td>{employee.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default withNavbar(EmployeeTable);
