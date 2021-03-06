
module.exports = {
  // default value
  // entry: './src/index.js',
  entry: './src/main.js',
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
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // añade el style en el head
          'style-loader',
          // procesa el css
          'css-loader',
          // compila de sass a css
          'sass-loader'
        ],
      },
    ],
  },
};
