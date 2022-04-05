import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';


const Home = () => {
    const [reviews, setReviews] = useState([]);
    // const [review, setReview] = useState();

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/mamaruf04/mockjson/profile')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    // for (const sinReview of reviews) {
    //     setReview(sinReview); 
    // }

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
                {/* {reviews.map((review, id) => (
                    <Review key={id} review={review} />
                ))} */}
                <Review id='fkfkfk'></Review>
                {/* <Review review={review}>
                    <button onClick={()=>navigate('/review')}>See all reviews </button>
                <Review/> */}
            </div>
        </div>
    );
};

export default Home;