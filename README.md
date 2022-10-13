![](https://img.shields.io/badge/Among_Us-ඞ-red)

_99% of the comments written here are my own opinion. No clue what the other 1%
is though..._

Just the t3 stack with a better tsconfig and more opinionated linting/prettier
options.

# Technology

- [Next.js](https://nextjs.org/)
- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TRPC](https://trpc.io)
- [Prettier](https://prettier.io)
- [ESLint](https://eslint.org)

## Host recommendations

- [Vercel - hosting](https://vercel.com)
- [PlanetScale - MySQL database](https://planetscale.com)
    - [Notes about using Prisma with PlanetScale](https://www.prisma.io/docs/guides/database/using-prisma-with-planetscale#differences-to-consider)

## Differences to t3 stack

Doesn't T3 look a lot cooler when it's written as "t3" with a lowercase t? You
agree right?

- Additional ESLint plugins for React.
- The `baseURL` parameter is set to the src directory in the tsconfig. Removes the need to write `../../components` or `src/components` when importing files and simply write `components` instead.
  - An ESLint rule is also added to enforce this.
- `importsNotUsedAsValues` is enforced in the tsconfig. It requires all [types to be imported using the `import type` syntax](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export).
  - As for why this matters, remember that types are erased at compile time and
    therefore don't need to be included in the final bundle. Using this fully erases type imports. ...so yeah it kinda doesn't matter but [it may matter in the future](https://stackoverflow.com/a/64243357/14880246).

## Other technologies

- [GitHub Copilot](https://github.com/features/copilot) - It's not going to write everything for you, but it saves you from having to google how to use JavaScript's `map` function every time you want to use it.
  - The real question is how much of this ReadMe was written by GitHub Copilot ;)