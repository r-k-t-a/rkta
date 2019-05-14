module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",

    "plugin:@typescript-eslint/recommended",
    "airbnb",

    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 6,
    project: "./tsconfig.json",
    sourceType: "module"
  },
  rules: {
    'prettier/prettier': 'error',
    "react/jsx-filename-extension": [1, { "extensions": [".jsx", ".tsx"] }]
  }
}
