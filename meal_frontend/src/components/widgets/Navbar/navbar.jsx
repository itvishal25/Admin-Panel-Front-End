// CustomNavbar.js

import React, { useState } from "react";
import { Container, Nav, Navbar, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo-white.svg";
import bellIcon from "../../images/211694_bell_icon.svg";
// import userIcon from "../../images/admin.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css"; // Import the CSS file

const CustomNavbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const handleDrawerShow = () => setShowDrawer(true);
  const handleDrawerClose = () => setShowDrawer(false);

  const handleLogout = () => {
    console.log("Logout logic goes here");
    handleDrawerClose();
  };

  return (
    <>
      <Navbar expand="lg" className="navbar" >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="navbar-brand">
            <img
              src={logo}
              alt="Logo"
              height="60"
              className="d-inline-block align-top"
            />
            <h2 className="d-inline-block align-text-top">Meal Facility</h2>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="Toggler-basic"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/calendar" className="nav-link">
                Calendar
              </Nav.Link>
              <Nav.Link as={Link} to="/bookingList" className="nav-link">
                Booking List
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <img
                  className="bellIcon"
                  src={bellIcon}
                  alt="Notification Bell"
                />
              </Nav.Link>
              <Nav.Link href="#" onClick={handleDrawerShow}>

                <span className="user-name">Admin</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Drawer Modal */}
      <Modal show={showDrawer} onHide={handleDrawerClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Choose an option:</p>
          <Button variant="outline-primary" onClick={handleLogout}>
            <Link to="/login">Logout</Link>
          </Button>
          <Button variant="link" onClick={handleDrawerClose}>
            <Link to="/forgotpassword">Forgot Password</Link>
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CustomNavbar;
