"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hakakses = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
const pengguna_1 = require("./pengguna");
const menu_1 = require("./menu");
exports.hakakses = (0, pg_core_1.pgTable)("hakakses", {
    usernamenya: (0, pg_core_1.varchar)("usernamenya", { length: 100 })
        .notNull()
        .references(() => pengguna_1.pengguna.usernamenya),
    idMenu: (0, pg_core_1.integer)("id_menu")
        .notNull()
        .references(() => menu_1.menu.id),
}, (table) => {
    return {
        hakaksesPkey: (0, pg_core_1.primaryKey)(table.usernamenya, table.idMenu),
    };
});
