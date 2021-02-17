import React from 'react';
import './style.scss';


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id='navbar'>
                <div id='left-box'>
                    <button className='btn'>L1</button>
                    <button className='btn'>L2</button>
                </div>
                <div id='right-box'>
                    <button className='btn'>R1</button>
                    <button className='btn'>R2</button>
                </div>
                {this.props.btns}
            </div>
        );
    }
}