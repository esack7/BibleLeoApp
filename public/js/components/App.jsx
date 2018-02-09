import React from 'react';
import superagent from 'superagent';
import Header from './Header';
import Footer from './Footer';
import Settings from './Settings';
import ReadingPane from './ReadingPane';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versions: localStorage.versions ? JSON.parse(localStorage.versions) : [],
      error: null,
      currentVersion: 'rvr60',
    };
  }
  componentDidMount() {
    if(this.state.versions[0]) return null;
    return superagent(`https://api.biblia.com/v1/bible/find`)
      .query({ key: process.env.API_KEY })
      .then(res => res.body)
      .then(jsonRes => {
        this.setState({
          versions: jsonRes.bibles
        });
        localStorage.setItem('versions', JSON.stringify(jsonRes.bibles))
      }, error => {
        this.setState({
          error
        })
      }
    )
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
      <div>
        <Header />
        <Settings versions={this.state.versions} />
        <ReadingPane currentVersion= {this.state.currentVersion}/>
        <Footer />
      </div>
    );
  }
}


export default App;