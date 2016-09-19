var path = require('path')
var webpack = require('webpack')

process.env.NODE_ENV = process.argv.indexOf('-p') === -1 ? 'development' : 'production'

module.exports = {
	devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval',
	entry: {
		app1: [
			'react-hot-loader/patch',
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'./entry/app1'
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{test: /\.js$/, loaders: ['babel']}
		]
	},
	devServer: {
		publicPath: '/static/',
		hot: true,
		historyApiFallback: true
	}
}
