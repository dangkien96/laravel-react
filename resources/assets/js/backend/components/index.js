import React, { Component } from "react"
import MenuComponent from "./Layout/MenuComponent"
import FooterComponent from "./Layout/FooterComponent"
import HeaderComponent from "./Layout/HeaderComponent"

export default () => {
    return (
        <div id="container" className="effect aside-float aside-bright mainnav-lg">
            <HeaderComponent/>
            <div className="boxed">
                <MenuComponent />
                <Switch>
                    <Route exact path='/react-laravel/user' component={UserContainer} />
                    <Route path='/react-laravel/login' component={LoginComponent} />
                </Switch>
            </div>
            <FooterComponent/>
        </div>
    )
}