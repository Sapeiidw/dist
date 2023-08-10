"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.getSatuan = exports.show = exports.getOption = exports.index = void 0;
const barangService_1 = require("../services/barangService");
const barang_1 = require("../schemas/public/barang");
const index = async (req, res, next) => {
    try {
        const data = await (0, barangService_1.getBarang)();
        return res.status(200).json({
            message: "Success Get Barang",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.index = index;
const getOption = async (req, res, next) => {
    try {
        const data = await (0, barangService_1.getOptionBarang)();
        return res.status(200).json({
            message: "Success Get Option Barang",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getOption = getOption;
const show = async (req, res, next) => {
    var _a;
    try {
        const data = await (0, barangService_1.getBarangById)((_a = req.user) === null || _a === void 0 ? void 0 : _a.id_pegawai);
        return res.status(200).json({
            message: "Success Get Barang",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.show = show;
const getSatuan = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await (0, barangService_1.getBarangSatuanByIdBarang)(parseInt(id));
        return res.status(200).json({
            message: "Success Get Satuan",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.getSatuan = getSatuan;
const store = async (req, res, next) => {
    try {
        const validate = barang_1.insertBarangExtendedSchema.parse(req.body);
        const data = await (0, barangService_1.createBarang)(validate);
        return res.status(200).json({
            message: "Success Create Barang",
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
        const validate = barang_1.insertBarangExtendedSchema.parse(req.body);
        const data = await (0, barangService_1.updateBarang)(validate);
        return res.status(200).json({
            message: "Success Update Barang",
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
        const data = await (0, barangService_1.deleteBarang)(1);
        return res.status(200).json({
            message: "Success Delete Barang",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
