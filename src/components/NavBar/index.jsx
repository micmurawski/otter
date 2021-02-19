import React from 'react';
import './style.scss';

class Btn extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <i className={this.props.icon + " btn"} onClick={this.props.onClick}></i>;
    }
}


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        //this.toolBtnClick = this.props.toolBtnClick;
    }

    render() {
        return (
            <div id='navbar'>
                <div id='left-box'>
                    <Btn icon="fa fa-tools fa-2x" onClick={this.props.toolBtnClick} />
                </div>
                <div id='right-box'>
                    <Btn icon="fa fa-bars fa-2x" onClick={this.props.logBtnClick} />
                </div>
                {this.props.btns}
            </div>
        );
    }
}