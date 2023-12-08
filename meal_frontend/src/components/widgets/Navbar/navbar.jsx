// CustomNavbar.js

import React, { useState } from "react";
import { Container, Nav, Navbar, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiCalendar, BiListUl, BiUser, BiBuilding, BiPlus } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import logo from "../../images/logo-white.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { BsList } from "react-icons/bs";
import PopupBox from '../../pages/buffer'; // Import PopupBox component

const CustomNavbar =  () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [showBufferPopup, setShowBufferPopup] = useState(false); // New state for Buffer Popup

  const handleDrawerShow = () => setShowDrawer(true);
  const handleDrawerClose = () => setShowDrawer(false);

  const handleNotificationModalShow = () => setShowNotificationModal(true);
  const handleNotificationModalClose = () => setShowNotificationModal(false);

  const handleBufferPopupShow = () => setShowBufferPopup(true);
  const handleBufferPopupClose = () => setShowBufferPopup(false);

  const handleLogout = () => {
    console.log("Logout logic goes here");
    handleDrawerClose();
  };

  // Example counts (replace with actual counts)
  const employeesCount = 100;
  const nonEmployeesCount = 50;
  const guestCount = 20;

  return (
    <>
      <Navbar expand="lg" className="navbar">
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
          >
            <BsList className="hamburger-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/calendar" className="nav-link">
                <BiCalendar /> Calendar
              </Nav.Link>
              <Nav.Link as={Link} to="/bookingList" className="nav-link">
                <BiListUl /> Booking List
              </Nav.Link>
              <Nav.Link as={Link} to="/employeeTable" className="nav-link">
                <BiUser /> Employees
              </Nav.Link>
              <Nav.Link as={Link} to="/nonEmployeeTable" className="nav-link">
                <BiBuilding /> Non Employees
              </Nav.Link>
              <Nav.Link as={Link} to="/newBooking" className="nav-link">
                <BiPlus /> Bookings
              </Nav.Link>
              {/* Buffer Section */}
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link"
                onClick={handleBufferPopupShow}
              >
                <BiBuilding /> Buffer
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <IoIosNotifications
                  className="bellIcon"
                  onClick={handleNotificationModalShow}
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

      {/* Notification Modal */}
      <Modal show={showNotificationModal} onHide={handleNotificationModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Employees Count: {employeesCount}</p>
          <p>Non Employees Count: {nonEmployeesCount}</p>
          <p>Guest Count: {guestCount}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleNotificationModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Buffer Popup */}
      <PopupBox show={showBufferPopup} handleClose={handleBufferPopupClose} />
    </>
  );
};

export default CustomNavbar;
