module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'settings': {'version': 'detect'},
  'rules': {
    'indent': [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'never',
    ],
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'max-len': [
      'error',
      {
        'code': 120,
        'ignoreStrings': true,
      },
    ],
    'object-curly-newline': ['error', {'multiline': true, 'consistent': true}],
    'no-confusing-arrow': ['warn', {'allowParens': true}],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'operator-linebreak': ['error', 'none'],
    'no-multi-spaces': ['error'],
    'react/jsx-filename-extension': [2, {'extensions': ['.js', '.jsx', '.ts', '.tsx']}],
    'react/jsx-closing-bracket-location': [2, {'selfClosing': 'after-props', 'nonEmpty': 'after-props'}],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': [
      'error',
      {
        'before': true,
        'after': true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
      },
    ],
    'comma-spacing': [
      'error',
      {
        'before': false,
        'after': true,
      },
    ],
    'eol-last': ['error', 'always'],
    'object-curly-spacing': ['error', 'never'],
    'react/prop-types': 'off',
  },
}
