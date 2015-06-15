var Router = require('react-router');
var Route = Router.Route;
var React = require('react');
var App = require('./App');
var About = require('./About');
var Inbox = require('./Inbox');
var Message = require('./Message');

var routes = (
  <Route path="/" handler={App}>
    <Route path="about" handler={About}/>
    <Route path="inbox" handler={Inbox}>
      <Route path="messages/:id" handler={Message}/>
      <Route path="/archive/messages/:id" handler={Message}/>
    </Route>
  </Route>
);

Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});