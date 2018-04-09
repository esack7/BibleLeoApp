const production = process.env.NODE_ENV === 'production';
const CleanPlugin = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const { HotModuleReplacementPlugin, NamedModulesPlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');

let plugins = [
  new HotModuleReplacementPlugin(),
  new NamedModulesPlugin(),
  new Dotenv({
    path: './.env',
    systemvars: false
  })
];
let entry = [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:8080',
  'webpack/hot/only-dev-server',
  './public/js/ClientApp.jsx'
];

if (production) {
  plugins = plugins.concat([new CleanPlugin(), new UglifyPlugin()]);
  entry = './public/js/ClientApp.jsx';
}

module.exports = {
  plugins,
  context: __dirname,
  entry,
  devtool: production ? undefined : 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: production ? 'build.js' : 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  }
};
