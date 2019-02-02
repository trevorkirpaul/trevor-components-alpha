const path = require('path')

module.exports = {
	entry: './src/index.ts',
	mode: 'production',
	devtool: 'inline-source-map',
	optimization: {
		minimize: false,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'awesome-typescript-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'trevor-components',
		libraryTarget: 'umd',
	},
}
