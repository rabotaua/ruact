var path = require('path')
var webpack = require('webpack')

process.env.NODE_ENV = process.argv.indexOf('-p') === -1 ? 'development' : 'production'

module.exports = {
	devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval',
	entry: {
		app1: process.env.NODE_ENV === 'production'
			? ['./entry/app1']
			: [
				'react-hot-loader/patch',
				'webpack-dev-server/client?http://localhost:8080',
				'webpack/hot/only-dev-server',
				'./entry/app1'
			],
		app2: process.env.NODE_ENV === 'production'
			? ['./entry/app2']
			: [
				'react-hot-loader/patch',
				'webpack-dev-server/client?http://localhost:8080',
				'webpack/hot/only-dev-server',
				'./entry/app2'
			]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/dist/'
	},
	plugins: process.env.NODE_ENV === 'production'
		? [
			new webpack.optimize.CommonsChunkPlugin('commons')
		]
		: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.optimize.CommonsChunkPlugin('commons')
		]
	,
	module: {
		loaders: [
			{ test: /\.js$/, loaders: ['babel'] }
		]
	},
	devServer: {
		hot: true,
		historyApiFallback: true
	}
}
