const ERROR_OK = 0;
const { seller, goods, ratings } = require('./data.json');

module.exports = {
	css: {
		loaderOptions: {
			stylus: {
				'resolve url': true,
				import: ['./src/theme']
			}
		}
	},
	pluginOptions: {
		'cube-ui': {
			postCompile: true,
			theme: true
		}
	},
	devServer: {
		before(app) {
			app.get('/api/seller', (req, res) => {
				res.json({
					errno: ERROR_OK,
					data: seller
				});
			});

			app.get('/api/goods', (req, res) => {
				res.json({
					errno: ERROR_OK,
					data: goods
				});
			});

			app.get('/api/ratings', (req, res) => {
				res.json({
					errno: ERROR_OK,
					data: ratings
				});
			});
		}
	}
};
