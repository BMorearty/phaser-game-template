const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  },
});
