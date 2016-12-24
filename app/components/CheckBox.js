const React = require('react');
const { PropTypes, Component } = React;


class CheckBox extends Component {
  constructor (props) {
    debugger;
    super (props);
    this.handleNoop = this.handleNoop.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      checked: props.checked
    };

  }
  componentWillReceiveProps (nextProps){
    if (!this.props.readonly) {
      if (nextProps.checked !== this.props.checked || nextProps.disabled !== this.props.disabled ) {
        this.setState ({
          checked: nextProps.checked
        });
      }
    }
  }

  handleNoop (){

  }
  handleChange (evt){
    let checked = this.props.checked;
    if( !this.props.readonly ) {
      checked = !this.state.checked;
      this.setState ({
        checked
      });
    }
    if (this.props.onChange) {
      this.props.onChange(evt, checked, this.props.value);
    } else if (this.props.onclick) {
      this.props.onclick(evt, checked, this.props.value);
    }
  }
  render () {
    const { name, text, value, disabled } = this.props;
    const checked = this.props.readonly ? this.props.checked : this.state.checked;

    const extraProps = {};
    if( checked === true) {
      extraProps.checked = true;
    } else {
      extraProps.checked = false;
    }
    if( disabled === true) {
      extraProps.disabled = true;
    }

    return (
      <div className="">
        <label htmlFor={name} className="">
          <input type="checkbox" id={name} onClick={this.handleChange} onChange={this.handleNoop} value={value} name={name} {...extraProps} />
          <span>{text}</span>
        </label>
      </div>
    );
  }

}
// ES6 Object Destructuring method
const { string, bool, number, func, oneOfType } = PropTypes;
CheckBox.propTypes = {
  className: string,
  checked: bool,
  disabled: bool,
  name: string,
  text: oneOfType([string, number]),
  value: string,
  readonly: bool,
  onChange: func
};

CheckBox.defaultProps = {
  disabled: false,
  checked: false
};

module.exports = CheckBox;
