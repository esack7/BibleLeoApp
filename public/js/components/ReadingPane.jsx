import React from 'react';
import uuid from 'uuid/v4';
import superagent from 'superagent';
import PropTypes from 'prop-types';

class ReadingPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textArr: [],
      error: null,
      version: this.props.currentVersion,
      passage: 'Genesis1.1-3.24'
    };
  }

  componentDidMount() {
    return superagent(`https://api.biblia.com/v1/bible/content/${this.state.version}.txt.json`)
      .query({ passage: this.state.passage })
      .query({ key: process.env.API_KEY })
      .then(res => res.body)
      .then(jsonRes => jsonRes.text.split(' \r\n\r\n\r\n\r\n\r\n').map(idx => idx.trim()))
      .then(
        text => {
          this.setState({
            textArr: text
          });
        },
        error => {
          this.setState({
            error
          });
        }
      );
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
        {this.state.textArr.map(para => <p key={uuid()}>{para}</p>)}
      </main>
    );
  }
}

ReadingPane.propTypes = {
  currentVersion: PropTypes.string.isRequired
};

export default ReadingPane;