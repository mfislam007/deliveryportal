import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import DropDownbar from './components/MenuBackdrop/DropDownbar';
import MenuBackdrop from './components/MenuBackdrop/MenuBackdrop';
import Stream from './Stream';
import Phases from './Phases';
import Users from './Users';

class AllComponents extends Component {
  state = {
    sideDrawerOpen: false,
    topOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  addDrawerButtonClickHandler = () => {
    this.setState((prevState) => {
      return { topOpen: !prevState.topOpen };
    });
  };

  addBackdropClickHandler = () => {
    this.setState({ topOpen: false });
  };

  render() {
    let backdrop;
    let dropDownbar;
    let menuBackdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    if (this.state.topOpen) {
      dropDownbar = <DropDownbar />;
      menuBackdrop = <MenuBackdrop click={this.addBackdropClickHandler} />;
    }

    return (
      <div>
        {/*<div>
          <Router>
            <div>
              <ul>
                <li>
                  <Link to='/'>Stream</Link>
                </li>
                <li>
                  <Link to='/Phases'>Phases</Link>
                </li>
                <li>
                  <Link to='/Users'>Users</Link>
                </li>
              </ul>

              <hr />

              <Route exact path='/' component={Stream} />
              <Route path='/Phases' component={Phases} />
              <Route path='/Users' component={Users} />
            </div>
          </Router>
        </div>*/}
        <div style={{ height: '100%' }}>
          <Toolbar
            drawerClickHandler={this.drawerToggleClickHandler}
            addClickHandler={this.addDrawerButtonClickHandler}
          />
          <SideDrawer show={this.state.sideDrawerOpen} />

          {backdrop}
          {dropDownbar}
          {menuBackdrop}
          <main style={{ marginTop: '64px' }}>
            <p>This is the page content!</p>
          </main>
        </div>
      </div>
    );
  }
}

export default AllComponents;
