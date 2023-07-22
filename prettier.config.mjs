/** @type {import('prettier').Config} */
const config = {
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: true,
    singleQuote: false,
    jsxSingleQuote: false,
    quoteProps: "as-needed",
    trailingComma: "es5",
    bracketSpacing: true,
    arrowParens: "always",
    endOfLine: "lf",
    embeddedLanguageFormatting: "auto",
    overrides: [
        {
            files: "*.{md,yml}",
            options: {
                tabWidth: 2,
            },
        },
        {
            files: ".env.*",
            options: {
                parser: "sh",
            },
        },
    ],
    plugins: [
        "prettier-plugin-organize-imports",
        "prettier-plugin-pkg",
        "prettier-plugin-prisma",
        "prettier-plugin-sh",
        "prettier-plugin-tailwindcss", // Tailwind must go last: https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
    ],
};

export default config;
