import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import configureStore from './store';
import Root from './containers/Root'
import reducers from './reducers';
import Routes from './routes';

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}
render(Routes);

