import React, { Component } from "react"
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryComponent from "./Content/CategoryComponent"
import UserComponent from "./Content/UserComponent"

export default () => {
    return (
        <Router>
           <UserComponent/>
        </Router>
    )
}