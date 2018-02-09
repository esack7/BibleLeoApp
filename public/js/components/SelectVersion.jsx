import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

class SelectVersion extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // versions: [],
      currentVersion: 'kjv',
    };
    this.handleChange = this.handleChange.bind(this);
  }


handleChange(e) {
  this.setState({
    currentVersion: e.target.value
  })
}

  render() {
    // console.log('Settings props: ', this.props)
    // console.log('Settings state: ', this.state)
    return(
      <div>
        <label htmlFor="version">
        Choose a Bible Version:
        <select 
          onChange={this.handleChange}
          value={this.state.currentVersion}
          name="version" 
          id="version">
            {this.props.versions.map((idx) => <option key={uuid()} value={idx.bible}>{idx.title}</option>)}
        </select>
        </label>
      </div>
    )
  }
}

SelectVersion.propTypes = {
  versions: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default SelectVersion;