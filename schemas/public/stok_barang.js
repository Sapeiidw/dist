"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stokBarang = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const barang_1 = require("./barang");
const gudang_1 = require("./gudang");
exports.stokBarang = (0, pg_core_1.pgTable)("stok_barang", {
    idGudang: (0, pg_core_1.integer)("id_gudang")
        .notNull()
        .references(() => gudang_1.gudang.idGudang),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idBarang: (0, pg_core_1.bigint)("id_barang", { mode: "number" })
        .notNull()
        .references(() => barang_1.barang.id),
    stok: (0, pg_core_1.numeric)("stok").notNull(),
    tanggal: (0, pg_core_1.date)("tanggal").notNull(),
    hpp: (0, pg_core_1.numeric)("hpp"),
    batch: (0, pg_core_1.varchar)("batch", { length: 100 }),
    idStok: (0, pg_core_1.serial)("id_stok").primaryKey().notNull(),
    reff: (0, pg_core_1.varchar)("reff", { length: 5 }),
    idReff: (0, pg_core_1.integer)("id_reff").notNull(),
});
