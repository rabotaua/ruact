import path from 'path'
import webpack from 'webpack'
import autoprefixer from 'autoprefixer'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

process.env.NODE_ENV = process.argv.indexOf('-p') === -1 ? 'development' : 'production'

var isProduction = process.env.NODE_ENV === 'production'

var hot = isProduction ? [] : [
	'react-hot-loader/patch',
	'webpack-dev-server/client?http://localhost:8080',
	'webpack/hot/only-dev-server'
]

export default (app) => ({
	devtool: isProduction ? 'source-map' : 'eval',
	entry: {
		timer: hot.concat(['./entry/timer']),
		counter: hot.concat(['./entry/counter'])
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
			{ test: /\.s?css$/, loader: isProduction ? ExtractTextPlugin.extract({ fallbackLoader: 'style', loader: 'css?sourceMap!postcss!sass?sourceMap' }) : 'style!css?sourceMap!postcss!sass?sourceMap' }
		]
	},
	postcss: function () {
		return [autoprefixer]
	},
	devServer: {
		hot: true,
		//historyApiFallback: true
		historyApiFallback: {
			rewrites: [
				{ from: /.*/, to: `/entry/${app}.html` }
			]
		}
	}
})
