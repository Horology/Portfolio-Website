import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import postsReducer from './reducers/posts';
import './dist/index.css';
import {HashRouter} from 'react-router-dom';
const store = createStore(postsReducer);
ReactDOM.render(
    <Provider store = {store}>
        <HashRouter hashType = {"noslash"} >
            <Main title = " Hou's Porfolio Website"/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
