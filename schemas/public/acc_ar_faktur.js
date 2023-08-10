"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accArFaktur = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.accArFaktur = (0, pg_core_1.pgTable)("acc_ar_faktur", {
    arNumber: (0, pg_core_1.serial)("ar_number").primaryKey().notNull(),
    arDate: (0, pg_core_1.date)("ar_date"),
    dueDate: (0, pg_core_1.date)("due_date"),
    notes: (0, pg_core_1.varchar)("notes", { length: 255 }),
    reff: (0, pg_core_1.varchar)("reff", { length: 50 }),
    noInvoice: (0, pg_core_1.varchar)("no_invoice", { length: 50 }),
    invoiceDate: (0, pg_core_1.date)("invoice_date"),
    ppn: (0, pg_core_1.numeric)("ppn").default("0"),
    pph: (0, pg_core_1.numeric)("pph").default("0"),
    total: (0, pg_core_1.numeric)("total").default("0"),
    top: (0, pg_core_1.integer)("top").default(0),
    status: (0, pg_core_1.varchar)("status", { length: 1 }),
    bayar: (0, pg_core_1.numeric)("bayar"),
    tglTerimainvoice: (0, pg_core_1.date)("tgl_terimainvoice"),
    bayarTotal: (0, pg_core_1.numeric)("bayar_total").default("0"),
    bayarPpn: (0, pg_core_1.numeric)("bayar_ppn").default("0"),
    customerCode: (0, pg_core_1.integer)("customer_code"),
    idSalesman: (0, pg_core_1.integer)("id_salesman"),
    grandtotal: (0, pg_core_1.numeric)("grandtotal"),
});
