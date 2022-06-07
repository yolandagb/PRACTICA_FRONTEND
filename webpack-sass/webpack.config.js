
module.exports = {
  // default value
  // entry: './src/index.js',
  entry: './main.js',
  // mode -> webpack will fallback to 'production' for this value
  mode: 'development',
  // output: {
  //   filename: '[name].[hash].bundle.js',
  //   path: __dirname + '/output',
  // },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
};
