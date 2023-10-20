/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
};

// module.exports = nextConfig;

// next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/sounds/',
          outputPath: 'static/sounds/',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    });
    return config;
  },
};

