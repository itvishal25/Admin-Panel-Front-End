import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Container from "react-bootstrap/Container";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    employeeId: "",
    departmentName: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    employeeId: Yup.string().required("Employee ID is required"),
    departmentName: Yup.string().required("Department Name is required"),
  });

  const onSubmit = (values) => {
    // You can add your registration logic here
    console.log("Form data submitted:", values);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          {/* Section A */}
          <Col
            md={7}
            className="Bg-SignUp"
            style={{
              backgroundColor: "white",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              padding: "40px",
              imageRendering: "pixelated",
            }}
          ></Col>

          {/* Section B */}
          <Col
            md={5}
            style={{
              height: "100vh",
              paddingRight: "25px",
              overflowY: "auto", // Enable vertical scrolling
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              maxHeight: "100vh", // Set a maximum height for the container
            }}
          >
            <Row>
              {/* Logo and Title */}
              <Col xs={12} md={{ span: 8, offset: 3 }} className="px-0">
                <img
                  src="data:image/png;base64,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"
                  alt="Logo"
                  height="80"
                  className="d-inline-block align-text-top"
                />
                <h1
                  className="d-inline-block align-text-top ms-3"
                  style={{ color: "darkblue" }}
                >
                  Meal Facility
                </h1>
              </Col>

              {/* Registration Form */}
              <Col xs={10} md={{ span: 6, offset: 3 }}>
                <h2 className="mb-3" style={{ fontSize: "1.5rem" }}>
                  Sign up for an account
                </h2>
                <p>Enter your credentials to access your account</p>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  <Form>
                    <Row className="mb-3">
                      <Col>
                        <div className="mb-2">
                          <label htmlFor="firstName">First Name</label>
                          <Field
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </Col>
                      <Col>
                        <div className="mb-2">
                          <label htmlFor="lastName">Last Name</label>
                          <Field
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control"
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className="mb-2">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="employeeId">Employee ID</label>
                      <Field
                        type="text"
                        id="employeeId"
                        name="employeeId"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="employeeId"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="departmentName">Department Name</label>
                      <Field
                        type="text"
                        id="departmentName"
                        name="departmentName"
                        className="form-control"
                      />
                      <ErrorMessage
                        name="departmentName"
                        component="div"
                        className="text-danger"
                      />
                    </div>

                    <Button
                      variant="primary"
                      type="submit"
                      className="mt-3"
                      style={{ backgroundColor: "Blue" }}
                    >
                      <Link
                        to="/login"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        SignUp
                      </Link>
                    </Button>
                  </Form>
                </Formik>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
