var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'India',
      temp: 38
    };
  },
  handleSearch: function (location){
    console.log(location);
    this.setState({
      location: location,
      temp: 24
    });
  },
  render: function () {
    var { temp, location } = this.state;
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage temp={temp} location={location} />
      </div>
    );
  }
});

module.exports = Weather;
