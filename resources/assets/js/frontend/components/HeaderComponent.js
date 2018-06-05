import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class HeaderComponent extends Component {
    render() {
        return (
            <header id="navbar">
                <div id="navbar-container" className="boxed">
                    {/*Brand logo & name*/}
                    {/*================================*/}
                    <div className="navbar-header">
                        <a href="index.html" className="navbar-brand">
                            <img src={baseUrl + "/Nifty/img/logo.png"} alt="Nifty Logo" className="brand-icon" />
                            <div className="brand-title">
                                <span className="brand-text">Nifty</span>
                            </div>
                        </a>
                    </div>
                    {/*================================*/}
                    {/*End brand logo & name*/}
                    {/*Navbar Dropdown*/}
                    {/*================================*/}
                    <div className="navbar-content">
                        <ul className="nav navbar-top-links">
                            {/*Navigation toogle button*/}
                            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            <li className="tgl-menu-btn">
                                <a className="mainnav-toggle" href="#">
                                    <i className="demo-pli-list-view" />
                                </a>
                            </li>
                            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            {/*End Navigation toogle button*/}
                            {/*Search*/}
                            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            <li>
                                <div className="custom-search-form">
                                    <label className="btn btn-trans" htmlFor="search-input" data-toggle="collapse" data-target="#nav-searchbox">
                                        <i className="demo-pli-magnifi-glass" />
                                    </label>
                                    <form>
                                        <div className="search-container collapse" id="nav-searchbox">
                                            <input id="search-input" type="text" className="form-control" placeholder="Type for search..." />
                                        </div>
                                    </form>
                                </div>
                            </li>
                            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            {/*End Search*/}
                        </ul>
                        <ul className="nav navbar-top-links">
                            
                            
                            {/*User dropdown*/}
                            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            <li id="dropdown-user" className="dropdown">
                                <a href="#" data-toggle="dropdown" className="dropdown-toggle text-right">
                                    <span className="ic-user pull-right">
                                        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                                        {/*You can use an image instead of an icon.*/}
                                        {/*<img class="img-circle img-user media-object" src="img/profile-photos/1.png" alt="Profile Picture">*/}
                                        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                                        <i className="demo-pli-male" />
                                    </span>
                                    {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                                    {/*You can also display a user name in the navbar.*/}
                                    {/*<div class="username hidden-xs">Aaron Chavez</div>*/}
                                    {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                                </a>
                                <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right panel-default">
                                    <ul className="head-list">
                                        <li>
                                            <a href="#"><i className="demo-pli-male icon-lg icon-fw" /> Profile</a>
                                        </li>
                                        <li>
                                            <a href="#"><span className="badge badge-danger pull-right">9</span><i className="demo-pli-mail icon-lg icon-fw" /> Messages</a>
                                        </li>
                                        <li>
                                            <a href="#"><span className="label label-success pull-right">New</span><i className="demo-pli-gear icon-lg icon-fw" /> Settings</a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="demo-pli-computer-secure icon-lg icon-fw" /> Lock screen</a>
                                        </li>
                                        <li>
                                            <a href="pages-login.html"><i className="demo-pli-unlock icon-lg icon-fw" /> Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
                            {/*End user dropdown*/}
                           
                        </ul>
                    </div>
                    {/*================================*/}
                    {/*End Navbar Dropdown*/}
                </div>
            </header>
        );
    }
}

