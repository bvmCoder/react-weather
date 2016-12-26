var React = require('react');
var Button = require('Button');


var WeatherForm = React.createClass({
  onFormSubmit: function (evt) {
    evt.preventDefault();

    var location = this.refs.location.value;
    if (location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Search Weather"/>
          {/* this className will become props for the original button component */}
          <Button className="expanded hollow" onClick={this.onFormSubmit}>Fetch Weather</Button>
          {/*<button className="expanded hollow button">Fetch Weather</button>*/}
        </form>

      </div>
    );
  }
});

module.exports = WeatherForm;
