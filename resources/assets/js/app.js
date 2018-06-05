require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from "react-redux";
import App from "./components";
import store from "./stores/index";
import rootSaga from "./sagas";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("example")
)