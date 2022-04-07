import React, { useEffect, useState } from 'react';
import ReviewDisplay from './ReviewDisplay';
// import { useNavigate } from 'react-router-dom';

const Review = () => {
    const [mainReviews , setReviews] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/mamaruf04/mockjson/profile')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div>
                {
                    mainReviews.map((review,id)=><ReviewDisplay review={review} key={id}> </ReviewDisplay>)
                }
            </div>
        </div>
    );
};

export default Review;