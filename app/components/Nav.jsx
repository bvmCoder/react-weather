var React = require('react');
var { Link, IndexLink } = require('react-router');
/*
var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>
          Nav Component
        </h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Get Weather</IndexLink>
        <br/>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: "bold"}}>About</Link>
        <br/>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Examples</Link>
        <br/>
      </div>
    );
  }
});

*/

var Nav = React.createClass({
  onSearch: function (evt) {
    evt.preventDefault();
    console.log('Not yet fully developed');
  },
  render: function () {
    const activeStyle = {
      fontWeight: "bold"
    };
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather App
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={activeStyle}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={activeStyle}>About</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={activeStyle}>Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather" />
              </li>
              <li>
                <button className="button">Fetch Weather</button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;


// Link component
// use IndexLink for IndexRoute component
