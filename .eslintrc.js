// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "react-app",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // 自訂規則 (可選)
    "react/react-in-jsx-scope": "off", // React 17+ 不需要 import React
    "react/prop-types": "off",
  },
};
