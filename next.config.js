/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['res.cloudinary.com'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'assets.example.com',
				port: '',
				pathname: '/account123/**',
			},
		],
	},
};

module.exports = nextConfig;
