import React from 'react';
import { render } from 'react-dom';
import AppContainer from './components/AppContainer'

const renderApp = () => {
  render(<AppContainer />, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/AppContainer', () => {
    renderApp();
  });
}
