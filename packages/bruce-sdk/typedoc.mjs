export default {
  $schema: 'https://typedoc-plugin-markdown.org/schema.json',
  entryPoints: ['./types/globals.d.ts', './types/modules/*'],
  plugin: ['typedoc-plugin-markdown'],
  sort: ['source-order'],
  readme: './README.md',
  outputFileStrategy: 'modules',
  mergeReadme: true,
  hidePageHeader: true,
  hideBreadcrumbs: true,
  hideGroupHeadings: true,
  hidePageTitle: false,

  enumMembersFormat: 'table',
  parametersFormat: 'table',
  propertiesFormat: 'table',
  typeDeclarationFormat: 'table',
  indexFormat: 'table',
  useHTMLEncodedBrackets: true,
  sanitizeComments: true,

  useCodeBlocks: true,
  expandObjects: true,
  expandParameters: true,
  formatWithPrettier: true,

  disableSources: true,
  gitRevision: 'master',
};
