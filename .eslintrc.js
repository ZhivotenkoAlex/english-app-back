module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['src/**/*.ts'],
      plugins: ['import'],
      rules: {
        'import/order': [
          'error',
          {
            groups: [
              ['builtin', 'external'],
              ['parent', 'sibling', 'index'],
            ],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],

        'import/newline-after-import': 'error',

        'import/no-duplicates': 'error',

        // Enforce consistent spacing before and after keywords (e.g., if, else)
        'keyword-spacing': 'error',

        // Enforce consistent spacing before and after commas
        'comma-spacing': 'error',

        // Enforce consistent spacing inside curly braces (e.g., { })
        'object-curly-spacing': ['error', 'always'],

        // Enforce the use of triple equals (===) for equality comparisons
        eqeqeq: 2,

        camelcase: 'warn',

        // Disallow console.log statements
        'no-console': 'off',

        // Enforce a maximum line length of 80 characters
        'max-len': ['error', { code: 100 }],

        // Allow empty catch clauses (if intentionally handling no errors)
        'no-empty': ['error', { allowEmptyCatch: true }],

        // Allow async functions without an await expression
        'require-await': 0,

        '@typescript-eslint/no-empty-interface': 'off',

        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-ignore': false,
          },
        ],

        // Enforce trailing commas in multiline arrays and objects
        'comma-dangle': ['error', 'always-multiline'],

        // Do not use semicolons at the end of statements
        semi: ['error', 'never'],

        // Disable unused variable warnings for specific lines
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',

        // Let Prettier handle the end of line characters
        'linebreak-style': 'off',

        // Enforce using strict mode
        strict: ['error', 'global'],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
      },
    },
    react: {
      version: '^16.8.6',
    },
  },
};
