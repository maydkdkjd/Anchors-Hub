import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ResumeCreator = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [projects, setProjects] = useState('');
    const [certifications, setCertifications] = useState('');
    const [education, setEducation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', phoneNumber, workExperience, projects, certifications, education);
    }

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col md={6}>
                    <h1 className="text-center mb-4">Make Profile</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter phone number" 
                                value={phoneNumber} 
                                onChange={(e) => setPhoneNumber(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formWorkExperience">
                            <Form.Label>Work Experience</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Enter work experience" 
                                value={workExperience} 
                                onChange={(e) => setWorkExperience(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formProjects">
                            <Form.Label>Projects</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Enter projects" 
                                value={projects} 
                                onChange={(e) => setProjects(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formCertifications">
                            <Form.Label>Certifications</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter certifications" 
                                value={certifications} 
                                onChange={(e) => setCertifications(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formEducation">
                            <Form.Label>Education</Form.Label>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                placeholder="Enter education details" 
                                value={education} 
                                onChange={(e) => setEducation(e.target.value)} 
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit Profile
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ResumeCreator;
