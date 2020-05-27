module.exports = {
  trailingComma: 'none',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  printWidth: 130,
  useTabs: false,
  arrowParens: 'always',
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.js',
      options: {
        parser: 'babel'
      }
    },
    {
      files: '*.md',
      options: {
        parser: 'markdown'
      }
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
        tabWidth: 2
      }
    }
  ]
};
