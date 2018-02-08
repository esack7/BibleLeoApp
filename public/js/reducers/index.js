import { combineReducers } from 'redux';
import readingPlans from './readingplans';
import bibleVersions from './bibleVersions';

// console.log('In index.js for reducers: ',bibleVersions());

export default combineReducers({
  plans: readingPlans,
  versions: bibleVersions
});