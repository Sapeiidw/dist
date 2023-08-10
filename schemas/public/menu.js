"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMenuSchema = exports.menu = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
exports.menu = (0, pg_core_1.pgTable)("menu", {
    id: (0, pg_core_1.integer)("id").primaryKey().notNull(),
    name: (0, pg_core_1.varchar)("name", { length: 255 }).notNull(),
    icon: (0, pg_core_1.varchar)("icon", { length: 255 }),
    outcome: (0, pg_core_1.varchar)("outcome", { length: 255 }),
    urut: (0, pg_core_1.integer)("urut"),
    parent: (0, pg_core_1.integer)("parent"),
    keterangan: (0, pg_core_1.text)("keterangan"),
    jenis: (0, pg_core_1.varchar)("jenis", { length: 1 }),
    roles: (0, pg_core_1.varchar)("roles", { length: 50 }),
    target: (0, pg_core_1.varchar)("target", { length: 50 }),
    url: (0, pg_core_1.varchar)("url", { length: 255 }),
});
exports.insertMenuSchema = (0, drizzle_zod_1.createInsertSchema)(exports.menu);
