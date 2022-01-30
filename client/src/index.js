import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import postsReducer from './reducers/posts';
import './dist/index.css';

// const store = createStore(postsReducer, compose(applyMiddleware(thunk)));
const store = createStore(postsReducer);
ReactDOM.render(
    <Provider store = {store}>
        <BrowserRouter >
            <Main title = " Hou's Porfolio Website"/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
