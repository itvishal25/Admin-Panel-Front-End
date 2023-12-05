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
    email: Yup.string().email("Invalid email address").required("Email is required"),
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
          <Col md={7} className="Bg-SignUp"></Col>

          {/* Section B */}
          <Col md={5} className="Register-Container">
            <Row>
              {/* Logo and Title */}
              <Col xs={12} md={{ span: 8, offset: 3 }} className="px-0 Logo-Title">
                <img alt="Logo" height="80" className="logo" />
                <h1 className="d-inline-block align-text-top ms-3">Meal Facility</h1>
              </Col>

              {/* Registration Form */}
              <Col xs={10} md={{ span: 6, offset: 3 }} className="Registration-Form">
                <h2 className="mb-3">Sign up for an account</h2>
                <p>Enter your credentials to access your account</p>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                  <Form>
                    <Row className="mb-3">
                      <Col>
                        <div className="mb-2 Form-Field">
                          <label htmlFor="firstName">First Name</label>
                          <Field type="text" id="firstName" name="firstName" className="form-control" />
                          <ErrorMessage name="firstName" component="div" className="text-danger" />
                        </div>
                      </Col>
                      <Col>
                        <div className="mb-2 Form-Field">
                          <label htmlFor="lastName">Last Name</label>
                          <Field type="text" id="lastName" name="lastName" className="form-control" />
                          <ErrorMessage name="lastName" component="div" className="text-danger" />
                        </div>
                      </Col>
                    </Row>

                    <div className="mb-2 Form-Field">
                      <label htmlFor="email">Email</label>
                      <Field type="email" id="email" name="email" className="form-control" />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    <div className="mb-2 Form-Field">
                      <label htmlFor="employeeId">Employee ID</label>
                      <Field type="text" id="employeeId" name="employeeId" className="form-control" />
                      <ErrorMessage name="employeeId" component="div" className="text-danger" />
                    </div>

                    <div className="mb-2 Form-Field">
                      <label htmlFor="departmentName">Department Name</label>
                      <Field type="text" id="departmentName" name="departmentName" className="form-control" />
                      <ErrorMessage name="departmentName" component="div" className="text-danger" />
                    </div>

                    <Button variant="primary" type="submit" className="mt-3 Submit-Button">
                      <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
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
