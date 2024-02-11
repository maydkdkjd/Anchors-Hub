import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" className="px-3">Anchors Hub</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/jobs">Jobs</Nav.Link>
                    </Nav>
                    <Nav className="mr-3">
                        <NavDropdown title="Account" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Edit Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid className="mt-5">
                <Row className="justify-content-center">
                    <Col xs={12} className="text-center">
                        <h2>Welcome to the Dashboard</h2>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default NavigationBar;
