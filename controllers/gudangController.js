"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const gudangService_1 = require("../services/gudangService");
const gudang_1 = require("../schemas/public/gudang");
const index = async (req, res, next) => {
    try {
        const data = await (0, gudangService_1.getGudang)();
        return res.status(200).json({
            message: "Success Get Gudang",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.index = index;
const show = async (req, res, next) => {
    var _a;
    try {
        const data = await (0, gudangService_1.getGudangByUsernamenya)((_a = req.user) === null || _a === void 0 ? void 0 : _a.id_pegawai);
        return res.status(200).json({
            message: "Success Get Gudang",
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
        const validate = gudang_1.insertGudangSchema.parse(req.body);
        const data = await (0, gudangService_1.createGudang)(validate);
        return res.status(200).json({
            message: "Success Create Gudang",
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
        const validate = gudang_1.insertGudangSchema.parse(req.body);
        const data = await (0, gudangService_1.updateGudang)(validate);
        return res.status(200).json({
            message: "Success Update Gudang",
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
        const data = await (0, gudangService_1.deleteGudang)(1);
        return res.status(200).json({
            message: "Success Delete Gudang",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
