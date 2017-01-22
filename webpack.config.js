module.exports = {
	entry: './components/main.react.js',
	output: {
		filename: 'app.js'
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
		],
		rules: [
			{
				test: /\.css$/,
				use: [
					{loader: "style-loader"},
					{loader: "css-loader"},
				],
			},
		]
	}
}