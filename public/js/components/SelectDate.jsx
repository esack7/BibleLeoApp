import React from 'react';
import todayDate from './../lib/date';

class SelectDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: todayDate()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      date: e.target.value
    })
  }

  render() {
    return (
      <div>
        <label htmlFor="date">
          Enter your reading start date
        <input type="date" name="start" id="date" value={this.state.date} onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}

export default SelectDate;