module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base', 'prettier'
  ],
  plugins: [
    'prettier',
    'react',
    'react-hooks',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  "parser": "babel-eslint",
  rules: {
    "prettier/prettier": "error",
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
    "no-unused-vars": ["error", { "argsIgnorePattern": "next"}],
    'no-console': ["error", {allow: ["tron"]}],

    'react-hooks/rules-of-hooks': 'error', //Irá avisar qualquer tentativa de uso que infligir as regras de uso do React Hooks,
    'react-hooks/exhaustive-deps': 'warn', //Avisa se está faltando alguma dependencian no uso dos Hooks Effects.
  },
};
