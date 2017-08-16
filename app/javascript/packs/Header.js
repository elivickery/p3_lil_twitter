import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {


    return (
      <header id="top-nav">
        <div id="brand">Lil' Twitter API</div>
        <form id="search-form">
          <input id="search" type="text" name="query" />
        </form>
        <i class="fa fa-search"></i>
      </header>
    );

  }
}

