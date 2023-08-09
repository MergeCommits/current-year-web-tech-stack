![](https://img.shields.io/badge/Among_Us-ඞ-red)

_99% of the comments written here are my own opinion. No clue what the other 1%
is though..._

Just a generated [create-t3-app](https://create.t3.gg/) with a better tsconfig and more opinionated linting/prettier
options.

# Technology

- [Next.js](https://nextjs.org/)
- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TRPC](https://trpc.io)
- [TailwindCSS](https://tailwindcss.com)
- [Prettier](https://prettier.io)
- [ESLint](https://eslint.org)

## Host recommendations

- [Vercel - hosting](https://vercel.com)
- [PlanetScale - MySQL database](https://planetscale.com)
  - [Notes about using Prisma with PlanetScale](https://www.prisma.io/docs/guides/database/using-prisma-with-planetscale#differences-to-consider)
- [Firebase - hosting, auth, document database](https://firebase.google.com)
  - [How to integrate Next.js with Firebase](https://firebase.google.com/docs/hosting/frameworks/nextjs)

## Differences to t3 stack

Doesn't T3 look a lot cooler when it's written as "t3" with a lowercase t? You
agree right?

- Additional ESLint plugins for React.
- Additional Prettier plugins for package.json, sorting imports, prisma and .env files.
- tsconfig has just about every strict flag enabled.
- The `baseURL` parameter is set to the src directory in the tsconfig. Removes the need to write `../../components` or `src/components` when importing files and simply write `components` instead. `eslint-plugin-no-relative-import-paths` was also added to enforce this.
- [`verbatimModuleSyntax`](https://www.typescriptlang.org/tsconfig#verbatimModuleSyntax) is enabled in the tsconfig.
- Added [Husky](https://typicode.github.io/husky/#/) and [lint-staged](https://github.com/okonet/lint-staged) to run ESLint and Prettier on staged files before committing.

## Other notes for myself here incase something breaks

- `yarn db:push` is required to generate the initial SQLite file otherwise it will error out.
- https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins - Look at this in the event that prettier stops working.
- Use [`tsconfig-paths-webpack-plugin`](https://www.npmjs.com/package/tsconfig-paths-webpack-plugin) to sync the `baseURL` parameter from the tsconfig to webpack if necessary.
