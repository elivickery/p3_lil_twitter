import React, { Component } from 'react';
import Tweet from './Tweet'

export default class Timeline extends Component {
  constructor(props) {
    super(props)

  }

  render() {

    let url = '../tweets/recent'

    let arr = []

    fetch(url).then(function(response) {
      return response.json()
    }).then(function(data) {
      data.forEach(function(tweet, index){
        arr.push(<Tweet
          username={tweet.username} />)
      });
    })

    console.log(arr)

    return (
      <section id="tweets-container">
        <h3>Tweets</h3>
        <ul>

        </ul>
      </section>
    );

  }
}
