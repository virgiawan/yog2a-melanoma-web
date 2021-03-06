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
import Person from './plugins/main/components/person';
import Info from './plugins/main/components/info';
import About from './plugins/main/components/about';
import Upload from './plugins/main/components/upload';
import Questions from './plugins/main/components/questions';


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
        <Menu.Item><Link to="/info">News and Info</Link></Menu.Item>
        <Menu.Item><Link to="/about">About</Link></Menu.Item>
      </Container>
    </Menu>
  </Grid>
);

const DynamicContent = () => (
  <Switch>
    <Route exact path="/" component={Questions} />
    <Route exact path="/upload" component={Upload} />
    <Route exact path="/doctor" component={Doctor} />
    <Route exact path="/person" component={Person} />
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
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />
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
