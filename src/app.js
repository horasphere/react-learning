import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router, hashHistory } from 'react-router'

import createStore from 'createStore';
import routes from './routes';


import 'bootstrap/less/bootstrap.less'

module.exports = (options) => {
    const initialState = {};
    const store = createStore(initialState);

    ReactDOM.render(
        <Provider store={store}>
            <Router history={hashHistory} routes={routes} />
        </Provider>,
        document.getElementById(options.rootId)
    )
}