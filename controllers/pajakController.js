"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroy = exports.update = exports.store = exports.show = exports.index = void 0;
const pajakService_1 = require("../services/pajakService");
const pajak_1 = require("../schemas/public/pajak");
const index = async (req, res, next) => {
    try {
        const data = await (0, pajakService_1.getPajak)();
        return res.status(200).json({
            message: "Success Get Pajak",
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
        const data = await (0, pajakService_1.getPajakByUsernamenya)((_a = req.user) === null || _a === void 0 ? void 0 : _a.id_pegawai);
        return res.status(200).json({
            message: "Success Get Pajak",
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
        const validate = pajak_1.insertPajakSchema.parse(req.body);
        const data = await (0, pajakService_1.createPajak)(validate);
        return res.status(200).json({
            message: "Success Create Pajak",
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
        const validate = pajak_1.insertPajakSchema.parse(req.body);
        const data = await (0, pajakService_1.updatePajak)(validate);
        return res.status(200).json({
            message: "Success Update Pajak",
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
        const data = await (0, pajakService_1.deletePajak)(1);
        return res.status(200).json({
            message: "Success Delete Pajak",
            data: data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.destroy = destroy;
