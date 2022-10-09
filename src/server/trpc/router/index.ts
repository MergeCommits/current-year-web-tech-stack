// src/server/trpc/router/index.ts
import { authRouter } from "server/trpc/router/auth";
import { exampleRouter } from "server/trpc/router/example";
import { t } from "server/trpc/trpc";

export const appRouter = t.router({
    example: exampleRouter,
    auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
