import React from 'react';
import { Router, Route } from 'react-router';
import History from 'react-router/lib/BrowserHistory';
import App from './components/App';
import About from './components/About';
import Inbox from './components/Inbox';
import Message from './components/Message';

let router = (<Router history={History}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message}/>
      </Route>
    </Route>
  </Router>)

export default router;