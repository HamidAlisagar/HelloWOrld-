import React from 'react';
import {Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <ul>
                <li><Link to="/">HOME </Link></li>
                <li><Link to="/posts">POSTS</Link></li>
              
                
            </ul>
        </header>
    )
}

export default Navbar
