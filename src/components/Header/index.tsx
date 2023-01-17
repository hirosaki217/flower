import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import userIcon from '../../assets/images/user-solid1.png';
import cartIcon from '../../assets/images/cartIcon.png';
const index = () => {
    return (
        <div className="header d-flex">
            <nav className="container header__nav navbar navbar-expand-lg navbar-light ">
                <div className="navbar-logo">
                    <a className="navbar-brand" href="/">
                        <h3>
                            <span style={{ color: '#FF8F52' }}>Flower</span> Shop
                        </h3>
                    </a>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="header__nav-ul navbar-nav">
                        <li className="header__nav-li nav-item active">
                            <Link className="header__nav-link btn nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="header__nav-li nav-item">
                            <Link className="header__nav-link btn nav-link" to="/shop">
                                Shop
                            </Link>
                        </li>
                        <li className="header__nav-li nav-item">
                            <Link className="header__nav-link btn nav-link" to="/blog">
                                Blog
                            </Link>
                        </li>
                        <li className="header__nav-li nav-item">
                            <Link className="header__nav-link btn nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar__user">
                    <a href="/account" className="btn">
                        <img className="icon-user" src={userIcon} alt="user" />
                    </a>
                    <a href="/cart" className="btn">
                        <img className="icon-cart" src={cartIcon} alt="cart" />
                    </a>
                </div>
            </nav>
        </div>

        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <a className="navbar-brand" href="/">
        //         Navbar
        //     </a>
        //     <button
        //         className="navbar-toggler"
        //         type="button"
        //         data-toggle="collapse"
        //         data-target="#navbarNav"
        //         aria-controls="navbarNav"
        //         aria-expanded="false"
        //         aria-label="Toggle navigation"
        //     >
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNav">
        //         <ul className="navbar-nav">
        //             <li className="nav-item active">
        //                 <a className="nav-link" href="/">
        //                     Home <span className="sr-only">(current)</span>
        //                 </a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="/">
        //                     Features
        //                 </a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link" href="/">
        //                     Pricing
        //                 </a>
        //             </li>
        //             <li className="nav-item">
        //                 <a className="nav-link disabled" href="/">
        //                     Disabled
        //                 </a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
    );
};

export default index;
