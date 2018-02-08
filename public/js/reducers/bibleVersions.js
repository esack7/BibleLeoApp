export default () => fetch(`https://api.biblia.com/v1/bible/find?key=${process.env.API_KEY}`)
  .then(x => x.json())
  .then(y => y.bibles);