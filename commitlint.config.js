// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // You can customize rules here if needed.
  // For example, to enforce a maximum header length of 72 characters:
  rules: {
    'header-max-length': [1, 'always', 100], // Warning instead of error, longer limit
    'body-leading-blank': [1, 'always'],     // Warning instead of error
    'footer-leading-blank': [1, 'always'],   // Warning instead of error
    'scope-case': [2, 'always', 'lower-case'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert',
      ],
    ],
  },
  // Custom help message for failed commits
  helpUrl: 'https://www.conventionalcommits.org/'
};