
//npm i --save-dev webpack
var webpack = require('webpack'); 
module.exports = {  
  entry: './app.ts',
  output: {
	  filename: './bin/bundle.js'
  },
  // Turn on sourcemaps
  devtool: 'source-map',
  resolve: {
  	extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  // Add minification
  plugins: [
  	new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
//	  npm install ts-loader --save
	loaders: [
	  { test: /\.ts$/, loader: 'ts' }
	]
  }
}