const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/cogs125-nosheen/' : '',
  basePath: isProd ? '/cogs125-nosheen' : '',
  output: 'export'
};

export default nextConfig;
