var path = require('path')
var webpack = require('webpack')

process.env.NODE_ENV = process.argv.indexOf('-p') === -1 ? 'development' : 'production'

var isProduction = process.env.NODE_ENV === 'production'

var hot = isProduction ? [] : [
	'react-hot-loader/patch',
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server'
]

module.exports = {
	devtool: isProduction ? 'source-map' : 'eval',
	entry: {
		app1: hot.concat(['./entry/app1']),
		app2: hot.concat(['./entry/app2'])
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
		publicPath: '/dist/'
	},
	plugins: isProduction
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
