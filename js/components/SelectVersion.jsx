import React from 'react';
import uuid from 'uuid/v4';

class SelectVersion extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      versions: [],
      error: null,
    };
  }

  componentDidMount() {
    return fetch(`https://api.biblia.com/v1/bible/find?key=${process.env.API_KEY}`)
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({
          versions: jsonRes.bibles
        })
      }, error => {
        this.setState({
          error
        })
      }
    )
  }

  render() {
    if(this.state.error) {
      return(
        <div>
          <h1>An error has occurred: {this.state.error}</h1>
        </div>
      )
    } 
    return(
      <div>
        <label htmlFor="version">
        Choose a Bible Version:
        <select name="version" id="version">
            {this.state.versions.map((idx) => <option key={uuid()} value={idx.bible}>{idx.title}</option>)}
        </select>
        </label>
      </div>
    )
  }
}

export default SelectVersion;