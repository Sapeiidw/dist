"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertPenggunaSchema = exports.pengguna = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const drizzle_zod_1 = require("drizzle-zod");
exports.pengguna = (0, pg_core_1.pgTable)("pengguna", {
    usernamenya: (0, pg_core_1.varchar)("usernamenya", { length: 100 }).primaryKey().notNull(),
    passwordnya: (0, pg_core_1.varchar)("passwordnya", { length: 100 }).notNull(),
    dibuat: (0, pg_core_1.timestamp)("dibuat", { mode: "string" }),
    loginterakhir: (0, pg_core_1.timestamp)("loginterakhir", { mode: "string" }),
    enabled: (0, pg_core_1.boolean)("enabled").default(true),
    jmlogin: (0, pg_core_1.integer)("jmlogin").default(0),
    loginterbaru: (0, pg_core_1.timestamp)("loginterbaru", { mode: "string" }),
    roles: (0, pg_core_1.varchar)("roles", { length: 20 }),
    pinnya: (0, pg_core_1.varchar)("pinnya", { length: 100 }),
    idPegawai: (0, pg_core_1.integer)("id_pegawai"),
    // idPegawai: integer("id_pegawai").references(() => pegawai.id_pegawai),
});
// export const penggunaRelations = relations(pengguna, ({ one }) => ({
//   pegawai: one(pegawai, {
//     fields: [pengguna.idPegawai],
//     references: [pegawai.id_pegawai],
//   }),
// }));
exports.insertPenggunaSchema = (0, drizzle_zod_1.createInsertSchema)(exports.pengguna);
