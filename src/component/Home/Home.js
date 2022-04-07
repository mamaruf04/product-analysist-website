import React, { useEffect, useState } from 'react';
import HomeReview from './HomeReview/HomeReview';


const Home = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/mamaruf04/mockjson/profile')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <div>
            <div className='d-flex align-items-center justify-content-center container mt-5'>
                <div>
                    <h1 className='display-4 fw-bold'>Welcome to our <span className='text-info'>Quality Home</span> </h1>
                    <p className='text-muted fs-5'>A product is known as a quality product only when it satisfies various criteria for its functioning for the consumer. In addition to the physical criteria.</p>
                </div>
                <div className='img-fluid'>
                    <img src="https://www.linkpicture.com/q/laptop_3.png" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-center m-4 mb-5 fw-bold'>Customer Review (3)</h1>
            </div>
            <div>
                {
                    // reviews.length && (
                    //     reviews.map((review,id)=><HomeReview review={review} key={id}/>)
                    // )
                    reviews.map((review, id) => <HomeReview review={review} key={id}> </HomeReview>)
                }
            </div>
        </div>
    );
};

export default Home;