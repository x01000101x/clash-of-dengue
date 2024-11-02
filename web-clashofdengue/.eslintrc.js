module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true, // Pastikan ini ada
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    parserOptions: {
        ecmaVersion: 12, // Versi ECMAScript 2021
        sourceType: "module",
    },
    rules: {
        "no-unused-vars": "warn",
        "vue/no-unused-vars": "warn",
        "vue/no-mutating-props": "error",
        "comma-dangle": ["error", "always-multiline"], // Aturan untuk comma-dangle
    },
};
