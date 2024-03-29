import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    /**
     * Specify your server-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars.
     */
    server: {
        NEON_DATABASE_URL: z
            .string()
            .url()
            .refine(
                (s) => s.startsWith("postgresql://"),
                "Your Neon database URL does not start with `postgresql://`"
            )
            .refine(
                (s) => !s.includes("YOUR_POSTGRESQL_URL_HERE"),
                "You forgot to change the default Neon database URL"
            ),
        NODE_ENV: z
            .enum(["development", "test", "production"])
            .default("development"),
        CLERK_SECRET_KEY: z.string().refine((s) => s.startsWith("sk_")),
    },

    /**
     * Specify your client-side environment variables schema here. This way you can ensure the app
     * isn't built with invalid env vars. To expose them to the client, prefix them with
     * `NEXT_PUBLIC_`.
     */
    client: {
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z
            .string()
            .refine((s) => s.startsWith("pk_")),
    },

    /**
     * You can't destruct `process.env` as a regular object in the Next.js edge runtime (e.g.
     * middlewares) or client-side so we need to destruct manually.
     */
    runtimeEnv: {
        NEON_DATABASE_URL: process.env["NEON_DATABASE_URL"],
        NODE_ENV: process.env.NODE_ENV,
        CLERK_SECRET_KEY: process.env["CLERK_SECRET_KEY"],
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
            process.env["NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY"],
    },
    /**
     * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
     * useful for Docker builds.
     */
    skipValidation: Boolean(process.env["SKIP_ENV_VALIDATION"]),
    /**
     * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
     * `SOME_VAR=''` will throw an error.
     */
    emptyStringAsUndefined: true,
});
