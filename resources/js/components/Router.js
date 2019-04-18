import React, { Component } from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from '../Route/Home';
import Board from '../Route/Board';
import Header from './Header';

export default () => (
    <Router>
        <Header />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/board' exact component={Board} />
            <Redirect from='*' to='/' />
        </Switch>
    </Router>
);
