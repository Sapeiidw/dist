"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const agamaService_1 = require("../services/agamaService");
const agama_1 = require("../schemas/public/agama");
const index = async (req, res, next) => {
    try {
        const data = await (0, agamaService_1.getAgama)();
        return res.status(200).json({
            message: "Success Get Agama",
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
        const data = await (0, agamaService_1.getAgamaById)((_a = req.user) === null || _a === void 0 ? void 0 : _a.id_pegawai);
        return res.status(200).json({
            message: "Success Get Agama",
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
        const validate = agama_1.insertAgamaSchema.parse(req.body);
        const data = await (0, agamaService_1.createAgama)(validate);
        return res.status(200).json({
            message: "Success Create Agama",
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
        const validate = agama_1.insertAgamaSchema.parse(req.body);
        const data = await (0, agamaService_1.updateAgama)(parseInt(req.params.id), validate);
        return res.status(200).json({
            message: "Success Update Agama",
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
        const data = await (0, agamaService_1.deleteAgama)(parseInt(req.params.id));
        return res.status(200).json({
            message: "Success Delete Agama",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
