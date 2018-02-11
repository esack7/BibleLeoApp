import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

class SelectPlan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { planArray } = this.props;
    return(
      <div>
        <label htmlFor="plan">
        Choose a Reading Plan: 
        <select 
          onChange={this.props.handlePSelect}
          value={this.props.selected}
          name="plan" 
          id="plan">
          {planArray.map((idx) => 
          <option key={uuid()} value={idx.abbv}>
            {idx.name}
          </option>)}
        </select>
        </label>
      </div>
    )
  }
}

SelectPlan.propTypes ={
  planArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  handlePSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}

export default SelectPlan;