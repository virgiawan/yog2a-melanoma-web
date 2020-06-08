// @flow
import { assetUrl } from "fusion-core";
import { Helmet } from 'fusion-plugin-react-helmet-async';
import { Route, Switch, Link } from 'fusion-plugin-react-router';
import React, { Component } from 'react';
import {
  Button,
  Container,
  Dropdown,
  Grid,
  Icon,
  Menu
} from "semantic-ui-react";

import Home2 from './pages/home-xxx.js';
import Home from './plugins/home/components/main.js';
import PageNotFound from './pages/pageNotFound.js';

const cssBasic = assetUrl('../node_modules/semantic-ui-css/semantic.min.css');
const cssLayoutBasic = assetUrl('./css/index.css');
const cssLayout = assetUrl('./css/app.css');

class MobileMenuItems extends Component {

  state = {
    dropdownMenuStyle: {
      display: "none"
    }
  };

  handleToggleDropdownMenu = () => {
    let newState = Object.assign({}, this.state);
    if (newState.dropdownMenuStyle.display === "none") {
      newState.dropdownMenuStyle = { display: "flex" };
    } else {
      newState.dropdownMenuStyle = { display: "none" };
    }

    this.setState(newState);
  };

  render = () => {
    return (
      <Grid padded className="mobile only">
        <Menu borderless fluid size="huge">
          <Menu.Item header as="a">
            Project Name
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button
                icon
                basic
                toggle
                onClick={this.handleToggleDropdownMenu}
              >
                <Icon name="content" />
              </Button>
            </Menu.Item>
          </Menu.Menu>
          <Menu
            vertical
            borderless
            fluid
            style={this.state.dropdownMenuStyle}
          >
            <Menu.Item active as="a">
              Home
            </Menu.Item>
            <Menu.Item as="a">About</Menu.Item>
            <Menu.Item as="a">Contact</Menu.Item>
            <Dropdown text="Dropdown" className="item">
              <Dropdown.Menu>
                <Dropdown.Item as="a">Action</Dropdown.Item>
                <Dropdown.Item as="a">Another action</Dropdown.Item>
                <Dropdown.Item as="a">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Navbar header</Dropdown.Header>
                <Dropdown.Item as="a">Seperated link</Dropdown.Item>
                <Dropdown.Item as="a">One more seperated link</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item as="a">Default</Menu.Item>
            <Menu.Item active as="a">
              Static top
            </Menu.Item>
            <Menu.Item as="a">Fixed top</Menu.Item>
          </Menu>
        </Menu>
      </Grid>
    );
  }
}

const MenuItems = () => (
  <Grid padded className="tablet computer only">
    <Menu borderless fluid size="huge">
      <Container>
        <Menu.Item header as="a">
          Melanoma App
        </Menu.Item>
        <Menu.Item><Link to="/">Home</Link></Menu.Item>
        <Menu.Item><Link to="/predict">Predict</Link></Menu.Item>
        <Menu.Item><Link to="/info">Info</Link></Menu.Item>
        <Menu.Item><Link to="/about">About</Link></Menu.Item>
      </Container>
    </Menu>
  </Grid>
);

const DynamicContent = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home2" component={Home2} />
    <Route component={PageNotFound} />
  </Switch>
);

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Helmet>
          <link rel="stylesheet" href={cssBasic} />
          <link rel="stylesheet" href={cssLayoutBasic} />
          <link rel="stylesheet" href={cssLayout} />
        </Helmet>
        <MenuItems />
        <MobileMenuItems />
        <Container>
          <div className="dynamic-content">
            <DynamicContent />
          </div>
        </Container>
      </div>
    );
  }
}

export default <App/>;
