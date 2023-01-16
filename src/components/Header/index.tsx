import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const index = () => {
    return (
        <div className="header">
            <div>
                <div>
                    <h3>Flower</h3>
                    <h3>Shop</h3>
                </div>
            </div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div></div>
        </div>
    );
};

export default index;
