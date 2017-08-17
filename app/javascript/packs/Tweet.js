import React, { Component } from 'react';

export default class Tweet extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <li className="tweet">
        <img className="avatar" src={this.props.avatar} alt="" />
        <div className="tweet-content">
          <p>
          {this.props.content}
            <span className="full-name">Sam Samskies</span>
            <span className="username">{this.props.username}</span>
            <span className="timestamp">- 6m</span>
          </p>
          <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
        </div>
      </li>
    );

  }
}
