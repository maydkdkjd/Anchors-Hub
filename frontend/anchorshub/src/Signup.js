import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Signup = () => {
    return (
        <Container>
            <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Col md={6} className="text-left">
                    <h1>Sign Up</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Button variant="primary" className="w-50 mb-3" type="submit">
                            Get OTP in your mail
                        </Button>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>OTP</Form.Label>
                            <Form.Control type="password" placeholder="Enter OTP" />
                        </Form.Group>

                        <Button variant="primary" className="w-50" type="submit">
                            Verify and Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
