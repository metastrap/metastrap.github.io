const path = require('path');
const fs = require('node:fs/promises')
const bundle = require('./bundle');

module.exports = class BundleWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.run.tap('BundleWebpackPlugin', async () => {
      const metastrapPath = path.join(
        require.resolve('@metastrap/core')
          .split('dist')
          .shift(),
        'dist', 'next'
      );
      const outputPath = path.join(this.options.output || compiler.options.output.path, 'metastrap.zip');
      console.log('BundleWebpackPlugin', metastrapPath, outputPath);
      try {
        await bundle(metastrapPath, outputPath);
        // await fs.writeFile(outputPath, zip);
      } catch (e) {
        console.log(e);
      }
    });
  }
}
