var React = require('react');
var ReactDOM = require('react-dom');
/*
var Route = require('react-router').Route;
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
*/

// rather use ES6 Destructuring syntax
// I am now using browserHistory rather than hashHistory
var { Route, Router, IndexRoute, browserHistory } = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
const _ById = (id) => document.getElementById(id);

var obj = {
  name: 'Dixit Patel'
};

var {name} = obj;
// load foundation-sites
// style and css loaders
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  _ById('app')
);

// nesting routes
// for IndexRoute don't use Link use IndexLink
