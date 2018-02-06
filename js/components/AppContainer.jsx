import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import appCreateStore from './../lib/app-create-store'

const store = appCreateStore()

const AppContainer = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppContainer;