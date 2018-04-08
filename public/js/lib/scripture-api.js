import superagent from 'superagent';

const MakeCall = (version, verse) => new Promise((resolve, reject) =>
  resolve(
    superagent(`/v1/bible/content`)
      .query({ verse })
      .query({ version })
      .then(res => res.body)
      .then(jsonRes => jsonRes.split(' \r\n').map(idx => idx.trim()))
      .catch(err => console.error(err))
  )
    .catch(error => reject(error)));

export default MakeCall;
