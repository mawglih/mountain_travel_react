import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';


const Navigation = () => {

    return(
        <div className="nav">
            <div><Link to="/home">Home</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact</Link></div>
        </div>
    )
}


export default Navigation;