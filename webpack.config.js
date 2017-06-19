module.exports = {
  entry: "./app/components/Main.js",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: {
      test: /\.jsx?$/,
      exclude: /(node_modules|bowers_components)/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2016']
      }
    }
  }
};
