"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAgamaSchema = exports.agama = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
exports.agama = (0, pg_core_1.pgTable)("agama", {
    id: (0, pg_core_1.serial)("id").primaryKey().notNull(),
    agama: (0, pg_core_1.varchar)("agama", { length: 25 }).notNull(),
});
exports.insertAgamaSchema = (0, drizzle_zod_1.createInsertSchema)(exports.agama);
