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
            </div>
            <FooterComponent/>
        </div>
    )
}