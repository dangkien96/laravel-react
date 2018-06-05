import React, { Component } from "react";
import MenuComponent from "./MenuComponent";
import FooterComponent from "./FooterComponent"

export default () => {
    return (
        <div id="container" className="effect aside-float aside-bright mainnav-lg">
            <div className="boxed">
                <MenuComponent />
            </div>
            <FooterComponent/>
        </div>
    )
}