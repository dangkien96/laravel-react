import React, { Component } from "react"
import MenuComponent from "./MenuComponent"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"

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