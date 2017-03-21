import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import debug from 'debug'

import reducer from './store'

const log = debug('debug:store')

const logger = store => next => action => {
    log('dispatch', action);
    return next(action)
}


export default function(initialState) {
    const store = createStore(reducer, initialState, applyMiddleware(logger, thunk))

    store.subscribe(() =>
        log('store changed', store.getState())
    );

    return store;
}
