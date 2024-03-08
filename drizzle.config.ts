import { type Config } from "drizzle-kit";

import { env } from "src/env";

export default {
    schema: "./src/server/db/schema.ts",
    driver: "pg",
    dbCredentials: {
        connectionString: env.NEON_DATABASE_URL,
    },
    tablesFilter: ["current-year-web-template_*"],
} satisfies Config;
