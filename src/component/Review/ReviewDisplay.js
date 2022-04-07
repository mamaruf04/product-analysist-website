import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';

const reviewDisplay = ({ review }) => {
    const { name, img, ratings, id, comment } = review;
    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Rating: {ratings}</Card.Subtitle>
                                <Card.Text>
                                    {comment}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default reviewDisplay;