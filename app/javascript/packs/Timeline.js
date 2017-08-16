import React, { Component } from 'react';
import Tweet from './Tweet'

export default class Timeline extends Component {
  constructor(props) {
    super(props)
  }

  render() {


    return (
      <section id="tweets-container">
        <h3>Tweets</h3>
        <ul>
          <Tweet />
        </ul>
      </section>
    );

  }
}
