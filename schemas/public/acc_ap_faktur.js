"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accApFaktur = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.accApFaktur = (0, pg_core_1.pgTable)("acc_ap_faktur", {
    apNumber: (0, pg_core_1.serial)("ap_number").primaryKey().notNull(),
    apDate: (0, pg_core_1.date)("ap_date"),
    vendorCode: (0, pg_core_1.integer)("vendor_code"),
    amount: (0, pg_core_1.numeric)("amount"),
    dueDate: (0, pg_core_1.date)("due_date"),
    notes: (0, pg_core_1.text)("notes"),
    reff: (0, pg_core_1.varchar)("reff", { length: 100 }),
    poNumber: (0, pg_core_1.varchar)("po_number", { length: 500 }),
    status: (0, pg_core_1.varchar)("status", { length: 1 }),
    bayar: (0, pg_core_1.numeric)("bayar").default("0"),
    ppn: (0, pg_core_1.numeric)("ppn").default("0"),
    pph: (0, pg_core_1.numeric)("pph").default("0"),
    total: (0, pg_core_1.numeric)("total").default("0"),
    tglInvoice: (0, pg_core_1.date)("tgl_invoice"),
    receiveDate: (0, pg_core_1.date)("receive_date"),
    top: (0, pg_core_1.integer)("top").default(0),
    materai: (0, pg_core_1.numeric)("materai").default("0"),
});
