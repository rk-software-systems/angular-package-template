module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['plugin:@angular-eslint/recommended'],
  rules: {
    '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'ps', style: 'camelCase' }],
    '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'ps', style: 'kebab-case' }]
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
      }
    }
  ]
};
