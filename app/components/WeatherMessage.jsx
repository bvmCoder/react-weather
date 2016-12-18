var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    return (
      <div>
        <p>It's 40 in Austin, Texas</p>
      </div>
    );
  }
});

module.exports = WeatherMessage;
