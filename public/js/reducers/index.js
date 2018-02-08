import { combineReducers } from 'redux';
import readingPlans from './readingplans';
import bibleVersions from './bibleVersions';

export default combineReducers({
  plans: readingPlans,
  versions: bibleVersions
});