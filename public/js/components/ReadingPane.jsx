import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

class ReadingPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textArr: [],
      error: null
    };
  }

  componentDidMount() {
    return fetch(`https://api.biblia.com/v1/bible/content/kjv.txt.json?passage=Genesis1.1-3.24&key=${process.env.API_KEY}`)
      .then(res => res.json())
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
    console.log('Store: ', this.props.all);
    if(this.state.error) {
      return(
        <div>
          <h1>An error has occurred: {this.state.error}</h1>
        </div>
      )
    }
    return (
      <main>
        <h3>{this.props.all.plans[0].data[0]}</h3>
        {this.state.textArr.map(para => <p key={uuid()}>{para}</p>)}
      </main>
    );
  }
}

ReadingPane.propTypes = {
  all: PropTypes.objectOf(PropTypes.array).isRequired
};

const mapStateToProps = state => ({
  all: state
})

export default connect(mapStateToProps)(ReadingPane);