// @flow
import { assetUrl } from "fusion-core";
import { Helmet } from 'fusion-plugin-react-helmet-async';
import { Link, Route, Switch } from 'fusion-plugin-react-router';
import React, { Component } from 'react';
import {
  Container,
  Grid,
  Menu
} from "semantic-ui-react";

import PageNotFound from './pages/pageNotFound';
import Doctor from './plugins/main/components/doctor';
import Info from './plugins/main/components/info';
import About from './plugins/main/components/about';
import Home from './plugins/main/components/main';


const cssBasic = assetUrl('../node_modules/semantic-ui-css/semantic.min.css');
const cssLayoutBasic = assetUrl('./css/index.css');
const cssLayout = assetUrl('./css/app.css');

const MenuItems = () => (
  <Grid padded className="tablet computer only">
    <Menu borderless fluid size="huge">
      <Container>
        <Menu.Item header as="a">
          Melanoma App
        </Menu.Item>
        <Menu.Item><Link to="/">Home</Link></Menu.Item>
        <Menu.Item><Link to="/info">Info</Link></Menu.Item>
        <Menu.Item><Link to="/about">About</Link></Menu.Item>
      </Container>
    </Menu>
  </Grid>
);

const DynamicContent = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/doctor" component={Doctor} />
    <Route exact path="/info" component={Info} />
    <Route exact path="/about" component={About} />
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
