import React from 'react';
import Navigation from './navigation';
import * as route from '../constants/routes';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="header">
            <h2 className="header__title"><Link to="routes.HOME">Iceland Mountain Travel</Link></h2>
            <Navigation className="header_nav"/>
        </div>
    )
}