import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';
import { TextBox, ScriptureReference, VerseParagraph } from '../style/Styles';
import Plans from './../../../data/readingplans.json';
import { dateDiff } from '../lib/date';
import MakeCall from '../lib/scripture-api';

class ReadingPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      version: this.props.selectedVersion ? this.props.selectedVersion : '',
      scriptureArray: (this.props.selectedDate && this.props.selectedPlan) ? Plans.plansArray.filter(idx => idx.abbv === this.props.selectedPlan)[0].data[dateDiff(this.props.selectedDate)] : [],
      arrayPosition: 0,
      textArr: [],
      startClicked: false,
    };
    this.handleRead = this.handleRead.bind(this);
  }

  componentDidMount() {
    console.log('ReadingPane State: ', this.state);
    console.log('Iterating thru array', this.state.scriptureArray[this.state.arrayPosition]);
  }
  
  handleRead() {
    console.log('In HandleRead function!!!')
    MakeCall(this.state.version, this.state.scriptureArray[this.state.arrayPosition])
      .then(text => {
        console.log('Value of text in handleRead: ', text);
        this.setState({
          textArr: text,
          startClicked: true,
        })
      })
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>An error has occurred: {this.state.error}</h1>
        </div>
      )
    }
    if(this.state.startClicked) {
      console.log(this.state.textArr)
      return (
        <main>
          <ScriptureReference>{this.state.scriptureArray[this.state.arrayPosition]}</ScriptureReference>
          <TextBox>
            {this.state.textArr.map(para => <VerseParagraph key={uuid()}>{para}</VerseParagraph>)}
          </TextBox>
          <button
            onClick={this.handleRead}
          >Next</button>
        </main>
      )
    }
    return (
      <main>
        <button
          onClick={this.handleRead}
        >Read</button>
      </main>
    );
  }
}

ReadingPane.propTypes = {
  // textArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedDate: PropTypes.string.isRequired,
  selectedVersion: PropTypes.string.isRequired,
  selectedPlan: PropTypes.string.isRequired,
};

export default ReadingPane;