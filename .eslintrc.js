module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["xo", "eslint:recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "module",
      },
    },
    {
      extends: ["xo-typescript", "eslint:recommended", "prettier"],
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/naming-convention": "off",
        "@typescript-eslint/parameter-properties": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
