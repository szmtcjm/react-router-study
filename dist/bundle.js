/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Router = __webpack_require__(1);
	var Route = Router.Route;
	var React = __webpack_require__(2);
	var App = __webpack_require__(3);
	var About = __webpack_require__(4);
	var Inbox = __webpack_require__(5);
	var Message = __webpack_require__(6);

	var routes = (
	  React.createElement(Route, {path: "/", handler: App}, 
	    React.createElement(Route, {path: "about", handler: About}), 
	    React.createElement(Route, {path: "inbox", handler: Inbox}, 
	      React.createElement(Route, {path: "messages/:id", handler: Message}), 
	      React.createElement(Route, {path: "/archive/messages/:id", handler: Message})
	    )
	  )
	);

	Router.run(routes, Router.HashLocation, function(Root)  {
	  React.render(React.createElement(Root, null), document.body);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = ReactRouter;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var RouteHandler = __webpack_require__(1).RouteHandler
	var React = __webpack_require__(2);

	var App = React.createClass({displayName: "App",
	  render:function () {
	    return (
	      React.createElement("div", null, 
	        React.createElement("h1", null, "App"), 
	        React.createElement(RouteHandler, null)
	      )
	    )
	  }
	});

	module.exports = App;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);

	var About = React.createClass({displayName: "About",
	  render: function () {
	    return React.createElement("h2", null, "About");
	  }
	});

	module.exports = About;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);


	var Inbox = React.createClass({displayName: "Inbox",
	  render: function () {
	    return React.createElement("h2", null, "Inbox");
	  }
	});

	module.exports = Inbox;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(2);

	var Message = React.createClass({displayName: "Message",
	  render:function () {
	    return React.createElement("h3", null, "Message");
	  }
	});

	module.exports = Message;

/***/ }
/******/ ]);