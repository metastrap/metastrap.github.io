const path = require('node:path');
const bundle = require('./bundle');

module.exports = class BundleWebpackPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.run.tap('BundleWebpackPlugin', async () => {

      await Promise.all(
        this.options.src.map(async (src) => {
          const outputPath = path.join(
            this.options.output ||
              compiler.options.output.path,
            src.filenameWithExtn,
          );
          console.log('BundleWebpackPlugin', src.dirPath, outputPath);
          try {
            await bundle(src.dirPath, outputPath);
          } catch (e) {
            console.log(e);
          }
          return;
        })
      );

    });
  }
}
