import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import { env } from "env";
import * as schema from "server/db/schema";

export const db = drizzle(
    new Client({
        url: env.DATABASE_URL,
    }).connection(),
    { schema }
);
