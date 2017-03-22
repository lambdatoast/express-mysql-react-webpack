// Generates the index.html file
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, 'frontend', 'app', 'index.js'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'frontend', 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'frontend', 'dist'),
		port: 3333,
		host: '0.0.0.0',
		proxy: {
			"*": {
				target: "http://127.0.0.1:8080",
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './frontend/app/index.html'
		})
	]
};
