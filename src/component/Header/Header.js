import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <a href="/home">HOME</a>
            <a href="/reviews">REVIEWS</a>
            <a href="/dashboard">DASHBOARD</a>
            <a href="/blogs">BLOGS</a>
            <a href="/about">ABOUT</a>
        </nav>
    );
};

export default Header;