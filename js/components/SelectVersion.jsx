import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

class SelectVersion extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <label htmlFor="version">
        Choose a Bible Version:
        <select 
          onChange={this.props.handleVSelect}
          value={this.props.selected}
          name="version" 
          id="version"
        >
            {this.props.versions.map((idx) => <option 
                key={uuid()}
                value={idx.bible}
              >{idx.title}</option>)}
        </select>
        </label>
      </div>
    )
  }
}

SelectVersion.propTypes = {
  versions: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleVSelect: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
}

export default SelectVersion;