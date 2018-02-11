import React from 'react';
import uuid from 'uuid/v4';
// import superagent from 'superagent';
import PropTypes from 'prop-types';

class ReadingPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // textArr: [],
      error: null,
      // version: this.props.currentVersion,
      // passage: 'Genesis1.1-3.24'
    };
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>An error has occurred: {this.state.error}</h1>
        </div>
      )
    }
    return (
      <main>
        {/* <h3>{this.props.all.plans[0].data[0]}</h3> */}
        {this.props.textArray.map(para => <p key={uuid()}>{para}</p>)}
        {/* <h1>Here is will be the scripture</h1> */}
      </main>
    );
  }
}

ReadingPane.propTypes = {
  // currentVersion: PropTypes.string.isRequired
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ReadingPane;