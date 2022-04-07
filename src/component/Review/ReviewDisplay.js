import React from 'react';
import { Card } from 'react-bootstrap';
import "../Review/Review.css";

const reviewDisplay = ({ review }) => {
    const { name, img, ratings, comment } = review;
    return (
        <div className='grid'>
            <Card className=' col-size container overflow-hidden'>
                <Card.Img className='img-size' variant="top" src={img} />
                <Card.Body className='card-details'>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Rating: {ratings}</Card.Subtitle>
                    <Card.Text>
                        {comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default reviewDisplay;