"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.barangMinmax = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.barangMinmax = (0, pg_core_1.pgTable)("barang_minmax", {
    idGudang: (0, pg_core_1.varchar)("id_gudang", { length: 3 }).notNull(),
    idBarang: (0, pg_core_1.varchar)("id_barang", { length: 30 }).notNull(),
    min: (0, pg_core_1.numeric)("min").default("0").notNull(),
    max: (0, pg_core_1.numeric)("max").default("0").notNull(),
}, (table) => {
    return {
        barangMinmaxPkey: (0, pg_core_1.primaryKey)(table.idGudang, table.idBarang),
    };
});
