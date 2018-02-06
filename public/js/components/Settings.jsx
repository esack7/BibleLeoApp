import React from 'react';
import SelectDate from './SelectDate';
import SelectPlan from './SelectPlan';
import SelectVersion from './SelectVersion';

class Settings extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return(
      <div>
        <SelectDate />
        <SelectPlan />
        <SelectVersion />
      </div>
    )
  }
}


export default Settings;