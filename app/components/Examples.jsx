var React = require('react');
var { Link } = require('react-router');
var ClassNames = require('ClassNames');
var { classSet } = ClassNames;

var Examples = React.createClass({
  render: function () {
    var classNames = classSet('text-center', 'page-title');
    return (
      <div>
        <h1 className={classNames}>Examples</h1>
        <p>Here are a few example Location to Try out</p>
        <ol>
          <li>
            <Link to="/?location=Nadiad">Nadiad, Gujarat, India</Link>
          </li>
          <li>
            <Link to="/?location=Roi">Rio, Brazil</Link>
          </li>
        </ol>
      </div>
    );
  }
});

module.exports = Examples;
