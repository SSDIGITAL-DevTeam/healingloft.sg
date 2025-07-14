/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'healingloft.sg',
			},
		],
	},
}

module.exports = nextConfig
