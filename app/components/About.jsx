var React = require('react');
var { Link } = require('react-router');
var ClassNames = require('ClassNames');
var { classSet } = ClassNames;


var About = React.createClass({
  render: function () {
    // debugger;
    var classNames = classSet('text-center', 'page-title');
    console.log(classNames);
    return (
      <div>
        <h1 className={classNames}>About</h1>
        <p>This is a Simple Weather Application build using React and
        React-Router. We used openweatermap.org Api to retieve the data.
        </p>
        <p>Tools We used</p>
        <ul>
          <li><a href="https://facebook.github.io/react">React</a></li>
          <li><a href="https://openweathermap.org">OpenWeatherMap</a></li>
          <li><a href="https://react-router.now.sh/">React Router</a></li>
        </ul>
      </div>
    );
  }
});

module.exports = About;
