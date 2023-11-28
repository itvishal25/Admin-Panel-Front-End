// Navbar.jsx
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBootstrap from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../images/logo1.png"; // Replace with the actual path to your logo
import "bootstrap/dist/css/bootstrap.min.css";
import './navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
  };

  return (
    <>
      <NavbarBootstrap expand="lg" className="bg-dark" > {/* Use bg-dark for a dark blue background */}
        <Container>
          <NavbarBootstrap.Brand
            as={Link}
            to="/"
            onClick={() => setActiveLink("/")}
            style={{ display: "flex", alignItems: "center", color: "#fff" }}
          >
            <img
              src={logo}
              alt="Logo"
              height="60" // Adjust the height as needed
              className="d-inline-block align-top"
              style={{ marginRight: "10px" }} // Add spacing between the logo and text
            />
            <h2 className="d-inline-block align-text-top" style={{color: "white"}}>Meal Facility</h2>
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="basic-navbar-nav" />
          <NavbarBootstrap.Collapse id="basic-navbar-nav">
            <Nav
              activeKey={activeLink}
              onSelect={handleSelect}
              className="me-auto"
            >
              <Nav.Link style={{color:"white"}}
                as={Link}
                to="/calendar"
                eventKey="/"
                onClick={() => setActiveLink("/")}
              >
                Home
              </Nav.Link> 
              <Nav.Link style={{color:"white"}}
                as={Link}
                to="/employees"
                eventKey="/employees"
                onClick={() => setActiveLink("/Employees")}
              >
                Employees
              </Nav.Link>
              <Nav.Link style={{color:"white"}}
                as={Link}
                to="/NonEmployees"
                eventKey="/nonEmployees"
                onClick={() => setActiveLink("/Non Employees")}
              >
               Non Employees
              </Nav.Link>
              <Nav.Link style={{color:"white"}}
                as={Link}
                to="/NewEmp"
                eventKey="/newEmp"
                onClick={() => setActiveLink("/employees")}
              >
               Add Employees
              </Nav.Link>
            </Nav>
            <Nav>
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </>
  );
};

export default Navbar;
