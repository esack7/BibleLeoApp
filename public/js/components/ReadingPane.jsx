import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

class ReadingPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
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
        <h3>Scripture Reference</h3>
        {this.props.textArray.map(para => <p key={uuid()}>{para}</p>)}
      </main>
    );
  }
}

ReadingPane.propTypes = {
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ReadingPane;