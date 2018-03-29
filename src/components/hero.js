import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
        <section className="hero">
            <div className="hero__content">
                <h2 className="hero__title">Mountain trip around Iceland</h2>
                <h3 className="hero__subtitle">Unforgettable trip of the lifetime</h3>
                <button className="hero__button"><Link to="/contact">Contact Us</Link></button>
            </div>
            <div className="hero__image"></div>
        </section>
        
    </div>
    );
   
}