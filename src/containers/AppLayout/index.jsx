import React from 'react';
import './style.scss';
import NavBar from '../../components/NavBar';
import Editor from '../../components/Editor';
import { ToolBar, ToolBarButton } from '../../components/ToolBar';
import { LogBar } from '../../components/LogBar';

class AppLayout extends React.Component {
  constructor(props) {
    super(props);

    this.openToolBar = this.openToolBar.bind(this);

    this.state = {
      toolBarOpened: this.props.toolBarOpened ? true : false,
    }
  }

  openToolBar() {
    this.state.toolBarOpened = !this.state.toolBarOpened;
    this.setState(this.state);
  }

  render() {


    return (
      <div id="layout">
        <div id="top">
          <NavBar />
        </div>
        <div id='main'>
          <ToolBar />
          <Editor />
          <LogBar />
        </div>
      </div>
    );
  }
}

export default AppLayout;