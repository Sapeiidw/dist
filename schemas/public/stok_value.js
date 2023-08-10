"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stokValue = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const barang_1 = require("./barang");
const gudang_1 = require("./gudang");
exports.stokValue = (0, pg_core_1.pgTable)("stok_value", {
    years: (0, pg_core_1.varchar)("years", { length: 4 }).notNull(),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    idBarang: (0, pg_core_1.bigint)("id_barang", { mode: "number" })
        .notNull()
        .references(() => barang_1.barang.id),
    db0: (0, pg_core_1.numeric)("db0").default("0"),
    db1: (0, pg_core_1.numeric)("db1").default("0"),
    db2: (0, pg_core_1.numeric)("db2").default("0"),
    db3: (0, pg_core_1.numeric)("db3").default("0"),
    db4: (0, pg_core_1.numeric)("db4").default("0"),
    db5: (0, pg_core_1.numeric)("db5").default("0"),
    db6: (0, pg_core_1.numeric)("db6").default("0"),
    db7: (0, pg_core_1.numeric)("db7").default("0"),
    db8: (0, pg_core_1.numeric)("db8").default("0"),
    db9: (0, pg_core_1.numeric)("db9").default("0"),
    db10: (0, pg_core_1.numeric)("db10").default("0"),
    db11: (0, pg_core_1.numeric)("db11").default("0"),
    db12: (0, pg_core_1.numeric)("db12").default("0"),
    db13: (0, pg_core_1.numeric)("db13").default("0"),
    cr0: (0, pg_core_1.numeric)("cr0").default("0"),
    cr1: (0, pg_core_1.numeric)("cr1").default("0"),
    cr2: (0, pg_core_1.numeric)("cr2").default("0"),
    cr3: (0, pg_core_1.numeric)("cr3").default("0"),
    cr4: (0, pg_core_1.numeric)("cr4").default("0"),
    cr5: (0, pg_core_1.numeric)("cr5").default("0"),
    cr6: (0, pg_core_1.numeric)("cr6").default("0"),
    cr7: (0, pg_core_1.numeric)("cr7").default("0"),
    cr8: (0, pg_core_1.numeric)("cr8").default("0"),
    cr9: (0, pg_core_1.numeric)("cr9").default("0"),
    cr10: (0, pg_core_1.numeric)("cr10").default("0"),
    cr11: (0, pg_core_1.numeric)("cr11").default("0"),
    cr12: (0, pg_core_1.numeric)("cr12").default("0"),
    cr13: (0, pg_core_1.numeric)("cr13").default("0"),
    idGudang: (0, pg_core_1.integer)("id_gudang")
        .notNull()
        .references(() => gudang_1.gudang.idGudang),
}, (table) => {
    return {
        pkeyStokValue: (0, pg_core_1.primaryKey)(table.years, table.idBarang, table.idGudang),
    };
});
