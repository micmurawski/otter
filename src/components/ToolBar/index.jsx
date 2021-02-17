import React from 'react';
import './style.scss';

class ToolBarButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='left-btn'>
                &equiv;
            </div>
        );
    }
}

class ToolBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='left-side-bar' className="open">
                xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </div>
        );
    }
}

export { ToolBar, ToolBarButton };