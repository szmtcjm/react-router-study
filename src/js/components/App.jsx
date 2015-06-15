var RouteHandler = require('react-router').RouteHandler
var React = require('react');

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler/>
      </div>
    )
  }
});

module.exports = App;