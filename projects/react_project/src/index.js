import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {BrowserRouter, NavLink, Route, Switch} from 'react-router-dom';

import TradingInterface from './components/TradingInterface';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <NavLink to="/">Stock</NavLink>
            <NavLink to="/futures">Futures</NavLink>
            <NavLink to="/margin">Margin</NavLink>
            <Switch>
                <Route path="/" exact component={TradingInterface}/>
                <Route path="/futures" exact component={TradingInterface}/>
                <Route path="/margin" exact component={TradingInterface}/>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
