import React, {Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/inbox/messages/Jkei3c32">messages/Jkei3c32</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
};
