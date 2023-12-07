// PopupBox.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import * as ExcelJS from 'exceljs';

const PopupBox = ({ show, handleClose, employeeCount, nonEmployeeCount, guestCount }) => {
  const data = [
    { type: 'Employee', count: employeeCount },
    { type: 'Non-Employee', count: nonEmployeeCount },
    { type: 'Guest', count: guestCount },
  ];

  const columns = [
    { dataField: 'type', text: 'Type' },
    { dataField: 'count', text: 'Count' },
  ];

  const handleDownload = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Employee Data');

    // Add headers
    worksheet.columns = columns.map((col) => ({ header: col.text, key: col.dataField }));

    // Add data
    data.forEach((row) => worksheet.addRow(row));

    // Create a blob and trigger download
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'employee_data.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Employee Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-bordered">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.dataField}>{col.text}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col) => (
                  <td key={`${rowIndex}-${col.dataField}`}>{row[col.dataField]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-end mt-2">
          <Button variant="primary" onClick={handleDownload}>
            Download
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PopupBox;
