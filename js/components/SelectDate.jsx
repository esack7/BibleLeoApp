import React from 'react';
import PropTypes from 'prop-types';

class SelectDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <label htmlFor="date">
          Enter your reading start date
        <input 
          type="date" 
          name="start" 
          id="date" 
          value={this.props.selected} 
          onChange={this.props.handleDSelect} 
        />
        </label>
      </div>
    )
  }
}

SelectDate.propTypes = {
  handleDSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
};

export default SelectDate;