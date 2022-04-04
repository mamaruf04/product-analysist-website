import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/mamaruf04/mockjson/posts')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <div className='d-flex align-items-center justify-content-center container mt-5'>
                <div>
                    <h1 className='display-4 fw-bold'>Welcome to our <span className='text-info'>Quality Home</span> </h1>
                </div>
                <div className='img-fluid'>
                    <img src="https://cutt.ly/RD5YBua" alt="" />
                </div>
            </div>
            <div>
            <div>
                {reviews.map(review => <Review key={review.id} review={review}></Review>)}
            </div>
        </div>
        </div>
    );
};

export default Home;