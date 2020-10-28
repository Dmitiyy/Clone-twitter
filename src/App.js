import React, {useRef} from 'react';
import './App.sass';
import LeftSidebar from './components/Left sidebar/';
import Content from './components/pages/Home';
import Explore from './components/pages/Explore/';
import Profile from './components/pages/Profile/';
import Bookmarks from './components/pages/Bookmarks/';
import RightSidebar from './components/Right sidebar/';
import Modal from './components/modal/';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {connect} from 'react-redux';
import {getStyle} from './actions/actions';

function App({getStyle}) {
  const elem = useRef();


  return (
    <Router>
      <div className="App">
      <div className="App_left-sidebar">
        <LeftSidebar/>
      </div>
      <div ref={elem} className="App_section-content">
        <Switch>
          <Route exact path="/home">
            <Content/>
          </Route>
          <Route exact path="/">
            <Content/>
          </Route>
          <Route exact path="/explore">
            <Explore/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route exact path="/bookmarks">
            <Bookmarks/>
          </Route>
          <Route exact path="*">
            <Content/>
          </Route>
        </Switch>
      </div>
      <div className="App_right-sidebar">
        <RightSidebar/>
      </div>
      <Modal/>
    </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
      posts:  state.posts,
      trig: state.trig
  }
}

const mapDispatchToProps = {
  getStyle
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
