module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: "airbnb",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jest"],
  rules: {
    "no-underscore-dangle": 0,
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "no-continue": 0,
    "no-param-reassign": 0,
    "no-nested-ternary": 0,
    "no-plusplus": 0,
    "no-use-before-define": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": 0,
    "react/jsx-props-no-spreading": 0,
    "no-await-in-loop": 0,
    "no-prototype-builtins": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "consistent-return": 0,
    "no-shadow": 0
  }
};
