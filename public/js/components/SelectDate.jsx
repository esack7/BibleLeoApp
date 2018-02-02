import React from 'react';

class SelectDate extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <label htmlFor="date">
        Enter your reading start date
        <input type="date" name="start" id="date"/>
        </label>
      </div>
    )
  }
}

export default SelectDate;