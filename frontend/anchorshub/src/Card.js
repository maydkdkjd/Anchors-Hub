import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Jobs = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://apis.camillerakoto.fr/fakejobs/jobs")
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, []);

    return (
        <Row xs={1} md={3} className="g-4">
            {data.map((job, index) => (
                <Col key={index}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={job.logo} />
                        <Card.Body>
                            <Card.Title>{job.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <a href="#" className="btn btn-primary">Apply</a>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Jobs;
