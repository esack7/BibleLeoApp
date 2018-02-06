import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Settings from './Settings';
import ReadingPane from './ReadingPane';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Settings />
        <ReadingPane />
        <Footer />
      </div>
    );
  }
}


export default App;