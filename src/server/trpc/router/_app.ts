import { authRouter } from "server/trpc/router/auth";
import { exampleRouter } from "server/trpc/router/example";
import { router } from "server/trpc/trpc";

export const appRouter = router({
    example: exampleRouter,
    auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
