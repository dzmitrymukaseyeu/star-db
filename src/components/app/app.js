import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeopePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator';

export default class App extends Component {   
  state = {
    hashError: false
  };

  componentDidCatch() {
    this.setState({
      hashError: true
    })
  }

  render() {
    if (this.state.hashError) {
      return <ErrorIndicator/>
    }

    return (
    <div>
      <Header />
      <RandomPlanet />
      <PeopePage/>
    </div>
    ) 
  }
}
