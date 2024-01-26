![](https://img.shields.io/badge/Among_Us-ඞ-red)

Just a generated [create-t3-app](https://create.t3.gg) with a bunch of opinionated addons to make a complete website stack.

# Technology

- [Next.js](https://nextjs.org) - combining server/client code without a monorepo, uses app router
- [Clerk](https://clerk.com) - user auth management and components
- [next-intl](https://next-intl-docs.vercel.app) - type-safe i18n
- [Drizzle](https://orm.drizzle.team) - type-safe ORM right down to joined queries
- [TRPC](https://trpc.io) - type-safe api endpoints
- [TailwindCSS](https://tailwindcss.com) - styling
- [Vitest](https://vitest.dev) - unit/integration testing
- [Prettier](https://prettier.io) - code formatter
- [ESLint](https://eslint.org) - formatter/linter
- [CSpell](https://cspell.org) - spell checker
- [Husky](https://typicode.github.io/husky) and [lint-staged](https://github.com/okonet/lint-staged) - run ESLint, Prettier and CSpell on staged files before committing

## Other technologies I use but not commonly enough for me to add to this template

- [ShadCN](https://ui.shadcn.com/) - common UI components
- [react-hook-form](https://react-hook-form.com) - form validation, compatible with zod

## Other notable improvements

- Additional ESLint plugins/settings for React and Typescript.
- Additional Prettier plugins for package.json, sorting imports, sorting tailwind and .env files.
- tsconfig has just about every strict flag enabled.
- The `baseURL` parameter is set to the src directory in the tsconfig. Removes the need to write `../../components` or `src/components` when importing files and simply write `components` instead. `eslint-plugin-no-relative-import-paths` was also added to enforce this.
- [`verbatimModuleSyntax`](https://www.typescriptlang.org/tsconfig#verbatimModuleSyntax) is enabled in the tsconfig.

# Hosting recommendations

- [Vercel - hosting](https://vercel.com)
- [PlanetScale - MySQL database](https://planetscale.com)
- [Firebase - document database](https://firebase.google.com) (among several other things it can do)

# Other notes for myself here incase something breaks

- `pnpm db:push` is required to initiate the database otherwise it will error out.
- https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins - Look at this in the event that prettier stops working.
- Use [`tsconfig-paths-webpack-plugin`](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin) to sync the `baseURL` parameter from the tsconfig to webpack if necessary.
