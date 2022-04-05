import React from 'react';
import { useNavigate } from 'react-router-dom';

const Review = (props) => {
    // const navigate = useNavigate();
    // const { name, img, ratings, id, comment } = review;
    // console.log(name)
    return (
        <div>
            <div>
                <div>
                    <h3>review area: {props.id}</h3>
                </div>
            </div>
            
        </div>
    );
};

export default Review;