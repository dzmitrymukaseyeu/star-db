import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeopePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {   
  swapiService = new SwapiService();

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

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected= {this.onPersonSelected}
            getData= {this.swapiService.getAllPlanet}
            renderItem= {({ name, population, rotationPeriod }) => (`${name} (${population}, ${rotationPeriod})`)}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId = {this.state.selectedPerson} />
        </div>
      </div>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected= {this.onPersonSelected}
            getData= {this.swapiService.getAllStarships}
            renderItem= {(item) => item.name}
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId = {this.state.selectedPerson} />
        </div>
      </div>
    </div>
    
    
    ) 
  }
}
