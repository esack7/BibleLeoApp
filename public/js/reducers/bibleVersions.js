export default (state = [], action) => {
  console.log('In bibleVersion reducer: ', action);
  const { type, payload } = action;
  switch (type) {
    case 'VERSION_SELECTED': return payload;
    case 'VERSIONS_FETCHED': return payload;
    default: return state;
  }
};