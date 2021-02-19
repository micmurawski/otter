import React from 'react';
import './style.scss';


export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
          </p>
                <i className="fa fa-thumbs-up"></i>
            </div>
        );
    }
}