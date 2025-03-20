// @ts-check
import { replaceInFileSync } from 'replace-in-file';
import { concatMdSync } from 'concat-md';
import mdIndexGenerator from 'md-index-generator';
import fs from 'fs';

function getModuleName(path) {
  return path?.replace(/^docs[/\\]/, '').replace(/.md/, '');
}

// Remove bugged function in docs/display.md
replaceInFileSync({
  files: 'docs/display.md',
  from: /\n## default\n\n```ts\nconst default: {} & __module;\n```\n\n---/g,
  to: '',
});

// Remove "function" prefix and replace it with filename
replaceInFileSync({
  files: 'docs/*',
  from: /\n## (\S+)/g, //```ts\nfunction
  ignore: ['docs/globals.md', 'docs/README.md'],
  to: (...args) => {
    return `\n## ${getModuleName(args.at(-1))}.${args[1]}`;
  },
});
replaceInFileSync({
  files: 'docs/*',
  from: /\n```ts\nfunction /g,
  ignore: ['docs/globals.md', 'docs/README.md'],
  to: (...args) => {
    return `\n\`\`\`ts\n${getModuleName(args.at(-1))}.`;
  },
});

// // Remove "function" prefix and replace it with nothing
replaceInFileSync({
  files: 'docs/globals.md',
  from: /\n\n```ts\nfunction /g,
  to: '\n\n```ts\n',
});

replaceInFileSync({
  files: 'docs/*',
  ignore: 'docs/README.md',
  from: /^## /m,
  to: '<!-- index-start -->\nThe index will go here!\n<!-- index-end -->\n\n## ',
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
process.exit = () => {};
const docsFiles = await fs.promises.readdir('./docs/');
for (const file of docsFiles) {
  if (file === 'README.md') continue;
  await mdIndexGenerator(`./docs/${file}`, {
    depth: 2,
    title: `${file.replace('.md', '')} functions`,
    output: undefined,
  });
}

// Concat DOCS files
fs.writeFileSync(
  './DOCS.md',
  concatMdSync('docs', {
    sorter: (a, b) => {
      if (a === 'README.md') return -1;
      if (b === 'README.md') return 1;
      if (a === 'globals.md') return -1;
      if (b === 'globals.md') return 1;
      return a.localeCompare(b);
    },
  }),
);

// fs.copyFileSync('./DOCS.md', '../../README.md');
