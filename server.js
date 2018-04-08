const express = require('express');
const request = require('superagent');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('./public'));

app.get('/v1/bible/find', (req, res) => {
  request
    .get(`https://api.biblia.com/v1/bible/find`)
    .query({ key: process.env.API_KEY })
    .end((err, response) => {
      if (err) console.log(err);
      res.json(response.body.bibles);
    });
});

app.get('/v1/bible/content', (req, res) => {
  const { version, verse } = req.query;
  request
    .get(`https://api.biblia.com/v1/bible/content/${version}.txt.json`)
    .query({ passage: verse })
    .query({ key: process.env.API_KEY })
    .end((err, response) => {
      if (err) console.log(err);
      res.json(response.body.text);
    });
});

app.listen(PORT, () => console.log(`🌎 Listening on port: "${PORT}"`));