import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-details.css';

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
  </li>
  )
}

export {
  Record
};

export default class ItemDetails extends Component {
  swapiService = new SwapiService();
  state = {
    item: null,
    loading: false,
    img: null
  }

  updateItem() {
    const { itemId, getData, getImgUrl } = this.props;

    if(!itemId) {
      return;
    }

    this.setState({loading: true});

    getData(itemId)
      .then((item) => {
        this.setState({
          item, 
          loading: false, 
          img: getImgUrl(item)
        });
      })
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  };

  render() {

    const { item, img } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { id, name, gender,
              birthYear, eyeColor } = item;

    return (
      <div className="item-details card">
        <img className="item-image"
          src={img}
          alt="item"/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child, idx) =>{
                return React.cloneElement(child, {item});
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
