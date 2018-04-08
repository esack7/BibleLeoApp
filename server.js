const express = require('express');
const request = require('superagent');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
// const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require("webpack-hot-middleware");
require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 8080;


// const wpmw = webpackMiddleware(webpack(webpackConfig), {});
app.use(webpackHotMiddleware(webpack(webpackConfig)));

app.use(express.static(`${__dirname}/public`));

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