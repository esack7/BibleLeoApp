import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import { TextBox, ScriptureReference, VerseParagraph } from '../style/Styles';

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
        <ScriptureReference>Scripture Reference</ScriptureReference>
        <TextBox>
          {this.props.textArray.map(para => <VerseParagraph key={uuid()}>{para}</VerseParagraph>)}
        </TextBox>
        <button>Read</button>
      </main>
    );
  }
}

ReadingPane.propTypes = {
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ReadingPane;