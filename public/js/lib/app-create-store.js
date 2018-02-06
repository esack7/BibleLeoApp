import { createStore } from 'redux';
import reducers from './../reducers';

const appCreateStore = () => (
  createStore(reducers)
)

export default appCreateStore;