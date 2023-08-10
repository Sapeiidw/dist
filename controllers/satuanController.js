"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const satuanService_1 = require("../services/satuanService");
const satuan_1 = require("../schemas/public/satuan");
const index = async (req, res, next) => {
    try {
        const data = await (0, satuanService_1.getSatuan)();
        return res.status(200).json({
            message: "Success Get Satuan",
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
        const data = await (0, satuanService_1.getSatuanById)(parseInt(req.params.id));
        return res.status(200).json({
            message: "Success Get Satuan",
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
        const validate = satuan_1.insertSatuanSchema.parse(req.body);
        const data = await (0, satuanService_1.createSatuan)(validate);
        return res.status(200).json({
            message: "Success Create Satuan",
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
        const validate = satuan_1.insertSatuanSchema.parse(req.body);
        const data = await (0, satuanService_1.updateSatuan)(parseInt(req.params.id), validate);
        return res.status(200).json({
            message: "Success Update Satuan",
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
        const data = await (0, satuanService_1.deleteSatuan)(1);
        return res.status(200).json({
            message: "Success Delete Satuan",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
