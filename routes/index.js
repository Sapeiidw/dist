"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const authRoute_1 = require("./authRoute");
const penggunaRoute_1 = require("./penggunaRoute");
const quotationRoute_1 = require("./quotationRoute");
const barangRoute_1 = require("./barangRoute");
const gudangRoute_1 = require("./gudangRoute");
const satuanRoute_1 = require("./satuanRoute");
const pajakRoute_1 = require("./pajakRoute");
const pegawaiRoute_1 = require("./pegawaiRoute");
const kontakRoute_1 = require("./kontakRoute");
// TODO: Routes sakteh
const agamaRoute_1 = require("./agamaRoute");
const jabatanRoute_1 = require("./jabatanRoute");
const departemenRoute_1 = require("./departemenRoute");
const kategoriKontakRoute_1 = require("./kategoriKontakRoute");
const optionRoute_1 = require("./optionRoute");
const kategoriBarangRoute_1 = require("./kategoriBarangRoute");
const accountRoute_1 = require("./accountRoute");
const menuRoute_1 = require("./menuRoute");
// TODO: Routes Alwi
const brandRoute_1 = require("./brandRoute");
// import { userRoute } from "@routes/userRoute";
const router = (0, express_1.Router)();
exports.routes = router;
// TODO: Routes sakteh
router.use("/auth", authRoute_1.authRoute);
router.use("/pengguna", penggunaRoute_1.penggunaRoute);
router.use("/pegawai", pegawaiRoute_1.pegawaiRoute);
router.use("/kontak", kontakRoute_1.kontakRoute);
router.use("/agama", agamaRoute_1.agamaRoute);
router.use("/jabatan", jabatanRoute_1.jabatanRoute);
router.use("/departemen", departemenRoute_1.departemenRoute);
router.use("/kategori-kontak", kategoriKontakRoute_1.kategoriKontakRoute);
router.use("/kategori-barang", kategoriBarangRoute_1.kategoriBarangRoute);
router.use("/option", optionRoute_1.optionRoute);
router.use("/account", accountRoute_1.accountRoute);
router.use("/menu", menuRoute_1.menuRoute);
// TODO: Routes Alwi
router.use("/quotation", quotationRoute_1.quotationRoute);
router.use("/barang", barangRoute_1.barangRoute);
router.use("/satuan", satuanRoute_1.satuanRoute);
router.use("/brand", brandRoute_1.brandRoute);
router.use("/gudang", gudangRoute_1.gudangRoute);
router.use("/pajak", pajakRoute_1.pajakRoute);
