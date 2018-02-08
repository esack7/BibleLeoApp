import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Settings from './Settings';
import ReadingPane from './ReadingPane';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      versions: [],
      error: null
    };
  }

  componentDidMount() {
    return fetch(`https://api.biblia.com/v1/bible/find?key=${process.env.API_KEY}`)
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({
          versions: jsonRes.bibles
        })
      }, error => {
        this.setState({
          error
        })
      }
    )
  }

  render() {
    return (
      <div>
        <Header />
        <Settings versions={this.state.versions} error={this.state.error}/>
        <ReadingPane />
        <Footer />
      </div>
    );
  }
}


export default App;