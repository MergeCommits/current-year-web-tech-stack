import { sql } from "drizzle-orm";
import {
    index,
    pgTableCreator,
    serial,
    timestamp,
    varchar,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
    (name) => `current-year-web-template_${name}`
);

export const posts = createTable(
    "post",
    {
        id: serial("id").primaryKey(),
        name: varchar("name", { length: 256 }),
        createdAt: timestamp("created_at")
            .default(sql`CURRENT_TIMESTAMP`)
            .notNull(),
        updatedAt: timestamp("updatedAt"),
        createdById: varchar("createdById", { length: 255 }).notNull(),
    },
    (example) => ({
        createdByIdIdx: index("createdById_idx").on(example.createdById),
        nameIndex: index("name_idx").on(example.name),
    })
);
