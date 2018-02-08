import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { versionFetchRequest } from './../actions/version-actions'

class SelectVersion extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.versionsFetch());
    this.state = {
      versions: this.props.versionArray ? this.props.versionArray : this.props.versionsFetch,
      error: null,
      value: 'kjv',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  
// componentWillReceiveProps() {
//   if(this.props.versionArray)
//  this.setState({
//    versions: this.props.versionArray
//  })
// }

handleChange(e) {
  this.setState({
    value: e.target.value
  })
}

  render() {
    // const { versions } = this.props
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
        <select 
          onChange={this.handleChange}
          value={this.state.value}
          name="version" 
          id="version">
            {this.state.versions.map((idx) => <option key={uuid()} value={idx.bible}>{idx.title}</option>)}
        </select>
        </label>
      </div>
    )
  }
}

SelectVersion.propTypes = {
  versionArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  versionsFetch: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = state => ({
  versionArray: state.versions
})

const mapDispatchToProps = dispatch => ({
  versionsFetch: () => dispatch(versionFetchRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectVersion);