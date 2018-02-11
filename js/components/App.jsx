import React from 'react';
import superagent from 'superagent';
import Header from './Header';
import Footer from './Footer';
import Settings from './Settings';
import ReadingPane from './ReadingPane';
import MakeCall from './../lib/scripture-api';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versions: localStorage.versions ? JSON.parse(localStorage.versions) : [],
      error: null,
      // showSetting: true,
      showReading: false,
      currentVersion: 'rvr60',
      currentPlan: '',
      currentDate: '',
      textArr: [],
    };
    this.handleSettings = this.handleSettings.bind(this);
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

  handleSettings(e) {
    const settings =JSON.parse(e.target.value);
    this.setState({ 
      currentVersion: settings.selectedVersion, 
      currentPlan: settings.selectedPlan, 
      currentDate: settings.selectedDate,
      showReading: true
    });
    MakeCall(settings.selectedVersion, settings.selectedPlan, settings.selectedDate)
      .then(text => {
        this.setState({
          textArr: text
        })
      })
  }

  render() {
    // console.log(this.state);
    if (this.state.error) {
      return (
        <div>
          <h1>An error has occurred: {this.state.error}</h1>
        </div>
      )
    }
    if(this.state.showReading) {
      return (
        <div>
          <Header />
          <Settings 
            versions={this.state.versions}
            settingsGrab={this.handleSettings} 
          />
          <ReadingPane 
            currentVersion={this.state.currentVersion}
            currentPlan={this.state.currentPlan}
            currentDate={this.state.currentDate}
            textArray={this.state.textArr}
          />
          <Footer />
        </div>
      );
    } 
      return (
        <div>
          <Header />
          <Settings 
            versions={this.state.versions}
            settingsGrab={this.handleSettings} 
          />
          <Footer />
        </div>
      );
    
  }
}


export default App;