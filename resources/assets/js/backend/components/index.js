import React, { Component } from "react"
import MenuComponent from "./Layout/MenuComponent"
import FooterComponent from "./Layout/FooterComponent"
import HeaderComponent from "./Layout/HeaderComponent"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryComponent from "./Content/CategoryComponent"
import UserComponent from "./Content/UserComponent"

export default () => {
    return (
        <Router>
            <div id="container" className="effect aside-float aside-bright mainnav-lg">
                <HeaderComponent/>
                <div className="boxed">
                    <MenuComponent />
                    <div id="content-container">
                        <Switch>
                            <Route exact path='/laravel-react/users' component={UserComponent} />
                            <Route path='/laravel-react/categories' component={CategoryComponent} />
                        </Switch>
                    </div>
                </div>
                <FooterComponent/>
            </div>
        </Router>
    )
}