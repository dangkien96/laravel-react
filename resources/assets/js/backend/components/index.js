import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryComponent from "./Content/CategoryComponent"
import UserComponent from "./Content/UserComponent"

export default () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/laravel-react/admin/users' component={UserComponent} />
                    <Route exact path='/laravel-react/admin/categories' component={CategoryComponent} />
                </Switch>
            </div>
        </Router>
    )
}