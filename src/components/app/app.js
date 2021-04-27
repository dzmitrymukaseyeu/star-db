import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeopePage from '../people-page/people-page';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import ItemDetails, {Record} from '../item-details/item-details';
import ItemList from '../item-list';


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

    const {
      getPerson,
      getStarship,
      getPersonImg,
      getStarshipImg,
      getPlanetImg,
      getAllPeople,
      getAllPlanets
    } = this.swapiService;
    const personDetails = (
      <ItemDetails 
        itemId={11}
        getData={getPerson}
        getImgUrl={getPersonImg}
      >
        <Record field= 'gender' label='Gender'/>
        <Record field= 'eyeColor' label='Eye Color'/>
      </ItemDetails>
    )
    const starshipDetails = (
      <ItemDetails 
        itemId={5}
        getData={getStarship}
        getImgUrl={getStarshipImg}
      >
        <Record field= 'model' label='Model'/>
        <Record field= 'length' label='Length'/>
        <Record field= 'constInCredits' label='Cost'/>
      </ItemDetails>
    )

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <ItemList
              getData={getAllPeople}
              onItemSelected={() => {}}>

            { ({name}) => <span>{name}</span> }
          </ItemList>

          <ItemList
              getData={getAllPlanets}
              onItemSelected={() => {}}>

            { ({name}) => <span>{name}</span> }
          </ItemList>
        </div>
      </ErrorBoundry>
    ) 
  }
}
