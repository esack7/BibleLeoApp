import React from 'react';
import uuid from 'uuid/v4';
import plans from './../../../data/readingplans.json';

class SelectPlan extends React.Component{
  constructor(props) {
    super(props);
    this.state = plans
  }

  render() {
    return(
      <div>
        <label htmlFor="plan">
        Choose a Reading Plan: 
        <select name="plan" id="plan">
          {this.state.plansArray.map((idx) => <option key={uuid()} value={idx.id}>{idx.name}</option>)}
        </select>
        </label>
      </div>
    )
  }
}

export default SelectPlan;