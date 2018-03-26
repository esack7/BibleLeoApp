import superagent from 'superagent';
import Plans from './../../../data/readingplans.json';
import { dateDiff } from './date';

const MakeCall = (version, plan, date) => {
  let verse;
  const diff = dateDiff(date);
  return new Promise((resolve, reject) =>
    resolve(Plans.plansArray.filter(idx => idx.abbv === plan)[0].data[diff]).catch(error => reject(error))
  )
    .then(scriptArray => {
      console.log('scriptArray: ', scriptArray);
      [verse] = scriptArray; // need to make dynamic
      console.log('verse: ', verse);
      return verse;
    })
    .then(() =>
      superagent(`https://api.biblia.com/v1/bible/content/${version}.txt.json`)
        .query({ passage: verse })
        .query({ key: process.env.API_KEY })
        .then(res => res.body)
        .then(jsonRes => jsonRes.text.split(' \r\n').map(idx => idx.trim()))
        .catch(err => console.error(err))
    );
};

export default MakeCall;
