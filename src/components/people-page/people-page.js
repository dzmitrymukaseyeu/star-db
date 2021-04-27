import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import ItemList from '../item-list'
import ItemDetails from '../item-details';
import Row from '../row';

import './people-page.css';

export default class PeopePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const itemList = (
      <ItemList
        onItemSelected= {this.onPersonSelected}
        getData= {this.swapiService.getAllPeople}
      >
        {(i) => (
          `${i.name} (${i.birthYear})`
        )}
      </ItemList>
    );
    const personDetails = (
      <ItemDetails itemId = {this.state.selectedPerson} />
    )

    return (
      <ErrorBoundry>
        <Row left= {itemList} right= {personDetails}/>
      </ErrorBoundry>
    )
  }
}