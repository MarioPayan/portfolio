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
      'warn',
      2,
    ],
    'linebreak-style': [
      'warn',
      'unix',
    ],
    'quotes': [
      'warn',
      'single',
    ],
    'semi': [
      'warn',
      'never',
    ],
    'array-bracket-newline': ['warn', 'consistent'],
    'array-bracket-spacing': ['warn', 'never'],
    'array-element-newline': ['warn', 'consistent'],
    'max-len': [
      'warn',
      {
        'code': 120,
        'ignoreStrings': true,
      },
    ],
    'object-curly-newline': ['warn', {'multiline': true, 'consistent': true}],
    'arrow-body-style' : ['warn', 'as-needed'],
    'no-confusing-arrow': ['warn', {'allowParens': true}],
    'implicit-arrow-linebreak': ['warn', 'beside'],
    'operator-linebreak': ['warn', 'none'],
    'no-multi-spaces': ['warn'],
    'react/jsx-filename-extension': [2, {'extensions': ['.js', '.jsx', '.ts', '.tsx']}],
    'react/jsx-closing-bracket-location': [2, {'selfClosing': 'after-props', 'nonEmpty': 'after-props'}],
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-spacing': [
      'warn',
      {
        'before': true,
        'after': true,
      },
    ],
    'comma-dangle': [
      'warn',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
      },
    ],
    'comma-spacing': [
      'warn',
      {
        'before': false,
        'after': true,
      },
    ],
    'eol-last': ['warn', 'always'],
    'object-curly-spacing': ['warn', 'never'],
    'react/prop-types': 'off',
  },
}
