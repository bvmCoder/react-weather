var React = require('react');
var Nav = require('Nav');
var ClassNames = require('ClassNames');
var { classSet } = ClassNames;
/*
var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});
*/
var Main = React.createClass({
  render: function () {
    var classNames = classSet('medium-6', 'large-4', 'small-centered', 'columns');
    return (
      <div>
        <Nav/>
        <div style={{marginTop: "1rem"}}></div>
        <div className="row" style={{border: "2px solid #466d98"}}>
          <div className={classNames}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
