import React from 'react';
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className='d-flex justify-contact-center align-item-center m-5 gap-5'>
            <div className='p-3 border border-lg mt-5 blog-dsn'>
                <h1>What is context API?</h1>
                <p>Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component: class App extends React.</p>
            </div>
            <div className='p-3 border border-lg mt-5 blog-dsn'>
                <h1>What is Semantic tag?</h1>
                <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as 'header' , 'footer' and 'article' are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
            </div>
        </div>
    );
};

export default Blogs;