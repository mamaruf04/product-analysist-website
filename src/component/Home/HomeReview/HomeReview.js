import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';

const HomeReview = ({ review }) => {
    const { name, img, ratings, comment } = review;
    return (
        // <div className='d-grid '>
        //     <div className="card">
        //         <img className='card-img-top' src={img} alt="" />
        //         <div className="card-body">
        //             <h5 className="card-title">{name}</h5>
        //             <p>Ratting: {ratings}</p>
        //             <p className="card-text">{comment}</p>
        //         </div>
        //     </div>
        // </div>
        <Row xs={1} md={2} className="g-4">
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
    );
};

export default HomeReview;