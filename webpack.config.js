var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

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
			new webpack.optimize.CommonsChunkPlugin('commons'),
			new ExtractTextPlugin('[name].css')
		]
		: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.optimize.CommonsChunkPlugin('commons')
		]
	,
	module: {
		loaders: [
			{ test: /\.js$/, loaders: ['babel'] },
			{ test: /\.css$/, loader: isProduction ? ExtractTextPlugin.extract({ fallbackLoader: 'style', loader: 'css' }) : 'style!css' }
		]
	},
	devServer: {
		hot: true,
		historyApiFallback: true
	}
}
