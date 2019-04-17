import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

export default withRouter(({ location: { pathname } }) => (
    <div>
        <ul>
            <li current={pathname === '/'}>
                <Link to='/'>Home</Link>
            </li>
        </ul>
    </div>
));
