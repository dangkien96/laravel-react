require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from "react-redux";
import App from "./backend/components";
import store from "./backend/stores";
import rootSaga from "./backend/sagas";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("example")
)