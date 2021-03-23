import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {

  render() {
    return (
      <div className='header d-flex'>
        <h1>
          <a href='#'>
            StarDB
          </a>
        </h1>
        <ul className='d-flex'>
          <li>
            <a href='#'>People</a>
          </li>
          <li>
            <a href='#'>Planets</a>
          </li>
          <li>
            <a href='#'>Starships</a>
          </li>
        </ul>
      </div>
    )
  }
}
