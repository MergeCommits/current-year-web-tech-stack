import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { env } from "src/env";

import * as schema from "src/server/db/schema";

const sql = neon<boolean, boolean>(env.NEON_DATABASE_URL);

export const db = drizzle(sql, { schema });
