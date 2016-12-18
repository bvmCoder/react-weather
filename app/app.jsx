var React = require('react');
var ReactDOM = require('react-dom');
/*
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
*/
const _ById = (id) => document.getElementById(id);

var obj = {
  name: 'Dixit Patel'
};

var {name} = obj;
// rather use ES6 Destructuring syntax
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  _ById('app')
);
