import React, { Component } from 'react';
import Hashtag from './Hashtag'

export default class Hashtags extends Component {
  constructor(props) {
    super(props)
  }

  render() {


    return (
      <section id="trends-container">
        <h3>Trends</h3>
        <ul>
          <Hashtag />
        </ul>
      </section>
    );

  }
}
