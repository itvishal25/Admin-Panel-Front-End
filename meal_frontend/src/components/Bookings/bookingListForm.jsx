import React, { useState } from "react";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./bookingListForm.css";
import withNavbar from "../HOC/withNavbar";

const BookingListForm = () => {
  const [formData, setFormData] = useState({
    category: "",
    mealType: "",
    weekend: false,
    date: "",
    search: "",
  });
  const [action, setAction] = useState("employee");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <>
      <Row className="justify-content-between mt-5" style={{marginTop:'20px'}}>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formCategory">
              <Form.Label>Select Category:</Form.Label>
              <div class="radio-group">
                <input
                  type="radio"
                  id="employee"
                  name="category"
                  value="employee"
                  checked={action === "Employee"}
                  onChange={() => setAction("Employee")}
                />
                <label for="employee">Employee</label>

                <input
                  type="radio"
                  id="nonEmployee"
                  name="category"
                  value="nonEmployee"
                  checked={action === "Non Employee"}
                  onChange={() => setAction("Non Employee")}
                />
                <label for="nonEmployee">Non Employee</label>

                <input
                  type="radio"
                  id="customBooking"
                  name="category"
                  value="customBooking"
                  checked={action === "Custom Booking"}
                  onChange={() => setAction("Custom Booking")}
                />
                <label for="customBooking">Custom Booking</label>
              </div>
            </Form.Group>
            {action === "Employee" ? (
              <Form.Group controlId="formCategory">
                <Form.Label>Meal Type:</Form.Label>
                <div class="radio-group">
                  <input
                    type="radio"
                    id="lunch"
                    name="mealType"
                    value="lunch"
                  />
                  <label for="lunch">Lunch</label>

                  <input
                    type="radio"
                    id="dinner"
                    name="mealType"
                    value="dinner"
                  />
                  <label for="dinner">Dinner</label>
                </div>
              </Form.Group>
            ) : (
              <div></div>
            )}

            {action === "Employee" ? (
              <Form.Group
                controlId="formCategory"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <input type="checkbox" id="weekend" name="weekend" />
                <Form.Label>weekend:</Form.Label>
              </Form.Group>
            ) : (
              <div></div>
            )}

            {action === "Employee" ? (
              <div></div>
            ) : (
              <Form.Group controlId="formCategory">
                <Form.Label>Notes:</Form.Label>
                <textarea name="Notes" id="" cols="30" rows="0"></textarea>
              </Form.Group>
            )}

            {action === "Custom Booking" ? (
              <Form.Group controlId="formCategory">
                <Form.Label>Booking Category Name:</Form.Label>
                <input type="text" id="count" name="Count" value="Buffer" />
              </Form.Group>
            ) : (
              <div></div>
            )}
            {action === "Employee" ? (
              <div></div>
            ) : (
              <Form.Group controlId="formCategory">
                <Form.Label>Booking Count:</Form.Label>
                <input type="number" id="count" name="Count" value="100" />
              </Form.Group>
            )}

            <Form.Group controlId="formCategory">
              <Form.Label>Date</Form.Label>
              <input
                type="date"
                id="date"
                name="search"
                style={{ width: "100%" }}
              />
            </Form.Group>

            {action === "Employee" ? (
              <Form.Group controlId="formCategory">
                <Form.Label>Search</Form.Label>
                <input
                  type="search"
                  id="date"
                  name="date"
                  style={{ width: "100%" }}
                />
              </Form.Group>
            ) : (
              <div></div>
            )}

            {action === "Employee" ? (
              <Form.Group controlId="formCategory">
                <Form.Label>Select Employee</Form.Label>
                <table>
                  <tr>
                    <th>
                      <input type="checkbox" name="" id="" />
                    </th>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                    <th>Department</th>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>2001</td>
                    <td>Dhruvesh</td>
                    <td>MERN</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>2002</td>
                    <td>Meshwa</td>
                    <td>MERN</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>2003</td>
                    <td>Vishal</td>
                    <td>MERN</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>2004</td>
                    <td>Kinjal</td>
                    <td>MERN</td>
                  </tr>
                </table>
              </Form.Group>
            ) : (
              <div></div>
            )}

            <div className="button-group">
              <Button type="submit" variant="primary">
                Submit
              </Button>
              <Button type="button" variant="secondary">
                Back
              </Button>
            </div>
          </Form>
        </Col>

        <Col md={6}>
          {action === "Employee" ? (
            <div
              className="tableData"
              style={{ width: "100%", height: "100%" }}
            >
              <Table
                striped
                bordered
                hover
                style={{
                  width: "700px",
                  height: "100%",
                  border: "3px solid #ddd",
                }}
                className="bordered"
              >
                <tr>
                  <th>EID</th>
                  <th>EName</th>
                  <th>Department</th>
                  <th>Total Meals Booked</th>
                  <th>Dates</th>
                </tr>
                <tr>
                  <td>2001</td>
                  <td>Dhruvesh</td>
                  <td>MERN</td>
                  <td>20</td>
                  <td>01,04,05,09,10,15,16,18,20,23</td>
                </tr>
                <tr>
                  <td>2002</td>
                  <td>Meshwa</td>
                  <td>MERN</td>
                  <td>20</td>
                  <td>01,04,05,09,10,15,16,18,20,23</td>
                </tr>
                <tr>
                  <td>2003</td>
                  <td>Vishal</td>
                  <td>MERN</td>
                  <td>20</td>
                  <td>01,04,05,09,10,15,16,18,20,23</td>
                </tr>
                <tr>
                  <td>2004</td>
                  <td>Kinjal</td>
                  <td>MERN</td>
                  <td>20</td>
                  <td>01,04,05,09,10,15,16,18,20,23</td>
                </tr>
              </Table>
            </div>
          ) : (
            <div
              className="tableData"
              style={{ width: "100%", height: "100%" }}
            >
              <Table
                striped
                bordered
                hover
                style={{
                  width: "700px",
                  height: "100%",
                  border: "3px solid #ddd",
                }}
                className="bordered"
              >
                <tr>
                  <th width="105px">Category</th>
                  <th>Count</th>
                  <th>Notes</th>
                </tr>
                <tr>
                  <td>Non Employee</td>
                  <td>100</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae, est?
                  </td>
                </tr>
                <tr>
                  <td>Non Employee</td>
                  <td>90</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae, est?
                  </td>
                </tr>
                <tr>
                  <td>Buffer</td>
                  <td>50</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae, est?
                  </td>
                </tr>
                <tr>
                  <td>Buffer</td>
                  <td>40</td>
                  <td>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Repudiandae, est?
                  </td>
                </tr>
              </Table>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};

export default withNavbar(BookingListForm);
