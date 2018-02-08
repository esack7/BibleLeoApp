import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

class SelectPlan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 'etb',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    const { planArray } = this.props;
    return(
      <div>
        <label htmlFor="plan">
        Choose a Reading Plan: 
        <select 
          onChange={this.handleChange}
          value={this.state.value}
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
}

export default SelectPlan;