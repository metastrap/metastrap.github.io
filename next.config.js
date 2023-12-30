const path = require('path');
const bundle = require('./utils/bundle');
const BundleWebpackPlugin = require('./utils/bundleWebpackPlugin');


/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '',
  webpack: (config, options) => {
    if (options.isServer) {
      config.plugins.push(
        new BundleWebpackPlugin({
          output: path.join('public', 'zip'),
        }),
      );
    }
    return config;
  },
}

module.exports = nextConfig
