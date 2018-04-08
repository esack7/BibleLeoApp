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
      showSetting: false,
      showReading: localStorage.settings,
      selectedDate: localStorage.settings ? JSON.parse(localStorage.settings).selectedDate : '',
      selectedPlan: localStorage.settings ? JSON.parse(localStorage.settings).selectedPlan : '',
      selectedVersion: localStorage.settings ? JSON.parse(localStorage.settings).selectedVersion : '',
    };
    this.handleSettings = this.handleSettings.bind(this);
    this.handleHeaderSettingsButton = this.handleHeaderSettingsButton.bind(this);
  }
  componentDidMount() {
    if(this.state.versions[0]) return null;
    return superagent(`/v1/bible/find`)
      .then(res => res.body)
      .then(jsonRes => {
        this.setState({
          versions: jsonRes
        });
        localStorage.setItem('versions', JSON.stringify(jsonRes))
      }, error => {
        this.setState({
          error
        })
      }
    )
  }

  handleSettings(e) {
    const settings =JSON.parse(e.target.value);
    localStorage.setItem('settings', e.target.value);
    this.setState({ 
      showReading: true,
      showSetting: false,
      selectedDate: settings.selectedDate,
      selectedPlan: settings.selectedPlan,
      selectedVersion: settings.selectedVersion,
    });
  }

  handleHeaderSettingsButton() {
    this.setState({
      showSetting: !this.state.showSetting,
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
    if(this.state.showReading) {
      if(this.state.showSetting){
        return (
          <div>
            <Header 
              showSettings = {this.handleHeaderSettingsButton}
            />
            <Settings 
              versions={this.state.versions}
              settingsGrab={this.handleSettings} 
            />
            <ReadingPane
              selectedDate={this.state.selectedDate}
              selectedPlan={this.state.selectedPlan}
              selectedVersion={this.state.selectedVersion}
            />
            <Footer />
          </div>
        );
      }
      return (
        <div>
          <Header
            showSettings={this.handleHeaderSettingsButton}
          />
          <ReadingPane
            selectedDate={this.state.selectedDate}
            selectedPlan={this.state.selectedPlan}
            selectedVersion={this.state.selectedVersion}
          />
          <Footer />
        </div>
      );
    } 
    return (
      <div>
        <Header
          showSettings={this.handleHeaderSettingsButton}
        />
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