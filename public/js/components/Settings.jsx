import React from 'react';
import PropTypes from 'prop-types';
import SelectDate from './SelectDate';
import SelectPlan from './SelectPlan';
import SelectVersion from './SelectVersion';
import planArray from './../../../data/readingplans.json'

class Settings extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      versions: this.props.versions,
    };
  }
  
  render() {
    console.log('Settings props: ', this.props)
    return(
      <div>
        <SelectDate />
        <SelectPlan planArray={planArray.plansArray}/>
        <SelectVersion versions={this.state.versions} error={this.props.error}/>
        <button type="submit">Submit</button>
      </div>
    )
  }
}

Settings.propTypes = {
  versions: PropTypes.arrayOf().isRequired,
  error: PropTypes.oneOfType([null, PropTypes.object]).isRequired,
}

export default Settings;