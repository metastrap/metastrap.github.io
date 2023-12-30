const path = require('path');
const BundleWebpackPlugin = require('./utils/bundleWebpackPlugin');

const frameworks = {
  next: 'next',
  react: 'react',
};

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
        /* zip @metastrap/core/dist/<frameworks> to /public/zip/<frameworks.zip> */
        new BundleWebpackPlugin({
          src: [{
            dirPath: path.join(
              require.resolve('@metastrap/core')
                .split('dist')
                .shift(),
              'dist', 'next'
            ),
            filenameWithExtn: 'next.zip',
          }],
          output: path.join('public', 'zip'),
        }),
      );

    }
    return config;
  },
}

module.exports = nextConfig
