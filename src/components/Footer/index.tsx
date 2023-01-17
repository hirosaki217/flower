import React from 'react';
import './footer.css';
import LocationIcon from '../../assets/images/location.png';
import AtIcon from '../../assets/images/at.png';
import PhoneIcon from '../../assets/images/phone.png';
const index = () => {
    return (
        <div className="footer">
            <div className="footer__intro">
                <h3>
                    <span style={{ color: '#FF8F52' }}>Flower</span> Shop
                </h3>
                <p>
                    Some random stuff about flower shop and some more info cuz this box had to get fill Some random
                    stuff about flower shop and some more info cuz this box had to get fill Some random stuff about
                    flower shop and some more info cuz this box had to get fill
                </p>
            </div>
            <div className="footer__link">
                <div>
                    <h4>Links</h4>
                    <div className="btn-links">
                        <a href="/home">Home</a>
                    </div>
                    <div className="btn-links">
                        <a href="/shop">Shop</a>
                    </div>
                    <div className="btn-links">
                        <a href="/about">About</a>
                    </div>
                    <div className="btn-links">
                        <a href="/login">Login</a>
                    </div>
                </div>
                <div>
                    <h4>Links</h4>
                    <div className="btn-links">
                        <a href="/home">Home</a>
                    </div>
                    <div className="btn-links">
                        <a href="/shop">Shop</a>
                    </div>
                    <div className="btn-links">
                        <a href="/about">About</a>
                    </div>
                    <div className="btn-links">
                        <a href="/login">Login</a>
                    </div>
                </div>
            </div>
            <div className="footer__contact">
                <h4>Contact</h4>
                <div className="footer__contact-info">
                    <p>
                        <img src={LocationIcon} alt="location" />
                        &nbsp;&nbsp;26985 Brighton Lane, Lake Forest, CA
                    </p>
                    <p>
                        <img src={AtIcon} alt="at" />
                        &nbsp;&nbsp;support@Flowers.com
                    </p>
                    <p>
                        <img src={PhoneIcon} alt="phone" />
                        &nbsp;&nbsp;+1 236 5489
                    </p>
                </div>
            </div>
        </div>
    );
};

export default index;
