"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const kategoriBarangService_1 = require("../services/kategoriBarangService");
const kategori_barang_1 = require("../schemas/public/kategori_barang");
const index = async (req, res, next) => {
    try {
        const data = await (0, kategoriBarangService_1.getKategoriBarang)();
        return res.status(200).json({
            message: "Success Get KategoriBarang",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.index = index;
const show = async (req, res, next) => {
    try {
        const data = await (0, kategoriBarangService_1.getKategoriBarangById)(parseInt(req.params.id));
        return res.status(200).json({
            message: "Success Get KategoriBarang",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.show = show;
const store = async (req, res, next) => {
    try {
        const validate = kategori_barang_1.insertKategoriBarangSchema.parse(req.body);
        const data = await (0, kategoriBarangService_1.createKategoriBarang)(validate);
        return res.status(200).json({
            message: "Success Create KategoriBarang",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.store = store;
const update = async (req, res, next) => {
    try {
        const validate = kategori_barang_1.insertKategoriBarangSchema.parse(req.body);
        const data = await (0, kategoriBarangService_1.updateKategoriBarang)(validate);
        return res.status(200).json({
            message: "Success Update KategoriBarang",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.update = update;
const destroy = async (req, res, next) => {
    try {
        const data = await (0, kategoriBarangService_1.deleteKategoriBarang)(parseInt(req.params.id));
        return res.status(200).json({
            message: "Success Delete KategoriBarang",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
