import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class UserComponent extends Component {
    render() {
        return (
            <div> 
                <div id="page-head">
                    <div id="page-title">
                        <h1 className="page-header text-overflow">Buttons</h1>
                    </div>
                    <ol className="breadcrumb">
					<li><a href="#"><i className="demo-pli-home"></i></a></li>
					<li><a href="#">UI</a></li>
					<li className="active">Buttons</li>
                    </ol>
                </div>
            </div>
        );
    }
}



