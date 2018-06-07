import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryComponent from "./Content/CategoryComponent"
import UserComponent from "./Content/UserComponent"
import LoginComponent from "./Content/LoginComponent"
import URL from "../configs/url"

export default () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path= { URL.URL_ROUTER_ADMIN + 'users' } component={UserComponent} />
                    <Route exact path= { URL.URL_ROUTER_ADMIN + 'categories' } component={CategoryComponent} />
                    <Route exact path= { URL.URL_ROUTER_ADMIN + 'login' } component={LoginComponent} />
                </Switch>
            </div>
        </Router>
    )
}