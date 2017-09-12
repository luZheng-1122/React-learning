import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/index'
import promise from 'redux-promise'; //promise is a middleware

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, applyMiddleware(promise));

    if(module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index');
        store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}