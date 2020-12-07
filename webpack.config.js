const path = require('path');
module.exports = {
	mode: 'development',
	devServer: {
		open: true,
		contentBase: path.join(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [{ loader: 'babel-loader' }],
				exclude: /node_modules/,
			},
		],
	},
};
