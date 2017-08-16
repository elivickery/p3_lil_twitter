import React, { Component } from 'react';

export default class Composition extends Component {
  constructor(props) {
    super(props)
  }

  render() {


    return (
      <div>
        <section id="tweet-box">
          <p id="tweet-box-title">Compose New Tweet</p>
          <form id="tweet-form">
            <textarea id="new-tweet" cols="30" rows="5" maxlength="140" name="tweet"></textarea>
            <input type="submit" value="Tweet" />
          </form>
      </section>
    </div>
    );

  }
}
