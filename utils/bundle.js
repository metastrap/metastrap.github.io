const fs = require('node:fs');
const fg = require('fast-glob');
const JSZip = require('jszip');

module.exports = async function bundle(sourceDir, outputFilePath) {
  const zip = new JSZip();
  await Promise.all(
    (await fg([`${sourceDir}/**/*`])).map(async (filePath) => {
      zip.file(
        filePath.replace(`${sourceDir}/`, ''),
        await fs.promises.readFile(filePath, 'utf8'),
      );
    }),
  );
  return new Promise((resolve, reject) => {
    try {
      zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
        .pipe(fs.createWriteStream(outputFilePath))
        .on('finish', () => resolve(zip));
    } catch (e) {
      reject(e);
    }
  });
};
