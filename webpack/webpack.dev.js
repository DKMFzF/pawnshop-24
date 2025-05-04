const path = require('path');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		historyApiFallback: true,
		static: path.resolve(__dirname, './dist'),
		port: 8081,
		open: true,
		hot: true,
		proxy: {
			'/flats': 'http://localhost:8000'
		}
	},
	plugins: [new ReactRefreshWebpackPlugin()]
};
