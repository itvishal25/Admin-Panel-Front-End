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
          <Col xs={12} sm={8} md={4}>
            <div className="text-center" style={{ display: 'flex', flexDirection: 'column' }}>
              <img src={Logo} alt="Logo" style={{ width: '80px' }} />
              <h2 style={{ color: 'white' }}>Forgot Password</h2>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleResetPassword}
              >
                <Form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{ color: 'white' }}>
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
