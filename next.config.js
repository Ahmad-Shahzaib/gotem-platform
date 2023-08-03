const glob = require('glob');
const withImages = require('next-images');

module.exports = withImages();
module.exports = {
	basePath: '',
	// env: {
	// 	NEXT_PUBLIC_CLIENT_URL: 'https://crowdfunding.dev.wprollers.com/',
	// 	NEXT_PUBLIC_API_URL: 'https://stingray-app-in3wv.ondigitalocean.app/crowdfunding/',
	// 	NEXT_PUBLIC_GOOGLE_KEY: 'AIzaSyC5YVQ0beem9gtV-faZC9IKHaNgbdZsMR0',
	// 	NEXT_PUBLIC_PUBLISHABLE_KEY:
	// 		'pk_test_51KE9H3C4juVhf1DLwigHZTFVf8TCk6tyZzO4wbPfq0aewzRO65UFsU0fCjvkxPu4yCVUx9YgCrMwF1ag2CnTkPZn00tAB0h0Ne',
	// 	NEXT_PUBLIC_SOCKET_URL: 'wss://crowdfunding-socket.dev.wprollers.com/',
	// 	NEXT_CLIENT_PORT: 3019,
	// },

	// reactStrictMode: true,
	experimental: {
		// esmExternals: false,
		// jsconfigPaths: true,
	},

	// exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }){
	// 	const pages = await glob.sync('pages/**/*.js', { cwd: __dirname });
	// 	console.log(pages);
	// 	const pathMap = {};
	// 	pages.forEach((page) => {
	// 		const path = page
	// 			.replace(/^pages/, '')
	// 			.replace(/\.js$/, '')
	// 			.replace(/\/index$/, '')
	// 			.replace('\\\\','\\');

	// 		pathMap[path] = {page};
	// 		// console.log(pathMap[path].page);
	// 	});
	// 	// console.log(pathMap)
	// 	return pathMap;
	// 	// return {
	// 	// 	'/dashboard-user/[slug]/index': { page: '/dashboard-user/[slug]/index' },
	// 	// }
	// },

	images: {
		domains: [
			'localhost',
			'gotem-platform.vercel.app',
			'gotem.herokuapp.com',
			'app.gotem.io',
			'gotembackendapi-e70ef3c370be.herokuapp.com',
			// 'platform.gotem.io',
			// 'stage.wprollers.com',
			// 'crowdfunding.dev.wprollers.com',
			// 'crowdfunding-app.dev.wprollers.com',
			// 'stingray-app-in3wv.ondigitalocean.app',
			// 'main.d24fxiuxe1xww8.amplifyapp.com',
		],
		// formats: ['image/webp'],
		// loader: 'imgix',
		// path: '',
		// unoptimized: true,
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};
