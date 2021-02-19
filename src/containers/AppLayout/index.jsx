import React from 'react';
import './style.scss';
import NavBar from '../../components/NavBar';
import Editor from '../../components/Editor';
import ToolBar from '../../components/ToolBar';
import { LogBar } from '../../components/LogBar';

class AppLayout extends React.Component {
  constructor(props) {
    super(props);

    this.openToolBar = this.openToolBar.bind(this);
    this.openLogBar = this.openLogBar.bind(this);

    this.state = {
      toolBarOpened: this.props.toolBarOpened ? true : false,
    }

    this.toolBarRef = React.createRef();
    this.editorRef = React.createRef();
    this.logBarRef = React.createRef();
    this.formRef = React.createRef();
  }

  openToolBar() {
    this.state.toolBarOpened = !this.state.toolBarOpened;
    this.setState(this.state);
    this.toolBarRef.current.open();
  }

  openLogBar() {
    this.state.logBarOpened = !this.state.logBarOpened;
    this.setState(this.state);
    this.logBarRef.current.open();
  }

  render() {


    return (

      <div id="layout">
        <div id="top">
          <NavBar toolBtnClick={this.openToolBar} logBtnClick={this.openLogBar}/>
        </div>
        <div id='main'>
          <ToolBar ref={this.toolBarRef} open={this.state.toolBarOpened} />
          <Editor ref={this.editorRef}/>
          <LogBar ref={this.logBarRef} open={this.state.logBarOpened}/>
          <LogBar ref={this.formRef}/>
        </div>
      </div>
    );
  }
}

export default AppLayout;