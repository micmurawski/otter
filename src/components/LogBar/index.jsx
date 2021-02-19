import React from 'react';
import './style.scss';


class LogBar extends React.Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.state = {
            open: this.props.open ? true : false
        }
    }

    open() {
        this.state.open = !this.state.open;
        this.setState(this.state);
    }

    render() {
        return (
            <div id='right-side-bar' className={this.state.open ? "open" : "closed"}>
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
        );
    }
}

export { LogBar };