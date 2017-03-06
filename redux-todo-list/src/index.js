import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';
import '../styles/scss/style.scss';


const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

store.subscribe( () => {
    console.log(store.getState());
});

ReactDOM
    .render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('main')
    );