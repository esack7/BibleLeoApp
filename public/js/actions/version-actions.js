import superagent from 'superagent';

export const selectVersion = version => ({
  type: 'VERSION_SELECTED',
  payload: version
});

export const fetchVersions = versions => ({
  type: 'VERSIONS_FETCHED',
  payload: versions
})

export const versionFetchRequest = (dispatch) => superagent.get(`https://api.biblia.com/v1/bible/find?key=${process.env.API_KEY}`)
    .then(res => {
      console.log('res in version-actions.js: ', res.body.bibles);
      dispatch(fetchVersions(res.body.bibles));
      return res;
    });