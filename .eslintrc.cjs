module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh', 'import', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-console': 'warn',
    'semi': 'warn',
    'jsx-quotes': ['error', 'prefer-double'],
    'prefer-const': 'warn',
    'indent': ['warn', 2],
    'comma-dangle': ['error', 'always-multiline'],
    'padded-blocks': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      "error",
      {        
        "groups": [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",   
          "type"
        ],
        "newlines-between": "always-and-inside-groups",
        "pathGroups": [
          {
            "pattern": "@/**/**",
            "group": "parent",
            "position": "before"
          }
        ],
        "alphabetize": {"order": "asc"}
      }
    ],
  },
}
