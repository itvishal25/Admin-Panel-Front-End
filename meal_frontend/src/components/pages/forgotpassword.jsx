// ForgotPassword.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bg from '../images/about-us.jpeg';
import Logo from '../images/Logo.png'; // Replace with your actual logo path

const ForgotPassword = () => {
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleResetPassword = async (values) => {
    try {
      // Logic to send reset password link to the provided email address
      // This is where you would make an API call to your backend to handle the password reset process
      console.log(`Reset password link sent to ${values.email}`);
    } catch (error) {
      console.error('Error sending reset password link:', error);
    }
  };

  return (
    <div
      style={{
        background: `url(${Bg})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} sm={8} md={6}>
            <div
              className="text-center"
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px',
                borderRadius: '10px',
                background: 'rgba(255, 255, 255, 0.8)',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
                <img src={Logo} alt="Logo" style={{ width: '80px', marginRight: '20px' }} />
                <div>
                  <h2 style={{ color: 'black', marginBottom: '5px' }}>Recover Password</h2>
                  {/* You can add a subtitle here if needed */}
                </div>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleResetPassword}
              >
                <Form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Enter Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
                    />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <Button type="submit" variant="primary" style={{ marginRight: '10px' }}>
                    Submit
                  </Button>
                  <Link to="/login">
                    <Button variant="secondary">Back to Home</Button>
                  </Link>
                </Form>
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgotPassword;
