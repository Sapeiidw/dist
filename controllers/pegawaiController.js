"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.getOption = exports.index = void 0;
const pegawaiService_1 = require("../services/pegawaiService");
const pegawai_1 = require("../schemas/hr/pegawai");
const index = async (req, res, next) => {
    try {
        const data = await (0, pegawaiService_1.getPegawai)();
        return res.status(200).json({
            message: "Success Get Pegawai",
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
        const data = await (0, pegawaiService_1.getOptionPegawai)();
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
    try {
        const data = await (0, pegawaiService_1.getPegawaiById)(parseInt(req.params.id_pegawai));
        return res.status(200).json({
            message: "Success Get Pegawai",
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
        const validate = pegawai_1.insertPegawaiSchema.parse(req.body);
        const data = await (0, pegawaiService_1.createPegawai)(validate);
        return res.status(200).json({
            message: "Success Create Pegawai",
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
        const validate = pegawai_1.insertPegawaiSchema.parse(req.body);
        const data = await (0, pegawaiService_1.updatePegawai)(parseInt(req.params.id_pegawai), validate);
        return res.status(200).json({
            message: "Success Update Pegawai",
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
        const data = await (0, pegawaiService_1.deletePegawai)(parseInt(req.params.id_pegawai));
        return res.status(200).json({
            message: "Success Delete Pegawai",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
