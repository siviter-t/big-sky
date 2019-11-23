module.exports = {
    parser: "@typescript-eslint/parser",
    extends: ["plugin:react/recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "no-restricted-imports": ["error", { patterns: ["*./*", "*../*"] }], // No relative imports
        "@typescript-eslint/explicit-function-return-type": "off", // Stict type inferrence is perfectly fine :)
        "@typescript-eslint/no-explicit-any": "off", // Sometimes, it is unfortunately necessary :(
        "react/prop-types": "off" // Strict typing is again, just fine
    }
};
