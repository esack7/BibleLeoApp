import superagent from 'superagent';

const MakeCall = (version, verse) => {
  console.log('In Make Call function!!!')
  return new Promise((resolve, reject) =>
    resolve(
      superagent(`https://api.biblia.com/v1/bible/content/${version}.txt.json`)
        .query({ passage: verse })
        .query({ key: process.env.API_KEY })
        .then(res => res.body)
        .then(jsonRes => jsonRes.text.split(' \r\n').map(idx => idx.trim()))
        .catch(err => console.error(err))
    )
      .catch(error => reject(error)));
};

export default MakeCall;
