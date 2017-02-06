const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractLESS = new ExtractTextPlugin("../css/app.css");

module.exports = {
	entry: './src/components/main.react.js',
	output: {
		path: __dirname + '/dist/js',
		publicPath: __dirname + '/dist/',
		filename: "app.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				query: {
					presets: ['react'],
				}
			},
			{
				test: /\.(png|jpg)$/,
				loader: 'file-loader',
				query: {
					publicPath: ' ',
					name: '../images/[name].[ext]',
				}
			},
			{
				test: /\.less$/,
				use: extractLESS.extract(['css-loader', 'less-loader'])
			},
		],
	},
	plugins: [
		extractLESS
	]
}