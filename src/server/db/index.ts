import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "src/env";
import * as schema from "src/server/db/schema";

export const db = drizzle(
    new Client({
        url: env.DATABASE_URL,
    }),
    { schema }
);
