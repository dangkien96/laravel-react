import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class MenuComponent extends Component {
    render() {
        return (
            <nav id = "mainnav-container" >
                <div id="mainnav">
                    <div id="mainnav-menu-wrap">
                        <div className="nano">
                            <div className="nano-content">
                                <div id="mainnav-profile" className="mainnav-profile">
                                    <div className="profile-wrap text-center">
                                        <div className="pad-btm">
                                            <img className="img-circle img-md" src= {baseUrl + "/Nifty/img/profile-photos/1.png"} alt="Profile Picture" />
                                        </div>
                                        <a href="#profile-nav" className="box-block" data-toggle="collapse" aria-expanded="false">
                                            <span className="pull-right dropdown-toggle">
                                                <i className="dropdown-caret" />
                                            </span>
                                            <p className="mnp-name">Đặng Trung Kiên</p>
                                            <span className="mnp-desc">occhodat@gmail.com</span>
                                        </a>
                                    </div>
                                    <div id="profile-nav" className="collapse list-group bg-trans">
                                        <a href="#" className="list-group-item">
                                            <i className="demo-pli-male icon-lg icon-fw" /> Thông tin
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <i className="demo-pli-gear icon-lg icon-fw" /> Cài đặt
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <i className="demo-pli-information icon-lg icon-fw" /> Hỗ tợ
                                        </a>
                                        <a href="#" className="list-group-item">
                                            <i className="demo-pli-unlock icon-lg icon-fw" /> Đăng xuất
                                        </a>
                                    </div>
                                </div>
                                <ul id="mainnav-menu" className="list-group">
                                    <li className="list-divider" />
                                    <li className="list-header">Quản lí</li>
                                    <li>
                                        <a href="#">
                                            <i className="demo-pli-male" />
                                            <span className="menu-title">Người dùng</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="mainnav-widget">
                                    <div className="show-small">
                                        <a href="#" data-toggle="menu-widget" data-target="#demo-wg-server">
                                            <i className="demo-pli-monitor-2" />
                                        </a>
                                    </div>
                                    <div id="demo-wg-server" className="hide-small mainnav-widget-content">
                                        <ul className="list-group">
                                            <li className="list-header pad-no mar-ver">Thông tin máy chủ</li>
                                            <li className="mar-btm">
                                                <span className="label label-primary pull-right">15%</span>
                                                <p>CPU Usage</p>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar progress-bar-primary" style={{ width: '15%' }}>
                                                        <span className="sr-only">15%</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mar-btm">
                                                <span className="label label-purple pull-right">75%</span>
                                                <p>Bandwidth</p>
                                                <div className="progress progress-sm">
                                                    <div className="progress-bar progress-bar-purple" style={{ width: '75%' }}>
                                                        <span className="sr-only">75%</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="pad-ver"><a href="#" className="btn btn-success btn-bock">View Details</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        );
    }
}

