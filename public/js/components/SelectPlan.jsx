import React from 'react';

class SelectPlan extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <label htmlFor="plan">
        Choose a Reading Plan: 
        <select name="plan" id="plan" />
        </label>
      </div>
    )
  }
}

export default SelectPlan;