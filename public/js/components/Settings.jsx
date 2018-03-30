import React from 'react';
import PropTypes from 'prop-types';
import { todayDate, dateDiff } from './../lib/date';
import SelectDate from './SelectDate';
import SelectPlan from './SelectPlan';
import SelectVersion from './SelectVersion';
import planArray from './../../../data/readingplans.json'

class Settings extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: localStorage.settings ? JSON.parse(localStorage.settings).selectedDate : todayDate(),
      selectedPlan: localStorage.settings ? JSON.parse(localStorage.settings).selectedPlan : 'etb',
      selectedVersion: localStorage.settings ? JSON.parse(localStorage.settings).selectedVersion : 'kjv'
    };
    this.handleSelectedDate =this.handleSelectedDate.bind(this);
    this.handleSelectedPlan = this.handleSelectedPlan.bind(this);
    this.handleSelectedVersion = this.handleSelectedVersion.bind(this);
  }

  handleSelectedDate(e) {
    const diff = dateDiff(e.target.value);
    console.log(dateDiff(e.target.value));
    console.log(planArray.plansArray.filter(idx => idx.abbv === this.state.selectedPlan)[0].data[diff]);
    this.setState({
      selectedDate: e.target.value
    })
  }

  handleSelectedPlan(e) {
    this.setState({ 
      selectedPlan: e.target.value
    });
  }

  handleSelectedVersion(e) {
    this.setState({
      selectedVersion: e.target.value
    })
  }
  
  render() {
    return(
      <div>
        <SelectDate
          handleDSelect={this.handleSelectedDate}
          selected={this.state.selectedDate}
        />
        <SelectPlan 
          planArray={planArray.plansArray}
          handlePSelect={this.handleSelectedPlan}
          selected={this.state.selectedPlan}
        />
        <SelectVersion 
          versions={this.props.versions} 
          handleVSelect={this.handleSelectedVersion} 
          selected={this.state.selectedVersion} 
        />
        <button 
          type="submit"
          onClick={this.props.settingsGrab}
          value={JSON.stringify(this.state)}
        >Submit</button>
      </div>
    )
  }
}

Settings.propTypes = {
  versions: PropTypes.arrayOf(PropTypes.object).isRequired,
  settingsGrab: PropTypes.func.isRequired
}

export default Settings;