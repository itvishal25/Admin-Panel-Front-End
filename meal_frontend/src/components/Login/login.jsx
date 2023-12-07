import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { useFormik, Formik } from "formik";
import axios from 'axios';

import backgroundImageB from "../images/loginbg.jpg"; // Make sure to import your background image
import logo from "../images/logo1.png";
import "./login.css";

const Login = () => {
  // const [data, setData] = useState([])
  const handleSubmit = async (form, values) => {
    console.log(form);
    let data = JSON.stringify({
      "userName": form.username,
      "password": form.password
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/user/adminLogin',
      headers: {
        'Content-Type': 'application/json',
        // "Authorization": localStorage.getItem("token")
      },
      data: data
    };
    console.log(form);

    await axios.request(config)
      .then((response) => {
        localStorage.setItem("token", response.data.data);
        window.location.href = "/"
        // setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //get data and show in table
  // useEffect(() => {
  //   getData()
  // })

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //     rememberMe: false,
  //   },
  //   // Validation logic (adjust as needed)
  //   validate: (values) => {
  //     const errors = {};

  //     if (!values.username) {
  //       errors.username = "Required";
  //     }

  //     if (!values.password) {
  //       errors.password = "Required";
  //     }

  //     return errors;
  //   },
  //   onSubmit: (values) => {
  //     // You can add your login logic here
  //     console.log("Form data submitted:", values);
  //   },
  // });

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
                <div className="d-inline-block align-text-top ms-3">
                  <h1 style={{ color: "darkblue", marginBottom: "5px" }}>
                    Meal Facility
                  </h1>
                  {/* You can add a subtitle here if needed */}
                </div>
              </Col>
              {/* Login Form */}
              <Col xs={12} md={{ span: 10, offset: 2 }} className="px-0">
                <h2 className="mb-3" style={{ fontSize: "1.5rem" }}>
                  Login to your account
                </h2>
                <Formik 
                  onSubmit={handleSubmit}
                  validate={values => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = 'Required';
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                      errors.email = 'Invalid email address';
                    }
                    return errors;
                  }}
                  initialValues={{ username: '', password: '' }}
                >
                  {({ handleChange, handleSubmit, handleBlur, values, errors }) => (
                    <form onSubmit={handleSubmit}>
                      {/* Username Field */}
                      <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="username"
                          name="username"
                          onChange={(e) => {
                            console.log(e);
                            handleChange(e)
                          }}
                        />
                      </Form.Group>

                      {/* Password Field */}
                      <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="password"
                          name="password"
                          onChange={handleChange}
                        />
                      </Form.Group>

                      {/* Remember Me Checkbox */}
                      <Form.Group controlId="rememberMe" className="mb-3">
                        <Form.Check
                          type="checkbox"
                          label="Remember me"
                        />
                      </Form.Group>

                      {/* Forgot Password Link */}
                      <Form.Group controlId="forgetPassword" className="mb-3">
                        <Link to="/forgotpassword">Forgot Password?</Link>
                      </Form.Group>

                      {/* Login Button */}
                      <Button onClick={handleSubmit}
                        variant="primary"
                        type="submit"
                        className="mt-3"
                        style={{ backgroundColor: "blue" }}
                      >

                        Login
                      </Button>
                    </form>
                  )}

                </Formik>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
