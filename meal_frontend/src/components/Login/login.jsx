import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { useFormik } from "formik";
import backgroundImageB from "../images/loginbg.jpg"; // Make sure to import your background image
import logo from "../images/logo1.png";
import "./login.css";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
    // Validation logic (adjust as needed)
    validate: (values) => {
      const errors = {};

      if (!values.username) {
        errors.username = "Required";
      }

      if (!values.password) {
        errors.password = "Required";
      }

      return errors;
    },
    onSubmit: (values) => {
      // You can add your login logic here
      console.log("Form data submitted:", values);
    },
  });

  return (
    <div>
      <Container fluid>
        <Row>
          {/* Small Right Section */}
          <Col
            md={7}
            className="Bg-SignUp"
            style={{
              backgroundImage: `url(${backgroundImageB})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              padding: "40px",
              imageRendering: "pixelated",
            }}
          ></Col>

          {/* Login Form Section */}
          <Col
            md={4}
            style={{
              height: "100vh",
              padding: "35px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Row>
              {/* Logo and Title */}
              <Col xs={12} className="text-center mb-4">
                {/* Static Image */}
                <Image
                  src={logo} // Replace with the actual path to your image
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
              {/* Login Form */}
              <Col xs={12} md={{ span: 10, offset: 2 }} className="px-0">
                <h2 className="mb-3" style={{ fontSize: "1.5rem" }}>
                  Login to your account
                </h2>
                <Form onSubmit={formik.handleSubmit}>
                  {/* Username Field */}
                  <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="username"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                    {formik.touched.username && formik.errors.username ? (
                      <div className="text-danger">
                        {formik.errors.username}
                      </div>
                    ) : null}
                  </Form.Group>

                  {/* Password Field */}
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-danger">
                        {formik.errors.password}
                      </div>
                    ) : null}
                  </Form.Group>

                  {/* Remember Me Checkbox */}
                  <Form.Group controlId="rememberMe" className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      onChange={formik.handleChange}
                      checked={formik.values.rememberMe}
                    />
                  </Form.Group>

                  {/* Forgot Password Link */}
                  <Form.Group controlId="forgetPassword" className="mb-3">
                    <Link to="/forgotpassword">Forgot Password?</Link>
                  </Form.Group>

                  {/* Login Button */}
                  <Button
                    variant="primary"
                    type="submit"
                    className="mt-3"
                    style={{ backgroundColor: "blue" }}
                  >
                    <Link
                      to="/"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      Login
                    </Link>
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
