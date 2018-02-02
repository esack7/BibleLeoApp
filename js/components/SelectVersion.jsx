import React from 'react';

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
        <select name="version" id="version" />
        </label>
      </div>
    )
  }
}

export default SelectVersion;