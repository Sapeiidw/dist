"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const kategoriKontakService_1 = require("../services/kategoriKontakService");
const kategori_kontak_1 = require("../schemas/public/kategori_kontak");
const index = async (req, res, next) => {
    try {
        const data = await (0, kategoriKontakService_1.getKategoriKontak)();
        return res.status(200).json({
            message: "Success Get KategoriKontak",
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
        const data = await (0, kategoriKontakService_1.getKategoriKontakById)(parseInt(req.params.id));
        return res.status(200).json({
            message: "Success Get KategoriKontak",
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
        const validate = kategori_kontak_1.insertKategoriKontakSchema.parse(req.body);
        const data = await (0, kategoriKontakService_1.createKategoriKontak)(validate);
        return res.status(200).json({
            message: "Success Create KategoriKontak",
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
        const validate = kategori_kontak_1.insertKategoriKontakSchema.parse(req.body);
        const data = await (0, kategoriKontakService_1.updateKategoriKontak)(parseInt(req.params.id), validate);
        return res.status(200).json({
            message: "Success Update KategoriKontak",
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
        const data = await (0, kategoriKontakService_1.deleteKategoriKontak)(parseInt(req.params.id));
        return res.status(200).json({
            message: "Success Delete KategoriKontak",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
