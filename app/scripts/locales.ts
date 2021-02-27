import path from 'path';
import fs from 'fs';

/**
 * Read all domain based locales
 * and write it into the public local file
 */

const locales = {
  en: {},
};

const findAllLocales = (base = '../src') => {
  const basePath = path.join(__dirname, base);
  const files = fs.readdirSync(basePath);

  files.forEach((file): void => {
    const filePath = `${base}/${file}`;
    const stats = fs.statSync(path.join(__dirname, filePath));

    if (stats.isDirectory()) {
      findAllLocales(filePath);
    }
    if (/locales\/[\w-]+\.json$/.test(filePath)) {
      const paths = filePath.split('/');

      const [namespace, language] = paths[paths.length - 1]
        .split('.')[0]
        .split('-');
      const string = fs.readFileSync(path.join(__dirname, filePath)).toString();
      const data = JSON.parse(string);

      locales[language][namespace] = locales[language][namespace] || {};
      locales[language][namespace] = {
        ...locales[language][namespace],
        ...data,
      };
    }
  });

  return 'result';
};

findAllLocales();
Object.keys(locales).forEach((locale) => {
  fs.mkdirSync(path.join(__dirname, `../dist/locales/${locale}`), {
    recursive: true,
  });
  fs.writeFileSync(
    path.join(__dirname, `../dist/locales/${locale}/translation.json`),
    JSON.stringify(locales[locale])
  );
});
