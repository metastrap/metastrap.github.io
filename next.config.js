const path = require('path');
const BundleWebpackPlugin = require('./utils/bundleWebpackPlugin');

const frameworks = {
  next: 'next',
};

/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '',

  webpack: (config, options) => {
    if (options.isServer) {
      config.plugins.push(
        /* zip @metastrap/core/dist/<frameworks> to /public/zip/<frameworks.zip> */
        new BundleWebpackPlugin({
          src: Object.keys(frameworks).map((framework) => (
            [{
              dirPath: path.join(
                require.resolve('@metastrap/core')
                  .split('dist')
                  .shift(),
                'dist',
                framework,
              ),
              filenameWithExtn: `${framework}.zip`,
            }]
          )),
          output: path.join('public', 'zip'),
        }),
      );
    }
    return config;
  },
};

module.exports = nextConfig;
