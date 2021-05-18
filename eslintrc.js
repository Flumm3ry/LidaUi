module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        'airbnb-typescript/base',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
    }
};
