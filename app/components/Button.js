const React = require('react');
const { PropTypes, Component } = React;
var ClassNames = require('ClassNames');
var { classSet } = ClassNames;

class Button extends Component {
  constructor (props) {
    // debugger;
    super (props);
    this.handleClick = this.handleClick.bind(this);

  }
  handleClick (evt) {
    if (this.props.onClick) {
      this.props.onClick(evt, this);
    }
  }
  render () {
    const extraProps = {};
    if (this.props.disabled) {
      extraProps.disabled = true;
    }
    debugger;
    let className = classSet(this.props.className, {
      button: true, // button className will always be true
      disabled: this.props.disabled,
      small: this.props.size && this.props.size === "small",
      medium: this.props.size && this.props.size === "medium",
      large: this.props.size && this.props.size === "large",
      primary: this.props.primary,
      secondary: this.props.secondary
    });

    return (
      <button className={className} {...extraProps} type="button" onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

const { string, bool, number, func, oneOf } = PropTypes;
Button.propTypes = {
  className: string,
  disabled: bool,
  primary: string,
  secondary: string,
  size: oneOf(["small", "medium", "large"]),
  onClick: func
};


module.exports = Button;
