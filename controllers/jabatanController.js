"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const jabatanService_1 = require("../services/jabatanService");
const jabatan_1 = require("../schemas/hr/jabatan");
const index = async (req, res, next) => {
    try {
        const data = await (0, jabatanService_1.getJabatan)();
        return res.status(200).json({
            message: "Success Get Jabatan",
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
        const data = await (0, jabatanService_1.getJabatanById)(parseInt(req.params.id));
        return res.status(200).json({
            message: "Success Get Jabatan",
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
        const validate = jabatan_1.insertJabatanSchema.parse(req.body);
        const data = await (0, jabatanService_1.createJabatan)(validate);
        return res.status(200).json({
            message: "Success Create Jabatan",
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
        const validate = jabatan_1.insertJabatanSchema.parse(req.body);
        const data = await (0, jabatanService_1.updateJabatan)(validate);
        return res.status(200).json({
            message: "Success Update Jabatan",
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
        const data = await (0, jabatanService_1.deleteJabatan)(parseInt(req.params.id));
        return res.status(200).json({
            message: "Success Delete Jabatan",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
